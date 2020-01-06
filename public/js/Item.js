class Item {
    constructor(img) {
        this.x = null;
        this.y = null;
        this.w = null;
        this.h = null;
        this.img = img;
        this.vector = null;
        this.speed = null;
        this.active = false;
    }

    setActive(x, y, w, h, v){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.active = true;
        this.vector = v;
    }


    update(d) {
        if(!this.active) return;
        
        let mormal = this.vecotr.mormalize();
        this.x += mormal.x * this.speed;
        this.y += normal.y * this.speed;

        if(this.x < -this.w * 2 || this.y < - this.h * 2 || this.x > this.w + App.app.gameWidth || this.y > this.h + App.app.gameHeight) {
            this.active = false;
        }


    }

    render(ctx){
        if(!this.active) return;
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }


}