class App {
    constructor(){
        //https://nagarry.tistory.com/169 보고 배울만한 사이트 여러가지 캔버스랑 충돌등 여러가지 코드 구현
        
        
        App.app = this; // 앱에 스태틱으로 넣었다 이말이야
        this.gameWidth = 500;
        this.gameHeight = 800;

        this.canvas = document.querySelector("#myGame");
        this.gameover = document.querySelector("#gameover");
        this.ctx = this.canvas.getContext("2d");
        this.clear = document.querySelector("#stageClear");
        this.start = false;
        this.imageList = {}; //이미지 저장 오브젝트

        this.player = null;
        this.boss = null;
        
        this.backList = []; //배경그림 리스트
        this.playerBulletList = []; //플레이어 총알 리스트
        this.enemyList = []; //적기체 저장 리스트
        this.itemList = [];
        this.expList = []; //폭발리스트

        this.life = 3; //목숨
        this.plus = 50;
        
        
        this.gameTimer = 0; //게임이 시작되고 몇초가 흘렀는지 저장
        this.stageIdx = 0; //지금 몇번째 적을 만들어내는지 저장
        this.stageData = []; //스테이지의 데이터
        
        this.init(); //초기화 함수
    }

    async init(){ 
        this.imageList.player = await this.loadImage("/images/player.png");
        this.imageList.back = await this.loadImage("/images/back1.png");
        this.imageList.enemy = await this.loadImage("/images/enemy.png");
        this.imageList.boss = await this.loadImage("/images/boss.png");
        this.imageList.explosion = await this.loadImage("/images/explosion.png");
        this.imageList.life = await this.loadImage("/images/life.png");
        this.imageList.bulletUp = await this.loadImage("/images/bulletUp.png");
        //1스테이지 적
        this.imageList.Renemy1 = await this.loadImage("/images/redenemy1.png");
        this.imageList.Renemy2 = await this.loadImage("/images/redenemy2.png");
        this.imageList.Renemy3 = await this.loadImage("/images/redenemy3.png");
        this.imageList.Renemy4 = await this.loadImage("/images/redenemy4.png");
        this.imageList.Renemy5 = await this.loadImage("/images/redenemy5.png");
        this.imageList.Rboss = await this.loadImage("/images/redboss.png");
        
        
        //백그라운드 생성
        for(let i = 0; i < 3; i++){
            this.backList.push(
                new Background(0, - i * this.gameHeight, this.gameWidth, this.gameHeight, this.imageList.back));
        }
        //플레이어 생성(x좌표 y좌표 너비 높이 이미지)
        this.player = new Player(
            this.gameWidth / 2 - 30, this.gameHeight - 60,
            60, 40, this.imageList.player, this);

        let stage = new Stage(this.gameWidth, this.gameHeight, this.imageList);
        this.stageData = stage.stage1;


        requestAnimationFrame(this.frame.bind(this));
    }

    getOrCreateExplosion(x, y, w, h){
        let exp = this.expList.find(x => !x.active);
        if(exp === undefined){
            exp = new Explosion(this.imageList.explosion);
            this.expList.push(exp);
        }
        exp.setActive(x, y, w, h);
    }


    getOrCreateItem(x, y, w, h ,v) {
        let item = this.itemList.find(x => !x.active);
        if(item == undefined) {
            item = new Item(this.imageList.bulletUp);
            this.itemList.push(item);
        }

        item.setActive(x, y, w, h, new Vector(1,0));
    }

    getOrCreateBullet(x, y, r, s, v, isEnemy = true){
        let bullet = this.playerBulletList.find(x=> !x.active);
        if(bullet == undefined) {
            bullet = new Bullet();    
            this.playerBulletList.push(bullet);
        }
        bullet.setActive(x,y,r,s,v, isEnemy);
    }

    getOrCreateEnemy(data){
        let e = this.enemyList.find(x => !x.active);
        if(e === undefined) {
            if(data.t == 0) {
                e = new Enemy();
                this.enemyList.push(e);
            }
        }
        if(data.t == 1) {
            e = new Boss();
            this.enemyList.push(e);
        }

        e.reset(data.x, data.y, data.w, data.h, data.img, data.s, data.v, data.i); 
    }

    loadImage(name){
        return new Promise((res, rej)=>{
            let img = new Image();
            img.src = `${name}`;
            img.addEventListener("load", ()=>{
                res(img);
            });
        });
    }

    frame(time){
        if(!this.start) this.start = time;
        let delta = time - this.start;
        this.start = time;
        this.update(delta / 1000);
        this.render();
        requestAnimationFrame(this.frame.bind(this));
    }

    update(delta){
        if(!this.player.active) {
            this.gameover.style.display = "block";
            return;
        } 

        this.gameTimer += delta; //이렇게 되면 게임 진행시간이 this.gameTimer에 들어간다.

        this.backList.forEach(back => back.update(delta));
        if(this.backList[0].y > this.gameHeight){
            let first = this.backList.shift();
            first.y = this.backList[this.backList.length - 1].y - this.gameHeight;
            this.backList.push(first);
        }
        this.player.update(delta);
        this.player.checkOut(this.gameWidth, this.gameHeight);

        let nowEnemy = this.stageData[this.stageIdx];
        
        if(nowEnemy !== undefined && nowEnemy.time <= this.gameTimer){
            this.getOrCreateEnemy(nowEnemy.data);
            this.stageIdx++;
        }

        this.playerBulletList.forEach(b => b.update(delta));
        this.enemyList.filter(x => x.active).forEach(e => e.update(delta));

        this.playerBulletList.filter(b => b.active).forEach(b => {
            if(!b.isEnemy){
                this.enemyList.filter(e => e.active).forEach(e => {
                    if(e.checkCollision(b.x, b.y, b.r)){
                        e.setDamage(b.damage);
                        b.active = false;
                    }


                });
            }else {
                if(this.player.active) {
                    if(this.player.checkCollision(b.x, b.y, b.r)){
                        this.player.setDamage(b.damage);
                        this.life -= 1;
                        b.active = false;
                    }
                }
            }
        });

        this.enemyList.forEach( enemy => {
            if(this.player.checkCrash(enemy.x, enemy.y, enemy.w, enemy.y)) {
                this.player.setDamage(100);
                this.life = 0;
                console.log("sadsad");
            }
        });


        this.expList.forEach(e => e.update(delta));
    }
   
    render(){
        this.ctx.clearRect(0,0,this.gameWidth, this.gameHeight);
        this.backList.forEach(back => back.render(this.ctx));
        for(let i = 0; i < this.life; i ++) {
            
            if(i == 0) {
                this.ctx.drawImage(this.imageList.life, 0, 750, 50, 50);    
            } else if(i == 1) {
                this.ctx.drawImage(this.imageList.life, this.plus, 750, 50, 50);    
            } else {
                this.ctx.drawImage(this.imageList.life, this.plus + 50, 750, 50, 50);    
            }
        }
        this.player.render(this.ctx);
        this.playerBulletList.forEach(b => {
            if(b.isEnemy) {
                b.render(this.ctx, this.outsidecolor = "#8e1520", this.insidecolor= "#f8f9fa");
            } else {
                b.render(this.ctx, this.outsidecolor = "#e79143", this.insidecolor = "#f8f9fa");
            }
        });
        this.itemList.forEach(e => e.render(this.ctx));
        this.enemyList.forEach(e => e.render(this.ctx));
        this.expList.forEach(e => e.render(this.ctx));        
    }

}