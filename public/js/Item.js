class Item {
    constructor() {
        this.x = null;
        this.y = null;
        this.w = null;
        this.h = null;
        this.vector = null;
        this.speed = null;
        this.active = false;
    }

    reset (x, y, w, h, img, s, v){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.img = img;
        this.speed = s;
        this.vector = v;
        this.active = true;
     
    }
}