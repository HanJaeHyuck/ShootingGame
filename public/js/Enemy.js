class Enemy{
    constructor(){
        this.x = null;
        this.y = null;
        this.w = null;
        this.h = null;
        this.img = null;
        this.vector = null;
        this.speed = null;
        this.active = false;
        this.item = false;
        this.hp = null;
        this.fireTerm = 1000; //2초 간격으로 사용한다.
        this.boom = new Audio();
        this.boom.src = "/audio/enemyboom.mp3";
    } 

    reset (x, y, w, h, img, s, v, i, hp =5){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.img = img;
        this.speed = s;
        this.vector = v;
        this.active = true;
        this.item = i;
        this.hp = hp;
        this.fire();
        console.log(this.item);
    }

    setDamage(value){
        this.hp -= value;
        if(this.hp <= 0){
            this.explosion();
            // console.log(this.item);
            if(!this.item) {
                this.itemList();
            }
            
        }
    }

    itemList() {
        //아이템 생성
        App.app.getOrCreateItem(this.x, this.y);
    }

    explosion(){
        //폭발이펙트 생성
        this.active = false;
        App.app.getOrCreateExplosion(this.x, this.y, this.w, this.h);
        this.boom.play();
        App.app.score +=10;
    }

    fire(){ 
        if(!this.active) return;
        App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 300, new Vector(0, 1));
        setTimeout(this.fire.bind(this), this.fireTerm); //2초 간격으로 쏘기 하기 위함
    }
 
    update(d){
        if(!this.active) return;
        let normal = this.vector.normalize();
        this.x += normal.x * d * this.speed;
        this.y += normal.y * d * this.speed;

        if(this.x < -this.w * 2 || this.y < - this.h * 2 || this.x > this.w + App.app.gameWidth || this.y > this.h + App.app.gameHeight) {
            this.active = false;
        }
    }

    checkCollision(x,y,r){
        let centerX = this.x + this.w / 2;
        let centerY = this.y + this.h / 2;
        let d = Math.pow(centerX - x, 2) + Math.pow(centerY - y,2);
        return d < Math.pow(r + Math.min(this.w, this.h) / 2, 2);
    }

    render(ctx){
        if(!this.active) return;
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
}