class Background {
    constructor(x, y, w, h, img){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.img = img;
        this.speed = 300;
    }

    update(delta){
        this.y += this.speed * delta;
    }

    render(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
}