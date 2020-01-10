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

    reset (x, y, w, h, img, s, v, i, p, hp =10){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.img = img;
        this.speed = s;
        this.vector = v;
        this.active = true;
        this.item = i;
        this.p = p;
        this.hp = hp;
        this.fire();
    }

    setDamage(value){
        this.hp -= value;
        if(this.hp <= 0){
            this.explosion();
            if(App.app.cnt == 1) {
                App.app.getOrCreateItemBullet(this.x, this.y);
                App.app.cnt ++;    
                return;
            } else if(App.app.cnt == 2){
                App.app.getOrCreateItemBoom(this.x, this.y);
                App.app.cnt ++;
                return;
                
            }
            
        }
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
        if(this.p == 0) {
            App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 300, new Vector(0, 1));
        } else if(this.p ==1 ) {
            App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 300, new Vector(0, 1));
            App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 300, new Vector(-1, 1));
            App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 300, new Vector(1, 1));
        }  else if(this.p ==3) {
            App.app.getOrCreateBullet(this.x + this.w / 2 + 10, this.y + this.h - 5 , 3, 300, new Vector(0, 1));
            App.app.getOrCreateBullet(this.x + this.w / 2 - 10, this.y + this.h - 5 , 3, 300, new Vector(0, 1));
            App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 300, new Vector(0, 1));
        } else if(this.p ==4) {
            App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 300, new Vector(0, 1));
            App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 300, new Vector(-1, 1));
            App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 300, new Vector(1, 1));
        } else if(this.p ==5) {
            App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 300, new Vector(-1, 1));
            App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 300, new Vector(1, 1));
        } else {

        }
        
        setTimeout(this.fire.bind(this), this.fireTerm); //2초 간격으로 쏘기 하기 위함
    }
 
    update(d){
        if(!this.active) return;
        let normal = this.vector.normalize();
        this.x += normal.x * d * this.speed;
        this.y += normal.y * d * this.speed;


        if(this.p == 4 && this.y >=300) {
            this.vector.x *= -1;
            this.vector.normal = null;
        } 

        if(this.p ==5 && this.y >= 400) {
            this.y = 400;
        }
        // if(this.p ==3 ) 
                
        // }
        // if(this.x < 0 || this.x + this.w >= 500) {
        //     this.vector.x *= -1;
        //     this.vector.normal = null;
        // }

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