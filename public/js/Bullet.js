class Bullet {
    constructor(){
        this.x = null;
        this.y = null;
        this.r = null;
        this.speed = null;
        this.vector = null;
        this.active = false;
        this.damage = 1;
        this.isEnemy = true;
    }

    setActive(x,y,r,s,v, isEnemy = true){
    	this.x = x;
    	this.y = y;
    	this.r = r;
    	this.speed = s;
    	this.vector = v;
        this.active = true;
        this.isEnemy = isEnemy;
    }

    update(d){
        if(!this.active) return;
        let normal = this.vector.normalize();
        this.x += normal.x * d * this.speed;
        this.y += normal.y * d * this.speed;

        // 화면밖 검사
        if(this.x < -this.r || this.x > App.app.gameWidth+this.r || this. y < -this.r || this.y > App.app.gameHeight + this.r){
        	this.active = false;
        }
    }

    render(ctx, outsidecolor, insidecolor){
    	if(!this.active) return;
        ctx.beginPath();
        ctx.fillStyle = outsidecolor;
        ctx.arc(this.x, this.y, this.r + 3, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = insidecolor;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.closePath();  
        ctx.fill();
    }
}