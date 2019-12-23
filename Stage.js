class Stage {
    constructor(gw, gh, imgs){

        this.stage1 = [
            {time:2, data:{x:gw / 3 - 30, y: -40, w:60, h:40, img:imgs.enemy, s:100, v:new Vector(0, 1)}},
            {time:2, data:{x:gw / 3 * 2 - 30, y: -40, w:60, h:40, img:imgs.enemy, s:100, v:new Vector(0, 1)}},
            {time:6, data:{x:-50, y:0, w:60, h:40, img:imgs.enemy, s:100, v:new Vector(1, 1)}},
            {time:6, data:{x:gw, y:0, w:60, h:40, img:imgs.enemy, s:100, v:new Vector(-1, 1)}},
        ];
    }
}