class Boss{
    constructor(){
        this.x = null;
        this.y = null;
        this.w = null;
        this.h = null;
        this.img = null;
        this.vector = null;
        this.speed = null;
        this.active = false;
        this.hp = null;
        this.fireTerm = 1500; //2초 간격으로 사용한다.
        this.show = false; //화면에 등장했는가?
        this.plusHp = 50;
    } 

    reset (x, y, w, h, img, s, v, p, hp = 50){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.img = img;
        this.speed = s;
        this.vector = v;
        this.active = true;
        this.p = p;
        this.hp = hp + this.plusHp;
        this.fire();
    }

    setDamage(value){
        this.hp -= value;
        if(this.hp <= 0){
            this.explosion();
        }
    }

    explosion(){
        //폭발이펙트 생성
        App.app.getOrCreateExplosion(this.x, this.y, this.w, this.w);
        this.active = false;
        setTimeout( e => {
            App.app.playStage ++;
            App.app.time = 0;
            App.app.backList = [];
            App.app.nowEnemy = null;
            App.app.gameTimer = 0;
            App.app.stageIdx = 0;
            App.app.cnt = 1; 
            App.app.itemCnt = 1;
            App.app.bossCnt ++;
            this.plusHp += 50;
            App.app.nextStage();
        }, 5000);
        
        
    }

    fire(){ 
        if(!this.active) return;
        if(App.app.bossCnt == 1) {
            if(this.hp > 50) {
                App.app.getOrCreateBullet(this.x + this.w / 2 + 20, this.y + this.h - 5 , 3, 300, new Vector(0, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2 - 20, this.y + this.h - 5 , 3, 300, new Vector(0, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 300, new Vector(0, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 300, new Vector(1, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 300, new Vector(-1, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 300, new Vector(0.6, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 300, new Vector(0.4, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 300, new Vector(-0.6, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 300, new Vector(-0.4, 1));
            }  else {
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 350, new Vector(0, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 350, new Vector(-1, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 350, new Vector(1, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 350, new Vector(0.8, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 350, new Vector(0.6, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 350, new Vector(0.4, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 350, new Vector(0.2, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 350, new Vector(-0.8, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 350, new Vector(-0.6, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 350, new Vector(-0.4, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 350, new Vector(-0.2, 1));
            }
        } else if(App.app.bossCnt == 2) {
           if(this.hp > 75) {
            App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 300, new Vector(0, 1));
            App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 300, new Vector(-1, 1));
            App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 300, new Vector(1, 1));
            App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 300, new Vector(0.8, 1));
            App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 300, new Vector(0.6, 1));
            App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 300, new Vector(0.4, 1));
            App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 300, new Vector(0.2, 1));
            App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 300, new Vector(-0.8, 1));
            App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 300, new Vector(-0.6, 1));
            App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 300, new Vector(-0.4, 1));
            App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 300, new Vector(-0.2, 1));
           } else {
            App.app.getOrCreateBullet(this.x + this.w / 2 + 20, this.y + this.h - 5 , 3, 350, new Vector(0, 1));
            App.app.getOrCreateBullet(this.x + this.w / 2 - 20, this.y + this.h - 5 , 3, 350, new Vector(0, 1));
            App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 350, new Vector(0, 1));
            App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 350, new Vector(-1, 1));
            App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 350, new Vector(1, 1));
            App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 350, new Vector(0.8, 1));
            App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 350, new Vector(0.6, 1));
            App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 350, new Vector(0.4, 1));
            App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 350, new Vector(0.2, 1));
            App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 350, new Vector(-0.8, 1));
            App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 350, new Vector(-0.6, 1));
            App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 350, new Vector(-0.4, 1));
            App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 350, new Vector(-0.2, 1));
           }        
        } else if(App.app.bossCnt == 3) {
            if(this.hp > 100) {
                App.app.getOrCreateBullet(this.x + this.w / 2 + 20, this.y + this.h - 5 , 3, 350, new Vector(0, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2 - 20, this.y + this.h - 5 , 3, 350, new Vector(0, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 350, new Vector(0, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 350, new Vector(-1, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 350, new Vector(1, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 350, new Vector(0.8, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 350, new Vector(0.6, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 350, new Vector(0.4, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 350, new Vector(0.2, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 350, new Vector(-0.8, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 350, new Vector(-0.6, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 350, new Vector(-0.4, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 350, new Vector(-0.2, 1));
            } else {
                App.app.getOrCreateBullet(this.x + this.w / 2 + 20, this.y + this.h - 5 , 3, 400, new Vector(0, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2 - 20, this.y + this.h - 5 , 3, 400, new Vector(0, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 400, new Vector(0, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 400, new Vector(-1, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 400, new Vector(1, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 400, new Vector(0.8, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 400, new Vector(0.6, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 400, new Vector(0.4, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 400, new Vector(0.2, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 400, new Vector(-0.8, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 400, new Vector(-0.6, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 400, new Vector(-0.4, 1));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5 , 3, 400, new Vector(-0.2, 1));
            }
        }
        
        
        
        setTimeout(this.fire.bind(this), this.fireTerm); //2초 간격으로 쏘기 하기 위함
    }
 
    update(d){
        if(!this.hp){ 
            return; 
        }
        if(this.hp == 50) {
            App.app.getOrCreateExplosion(this.x, this.y, this.w, this.w);
            this.hp = 49;
        }
        if(!this.show && this.y > 100) {
            this.vector.y = 0;
            this.vector.x = 1;
            this.show = true;
            this.vector.normal = null;
        }

        let normal = this.vector.normalize();
        this.x += normal.x * d * this.speed;
        this.y += normal.y * d * this.speed;

        if(this.x < 0 || this.x + this.w >= 500) {
            this.vector.x *= -1;
            this.vector.normal = null;
        }

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
        ctx.fillRect(this.x + this.w, this.y , 5, this.hp); 
        ctx.clearRect(this.x + this.w,this.y, 5, this.hp);
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
}