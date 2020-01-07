class Player {
    constructor(x, y, w, h, img,app){
    	this.app = app;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.img = img;
        this.hp = 3;
        this.keyArr = [];
        this.speed = 300;
        this.fireTerm = 0.1;
        this.currentFireTerm = 0;
        this.init();
        this.active = true;
        this.bulletsound = new Audio();
        this.bulletsound.src = "/audio/bullet.mp3";
        // this.bulletsound.volume = 0.3;   
    }

    setDamage(value){
        this.hp -= value;
        if(this.hp <= 0){
            this.explosion();
        }
    }

    init(){
        document.addEventListener("keydown", e => {
            if(e.code === "ArrowLeft")  this.keyArr[0] = true;
            if(e.code === "ArrowRight") this.keyArr[1] = true;
            if(e.code === "ArrowUp")    this.keyArr[2] = true;
            if(e.code === "ArrowDown")  this.keyArr[3] = true;
            if(e.code === "Space") 		this.keyArr[4] = true;
        });

        document.addEventListener("keyup", e => {
            if(e.code === "ArrowLeft")  this.keyArr[0] = false;
            if(e.code === "ArrowRight") this.keyArr[1] = false;
            if(e.code === "ArrowUp")    this.keyArr[2] = false;
            if(e.code === "ArrowDown")  this.keyArr[3] = false;
            if(e.code === "Space") 		this.keyArr[4] = false;
        })
        
    }

    fire(){
        if(!this.active) return;
        if(this.currentFireTerm > 0) return;

        this.app.getOrCreateBullet(this.x+this.w/2, this.y , 3 , 300, new Vector(0,-1), false);
        this.app.getOrCreateBullet(this.x+this.w/2, this.y , 3 , 300, new Vector(1,-1), false);
        this.app.getOrCreateBullet(this.x+this.w/2, this.y , 3 , 300, new Vector(-1,-1), false);
        this.currentFireTerm = this.fireTerm;
        this.bulletsound.play();
        
    }
    

    checkCollision(x,y,r){
        let centerX = this.x + this.w / 2;
        let centerY = this.y + this.h / 2;
        let d = Math.pow(centerX - x, 2) + Math.pow(centerY - y,2);
        return d < Math.pow(r + Math.min(this.w, this.h) / 2, 2);
    }

    checkCrash(x, y, w, h, ctx = null) {
        let rtnVal = false;
        let distanceX = (this.x +  this.w/2) - (x + w / 2);
        let distanceY = (this.y +  this.h/2) - (y + h / 2);
        let distance = distanceX * distanceX + distanceY * distanceY;
        let enemyR;
        if( w > h) {
            enemyR = h / 2;
        } else {
            enemyR = w / 2;
        }
        if(distance <= (enemyR + (this.w/2 )) * (enemyR + (this.h/2)))
            rtnVal = true;
        
        if(ctx != null){
            console.log("asd");
            ctx.save();
            ctx.strokeStyle = "#ff0000";
            ctx.strokeRect(x, y, w, h);


            ctx.restore();
        }

        return rtnVal;
    }

    checkItem(x, y, w, h) {

    }

    explosion(){
        //폭발이펙트 생성
        App.app.getOrCreateExplosion(this.x, this.y, this.w, this.w);
        this.active = false;
    }

    checkOut(w, h){
        if(this.x < 0 )             this.x = 0;
        if(this.x + this.w >= w)    this.x = w - this.w;
        if(this.y < 0)              this.y = 0;
        if(this.y + this.h >= h)    this.y = h - this.h;
    }

    update(d){
        if(!this.active) return;
        if(this.currentFireTerm > 0) this.currentFireTerm -= d;

        let dx = 0, dy = 0;
        if(this.keyArr[0])  dx = -1;
        if(this.keyArr[1])  dx = 1;
        if(this.keyArr[2])  dy = -1;
        if(this.keyArr[3])  dy = 1;
        if(this.keyArr[4])  this.fire();

        this.x += dx * d * this.speed;
        this.y += dy * d * this.speed;
    }

    render(ctx){
        if(!this.active) return;
        ctx.drawImage(this.img, this.x, this.y, this.w-10, this.h);
    }

    
}