class Stage {
    constructor(gw, gh, imgs) {

        this.stage1 = [
            {
                time: 2, data: {
                    t: 0,
                    x: gw / 3 - 30,
                    y: -40, w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 100,
                    v: new Vector(0, 1),
                    i: false,
                    p: 50
                },
            },
            {
                time: 2, data: {
                    t: 0,
                    x: gw / 3 * 2 - 30,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 100,
                    v: new Vector(0, 1),
                    i: false,
                    p: 50
                }
            },
            {
                time: 2, data: {
                    t: 0,
                    x: gw / 3 - 10,
                    y: -40,
                    w: 20,
                    h: 20,
                    img: imgs.enemy,
                    s: 100,
                    v: new Vector(0, 1),
                    i: false,
                    p: 50
                }
            },
            {
                time: 2, data: {
                    t: 0,
                    x: gw / 3 * 2 - 10,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 100,
                    v: new Vector(0, 1),
                    i: false,
                    p: 50
                }
            },
            {
                time: 2, data: {
                    t: 0,
                    x: gw / 2 - 30,
                    y: -10,
                    w: 60,
                    h: 40, img: imgs.enemy, s: 100,
                    v: new Vector(0, 1),
                    p: 50

                }
            },
            {

                time: 6, data:
                {
                    t: 0,
                    p: -50,
                    y: 0,
                    w: 60,
                    h: 40, img: imgs.enemy, s: 100,
                    v: new Vector(1, 1),
                    p: 50
                }
            },
            {
                time: 6, data:
                {
                    t: 0,
                    x: gw,
                    y: 0,
                    w: 60,
                    h: 40, img: imgs.enemy, s: 100,
                    v: new Vector(-1, 1),
                    p: 50
                }
            },
            {
                time: 7, data:
                {
                    t: 1,
                    x: gw / 2 - 60,
                    y: -30,
                    w: 120,
                    h: 60, img: imgs.boss, s: 100,
                    v: new Vector(0, 1),
                    p: 50
                }
            },
        ];

        this.stage2 = [
            
            {
                time: 2, data:
                {
                    t: 0,
                    x: gw / 2 - 60,
                    y: -30,
                    w: 120,
                    h: 60, img: imgs.boss, s: 100,
                    v: new Vector(0, 1),
                    p: 50
                }
            },
        ];

    }
}
