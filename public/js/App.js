class App {
    constructor(){
        //https://nagarry.tistory.com/169 보고 배울만한 사이트 여러가지 캔버스랑 충돌등 여러가지 코드 구현
        
        
        App.app = this; // 앱에 스태틱으로 넣었다 이말이야
        this.gameWidth = 500;
        this.gameHeight = 800;

        this.canvas = document.querySelector("#myGame");
        this.ctx = this.canvas.getContext("2d");
        this.startbtn = document.querySelector(".startbtn");
        this.endview = document.querySelector(".end");
        this.scoreview = document.querySelector(".score");
        this.cheat = document.querySelector("#cheat").value;
        this.start = false;
        this.imageList = {}; //이미지 저장 오브젝트
        this.stage = null;
        this.player = null;
        this.boss = null;
        this.playerX = null;
        this.playerY = null;
        this.playStage = 1;
        this.backList = []; //배경그림 리스트
        this.playerBulletList = []; //플레이어 총알 리스트
        this.enemyList = []; //적기체 저장 리스트
        this.itemList = [];
        this.expList = []; //폭발리스트
        this.life = 3; //목숨
        this.plus = 50;
        this.score = 0;
        this.nowEnemy = null;
        this.stageNow = 1;
        this.gameTimer = 0; //게임이 시작되고 몇초가 흘렀는지 저장
        this.stageIdx = 0; //지금 몇번째 적을 만들어내는지 저장
        this.stageData = []; //스테이지의 데이터
        this.cnt = 1;
        this.itemCnt = 1;
        this.bossCnt = 1;
        this.init(); //초기화 함수
        this.endview.style.display ="none";
    }

    async init(){ 
        
        this.imageList.player = await this.loadImage("/images/player.png");
        this.imageList.back1 = await this.loadImage("/images/back1.png");
        this.imageList.back2 = await this.loadImage("/images/back2.jpg");
        this.imageList.back3 = await this.loadImage("/images/back3.png");
        this.imageList.enemy = await this.loadImage("/images/enemy.png");
        this.imageList.enemy2 = await this.loadImage("/images/enemy5.png");
        this.imageList.boss = await this.loadImage("/images/boss.png");
        this.imageList.explosion = await this.loadImage("/images/explosion.png");
        this.imageList.boom = await this.loadImage("/images/boom.png");
        this.imageList.life = await this.loadImage("/images/life.png");
        this.imageList.bulletUp = await this.loadImage("/images/bulletUp.png");
        //1스테이지 적
        this.imageList.stage1Enemy1 = await this.loadImage("/images/enemy2.png");
        this.imageList.stage1Enemy2 = await this.loadImage("/images/enemy3.png");
        this.imageList.stage1Boss = await this.loadImage("/images/enemy7.png");
        this.imageList.seedEnemy = await this.loadImage("/images/enemy10.png");

        this.imageList.stage2Enemy1 = await this.loadImage("/images/enemy9.png");
        this.imageList.stage2Enemy2 = await this.loadImage("/images/enemy12.png");
        this.imageList.stage2Boss = await this.loadImage("/images/boss4.png");
        


        
        // this.canvas.style.display ="blcok";
        // this.scoreview.innerHTML = "SCORE : " + this.score;
        
        this.stage = new Stage(this.gameWidth, this.gameHeight, this.imageList, this.playerX);
        //백그라운드 생성
        for(let i = 0; i < 3; i++){
            this.backList.push( new Background(0, - i * this.gameHeight, this.gameWidth, this.gameHeight, this.imageList.back1));
        }
        this.stageData = this.stage.stage1;
        

        //플레이어 생성(x좌표 y좌표 너비 높이 이미지)
        this.player = new Player(
            this.gameWidth / 2 - 30, this.gameHeight - 60,
            60, 40, this.imageList.player, this);

        
        requestAnimationFrame(this.frame.bind(this));
    }

    nextStage() {
        if(this.playStage == 1) {
            for(let i = 0; i < 3; i++){
                this.backList.push( new Background(0, - i * this.gameHeight, this.gameWidth, this.gameHeight, this.imageList.back1));
            }
            this.stageData = this.stage.stage1;
        } else if(this.playStage == 2) {
            for(let i = 0; i < 3; i++){
                this.backList.push( new Background(0, - i * this.gameHeight, this.gameWidth, this.gameHeight, this.imageList.back2));
            }
            this.stageData = this.stage.stage2;
        } else if(this.playStage == 3) {
            for(let i = 0; i < 3; i++){
                this.backList.push( new Background(0, - i * this.gameHeight, this.gameWidth, this.gameHeight, this.imageList.back3));
            }
            this.stageData = this.stage.stage3;
        } else if (this.playStage > 3) {
            this.playStage = 1;
            this.bossCnt = 1;
            this.nextStage();
            this.stageNow ++;
        }
         
    }
    getOrCreateExplosion(x, y, w, h){
        let exp = this.expList.find(x => !x.active);
        if(exp === undefined){
            exp = new Explosion(this.imageList.explosion);
            this.expList.push(exp);
        }
        exp.setActive(x, y, w, h);
    }


    getOrCreateItemBullet(x, y) {
        let item ;
        if(item == undefined) {
            item = new Item(this.imageList.bulletUp);
            this.itemList.push(item);
        }
        item.setActive(x, y, 20, 35, new Vector(0,1));
    }

    getOrCreateItemBoom(x, y) {
        let item;
        if(item == undefined) {
            item = new Item(this.imageList.boom);
            this.itemList.push(item);
        }
        item.setActive(x, y, 20, 35, new Vector(0,1));
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
        let e = this.enemyList.find(x => !x.active  && x.constructor.name != "Boss");
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
        e.reset(data.x, data.y, data.w, data.h, data.img, data.s, data.v, data.i, data.p); 
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
            this.player = null;
            this.bullet = null;
            this.boss = null;
            this.stage= null;
            this.enemyList = null;
            this.playerBulletList = null;
            this.endview.style.display ="block";
            this.canvas.style.display ="none";
            this.scoreview.innerHTML = "SCORE : " + this.score;   
            return;
        } 
        if(this.cheat =="yydh" || this.cheat == "YYDH") {
            this.player.hp = 500;
        }
        this.playerX = this.player.x;
        this.playery = this.player.y;

        this.gameTimer += delta; //이렇게 되면 게임 진행시간이 this.gameTimer에 들어간다.
        
        this.backList.forEach(back => back.update(delta));
        if(this.backList[0].y > this.gameHeight){
            let first = this.backList.shift();
            first.y = this.backList[this.backList.length - 1].y - this.gameHeight;
            this.backList.push(first);
        }
        this.player.update(delta);
        this.player.checkOut(this.gameWidth, this.gameHeight);

        this.nowEnemy = this.stageData[this.stageIdx];
        
        if(this.nowEnemy !== undefined && this.nowEnemy.time <= this.gameTimer){
            this.getOrCreateEnemy(this.nowEnemy.data);
            this.stageIdx++;
        }
        this.stage

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
        
            this.enemyList.filter(x => x.active).forEach( enemy => {
                //디버그시 ctx를 넘겨줌
                if(this.player.checkCrash(enemy.x, enemy.y, enemy.w, enemy.h)) {
                    setTimeout(() => {
                        this.player.setDamage(1);
                        this.life -= 1;
                        this.hp --;
                    }, 1000);
                    if(this.player.power <= 0) {
                        this.player.active  = false;
                    }
                    return;
                }
            });    
        
        this.itemList.filter(x => x.active).forEach( item => {
            if(this.player.checkItem(item.x, item.y, item.w, item.h)) {
                if(this.itemCnt == 1) {
                    this.player.power += 1;
                    this.itemCnt ++;
                    return;
                } 
                
                item.active = false;
            }
        });
        
        this.itemList.forEach(e => e.update(delta));
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
        this.ctx.font = "24px sans-serif";
        this.ctx.fillText("Score : " + Math.floor(this.score), 10, 30);
        this.ctx.fillText(this.stageNow + " - " + this.playStage, 230, 30);
        this.ctx.fillText( Math.floor(this.gameTimer), 470, 30);
        // this.enemyList.filter(x => x.active).forEach(enemy => {
        //     this.player.checkCrash(enemy.x, enemy.y, enemy.w, enemy.h, this.ctx);
        // }); 
    }

}

