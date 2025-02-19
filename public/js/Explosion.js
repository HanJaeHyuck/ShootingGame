class Explosion {
    constructor(img){
        this.x = null;
        this.y = null;
        this.w = null;
        this.h = null;
        this.img = img;
        this.now = 0;
        this.duration = 1.2;
        this.idx = 0;
        this.active = false;
    }

    setActive(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.active = true;
        this.now = 0;
    }

    update(d){
        if(!this.active) return;
        this.now += d;
        this.idx = Math.floor(17 * this.now / this.duration);
        if(this.now > this.duration) {
            this.active = false;
        }
    }

    render(ctx){
        if(!this.active) return;
        let sx = this.idx % 5 * 192;
        let sy = Math.floor(this.idx / 5) * 192;

        ctx.drawImage(
            this.img, sx, sy, 192, 192, 
            this.x, this.y, this.w, this.h);
    }
}