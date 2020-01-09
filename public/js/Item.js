class Item {
    constructor(img) {
        this.x = null;
        this.y = null;
        this.w = 10;
        this.h = 20;
        this.img = img;
        this.vector = null;
        this.speed = 200;
        this.active = false;
    }

    setActive(x, y, w, h, v){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.active = true;
        this.vector = v;
        // console.log(this.vector);
    }

    update(d) {
        if(!this.active) return;
        let normal = this.vector.normalize();
        this.x += normal.x * d * this.speed;
        this.y += normal.y * d * this.speed;

        if(this.x < -this.w * 2 || this.y < - this.h * 2 || this.x > this.w + App.app.gameWidth || this.y > this.h + App.app.gameHeight) {
            this.active = false;
        }


    }

    render(ctx){
        if(!this.active) return;
        ctx.drawImage(this.img, this.x + this.w, this.y, this.w, this.h);
        // ctx.restore();
        
    }


}