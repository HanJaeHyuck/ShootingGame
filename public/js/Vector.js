class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.normal = null;
    }

    // 벡터의 정규화 값
    normalize() {   //벡터의 길이를 1로하면서 방향을 유지하는 것
        if(this.normal == null) {
            let c = Math.sqrt(this.x * this.x + this.y * this.y);
            this.normal = new Vector(this.x / c, this.y / c);
        }

        return this.normal;
    }
}