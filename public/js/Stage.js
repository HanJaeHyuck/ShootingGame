class Stage {
    constructor(gw, gh, imgs) {
        this.playerX = null;

        this.stage1 = [
            { time: 2, data: { t: 0, x: 0, y: 0, w: 60, h: 40, img: imgs.stage1Enemy1, s: 100, v: new Vector(1, 1), p: 0 } },
            { time: 2, data: { t: 0, x: gw, y: 0, w: 60, h: 40, img: imgs.stage1Enemy1, s: 100, v: new Vector(-1, 1), p: 0 } },
            { time: 8, data: { t: 0, x: gw / 3 * 2 - 40, y: -40, w: 60, h: 40, img: imgs.stage1Enemy1, s: 100, v: new Vector(0, 1), p: 4 } },
            { time: 8, data: { t: 0, x: 0, y: -40, w: 60, h: 40, img: imgs.stage1Enemy1, s: 100, v: new Vector(1, 1), p: 4 }, },
            { time: 8, data: { t: 0, x: gw / 3 - 10, y: -40, w: 60, h: 40, img: imgs.stage1Enemy1, s: 100, v: new Vector(0, 1), p: 0 } },
            { time: 8, data: { t: 0, x: gw / 3 * 2 - 10, y: -40, w: 60, h: 40, img: imgs.stage1Enemy1, s: 100, v: new Vector(0, 1), p: 0 } },
            { time: 10, data: { t: 0, x: 0, y: 150, w: 60, h: 40, img: imgs.stage1Enemy1, s: 70, v: new Vector(1, 0), p: 0 } },
            { time: 10, data: { t: 0, x: gw, y: 150, w: 60, h: 40, img: imgs.stage1Enemy1, s: 70, v: new Vector(-1, 0), p: 0 } }, 

            { time: 13, data: { t: 0, x: 0, y: 0, w: 60, h: 40, img: imgs.stage1Enemy1, s: 100, v: new Vector(1, 1), p: 0 } },
            { time: 13, data: { t: 0, x: gw, y: 0, w: 60, h: 40, img: imgs.stage1Enemy1, s: 100, v: new Vector(-1, 1), p: 0 } },
            { time: 16, data: { t: 0, x: 0, y: 0, w: 60, h: 40, img: imgs.stage1Enemy1, s: 100, v: new Vector(1, 1), p: 0 } },
            { time: 16, data: { t: 0, x: gw, y: 0, w: 60, h: 40, img: imgs.stage1Enemy1, s: 100, v: new Vector(-1, 1), p: 0 } },
            { time: 17, data: { t: 0, x: 0 - 50, y: 0, w: 60, h: 40, img: imgs.stage1Enemy1, s: 100, v: new Vector(1, 1), p: 0 } },
            { time: 17, data: { t: 0, x: gw- 50, y: 0, w: 60, h: 40, img: imgs.stage1Enemy1, s: 100, v: new Vector(-1, 1), p: 0 } },
            { time: 17, data: { t: 0, x: 0, y: 0, w: 60, h: 40, img: imgs.stage1Enemy1, s: 100, v: new Vector(1, 1), p: 0 } },
            { time: 17, data: { t: 0, x: gw, y: 0, w: 60, h: 40, img: imgs.stage1Enemy1, s: 100, v: new Vector(-1, 1), p: 0 } },
            { time: 19, data: { t: 0, x: 0, y: 0, w: 60, h: 40, img: imgs.stage1Enemy1, s: 100, v: new Vector(1, 1), p: 0 } },
            { time: 19, data: { t: 0, x: gw, y: 0, w: 60, h: 40, img: imgs.stage1Enemy1, s: 100, v: new Vector(-1, 1), p: 0 } },

            

            { time: 20, data: { t: 0, x: gw / 2 - 30, y: 0, w: 60, h: 40, img: imgs.stage1Enemy1, s: 100, v: new Vector(0, 1), p: 5 } },
            { time: 20, data: { t: 0, x: gw / 2 - 60, y: 0, w: 60, h: 40, img: imgs.stage1Enemy1, s: 100, v: new Vector(0, 1), p: 5 } },
            { time: 20, data: { t: 0, x: gw / 2, y: 0, w: 60, h: 40, img: imgs.stage1Enemy1, s: 100, v: new Vector(0, 1), p: 5 } },

            { time: 25, data: { t: 0, x: gw - 60, y: -40, w: 60, h: 40, img: imgs.seedEnemy, s: 500, v: new Vector(0, 1), p: -1 } },
            { time: 25, data: { t: 0, x: 0 - 60, y: -40, w: 60, h: 40, img: imgs.seedEnemy, s: 500, v: new Vector(0, 1), p: -1 } },
            { time: 25, data: { t: 0, x: gw / 2 - 30, y: -40, w: 60, h: 40, img: imgs.seedEnemy, s: 500, v: new Vector(0, 1), p: -1 } },

            { time: 28, data: { t: 0, x: gw / 3 * 2 - 40, y: -40, w: 60, h: 40, img: imgs.stage1Enemy1, s: 100, v: new Vector(0, 1), p: 4 } },
            { time: 28, data: { t: 0, x: 0, y: -40, w: 60, h: 40, img: imgs.stage1Enemy1, s: 100, v: new Vector(1, 1), p: 4 }, },
            { time: 28, data: { t: 0, x: gw / 3 - 10, y: -40, w: 60, h: 40, img: imgs.stage1Enemy1, s: 100, v: new Vector(0, 1), p: 0 } },
            { time: 28, data: { t: 0, x: gw / 3 * 2 - 10, y: -40, w: 60, h: 40, img: imgs.stage1Enemy1, s: 100, v: new Vector(0, 1), p: 0 } },
            { time: 30, data: { t: 0, x: 0 - 50, y: 0, w: 60, h: 40, img: imgs.stage1Enemy2, s: 100, v: new Vector(1, 1), p: 0 } },
            { time: 30, data: { t: 0, x: gw- 50, y: 0, w: 60, h: 40, img: imgs.stage1Enemy2, s: 100, v: new Vector(-1, 1), p: 0 } },
            { time: 30, data: { t: 0, x: 0, y: 0, w: 60, h: 40, img: imgs.stage1Enemy2, s: 100, v: new Vector(1, 1), p: 0 } },
            { time: 30, data: { t: 0, x: gw, y: 0, w: 60, h: 40, img: imgs.stage1Enemy2, s: 100, v: new Vector(-1, 1), p: 0 } },
            { time: 35, data: { t: 0, x: gw / 3 * 2 - 40, y: -40, w: 60, h: 40, img: imgs.stage1Enemy2, s: 100, v: new Vector(0, 1), p: 4 } },
            { time: 35, data: { t: 0, x: 0, y: -40, w: 60, h: 40, img: imgs.stage1Enemy2, s: 100, v: new Vector(1, 1), p: 4 }, },
            { time: 39, data: { t: 0, x: gw / 3 * 2 - 10, y: -40, w: 60, h: 40, img: imgs.stage1Enemy2, s: 100, v: new Vector(0, 1), p: 0 } },
            { time: 39, data: { t: 0, x: 0, y: 150, w: 60, h: 40, img: imgs.stage1Enemy2, s: 70, v: new Vector(1, 0), p: 0 } },
            { time: 39, data: { t: 0, x: gw, y: 150, w: 60, h: 40, img: imgs.stage1Enemy2, s: 70, v: new Vector(-1, 0), p: 0 } }, 

            { time: 42, data: { t: 0, x: gw / 2 - 30, y: 0, w: 60, h: 40, img: imgs.stage1Enemy1, s: 100, v: new Vector(0, 1), p: 5 } },
            { time: 42, data: { t: 0, x: gw / 2 - 60, y: 0, w: 60, h: 40, img: imgs.stage1Enemy1, s: 100, v: new Vector(0, 1), p: 5 } },
            { time: 42, data: { t: 0, x: gw / 2, y: 0, w: 60, h: 40, img: imgs.stage1Enemy1, s: 100, v: new Vector(0, 1), p: 5 } },


            { time: 44, data: { t: 0, x: gw, y: -40, w: 60, h: 40, img: imgs.seedEnemy, s: 500, v: new Vector(0, 1), p: -1 } },
            { time: 44, data: { t: 0, x: 0 - 30, y: -40, w: 60, h: 40, img: imgs.seedEnemy, s: 500, v: new Vector(0, 1), p: -1 } },
            { time: 44, data: { t: 0, x: gw / 2 - 30, y: -40, w: 60, h: 40, img: imgs.seedEnemy, s: 500, v: new Vector(0, 1), p: -1 } },

            
            { time: 45, data: { t: 1, x: gw /2 - 100, y: -40, w: 200, h: 180, img: imgs.stage1Boss, s: 100, v: new Vector(0, 1) } },];
            

        this.stage2 = [
            { time: 2, data: { t: 0, x: 0, y: 0, w: 60, h: 40, img: imgs.stage2Enemy1, s: 100, v: new Vector(1, 1), p: 0 } },
            { time: 2, data: { t: 0, x: gw, y: 0, w: 60, h: 40, img: imgs.stage2Enemy1, s: 100, v: new Vector(-1, 1), p: 0 } },
            { time: 8, data: { t: 0, x: gw / 3 * 2 - 40, y: -40, w: 60, h: 40, img: imgs.stage2Enemy1, s: 100, v: new Vector(0, 1), p: 4 } },
            { time: 8, data: { t: 0, x: 0, y: -40, w: 60, h: 40, img: imgs.stage2Enemy1, s: 100, v: new Vector(1, 1), p: 4 }, },
            { time: 8, data: { t: 0, x: gw / 3 - 10, y: -40, w: 60, h: 40, img: imgs.stage2Enemy1, s: 100, v: new Vector(0, 1), p: 0 } },
            { time: 8, data: { t: 0, x: gw / 3 * 2 - 10, y: -40, w: 60, h: 40, img: imgs.stage2Enemy1, s: 100, v: new Vector(0, 1), p: 0 } },
            { time: 10, data: { t: 0, x: 0, y: 150, w: 60, h: 40, img: imgs.stage2Enemy1, s: 70, v: new Vector(1, 0), p: 0 } },
            { time: 10, data: { t: 0, x: gw, y: 150, w: 60, h: 40, img: imgs.stage2Enemy1, s: 70, v: new Vector(-1, 0), p: 0 } }, 

            { time: 13, data: { t: 0, x: 0, y: 0, w: 60, h: 40, img: imgs.stage2Enemy1, s: 100, v: new Vector(1, 1), p: 0 } },
            { time: 13, data: { t: 0, x: gw, y: 0, w: 60, h: 40, img: imgs.stage2Enemy1, s: 100, v: new Vector(-1, 1), p: 0 } },

            { time: 17, data: { t: 0, x: 0 - 50, y: 0, w: 60, h: 40, img: imgs.stage2Enemy2, s: 100, v: new Vector(1, 1), p: 0 } },
            { time: 17, data: { t: 0, x: gw- 50, y: 0, w: 60, h: 40, img: imgs.stage2Enemy2, s: 100, v: new Vector(-1, 1), p: 0 } },
            { time: 17, data: { t: 0, x: 0, y: 0, w: 60, h: 40, img: imgs.stage2Enemy2, s: 100, v: new Vector(1, 1), p: 0 } },
            { time: 17, data: { t: 0, x: gw, y: 0, w: 60, h: 40, img: imgs.stage2Enemy2, s: 100, v: new Vector(-1, 1), p: 0 } },

            { time: 20, data: { t: 0, x: gw / 2 - 30, y: 0, w: 60, h: 40, img: imgs.stage2Enemy1, s: 100, v: new Vector(0, 1), p: 5 } },
            { time: 20, data: { t: 0, x: gw / 2 - 60, y: 0, w: 60, h: 40, img: imgs.stage2Enemy1, s: 100, v: new Vector(0, 1), p: 5 } },
            { time: 20, data: { t: 0, x: gw / 2, y: 0, w: 60, h: 40, img: imgs.stage2Enemy1, s: 100, v: new Vector(0, 1), p: 5 } },

            
            { time: 23, data: { t: 0, x: 0, y: 0, w: 60, h: 40, img: imgs.stage2Enemy1, s: 100, v: new Vector(1, 1), p: 0 } },
            { time: 23, data: { t: 0, x: gw, y: 0, w: 60, h: 40, img: imgs.stage2Enemy1, s: 100, v: new Vector(-1, 1), p: 0 } },

            { time: 25, data: { t: 0, x: gw - 60, y: -40, w: 60, h: 40, img: imgs.seedEnemy, s: 500, v: new Vector(0, 1), p: -1 } },
            { time: 25, data: { t: 0, x: 0 - 60, y: -40, w: 60, h: 40, img: imgs.seedEnemy, s: 500, v: new Vector(0, 1), p: -1 } },
            { time: 25, data: { t: 0, x: gw / 2 - 30, y: -40, w: 60, h: 40, img: imgs.seedEnemy, s: 500, v: new Vector(0, 1), p: -1 } },

            { time: 27, data: { t: 0, x: 0 - 50, y: 0, w: 60, h: 40, img: imgs.stage2Enemy2, s: 100, v: new Vector(1, 1), p: 0 } },
            { time: 27, data: { t: 0, x: gw- 50, y: 0, w: 60, h: 40, img: imgs.stage2Enemy2, s: 100, v: new Vector(-1, 1), p: 0 } },
            { time: 27, data: { t: 0, x: 0, y: 0, w: 60, h: 40, img: imgs.stage2Enemy2, s: 100, v: new Vector(1, 1), p: 0 } },
            { time: 27, data: { t: 0, x: gw, y: 0, w: 60, h: 40, img: imgs.stage2Enemy2, s: 100, v: new Vector(-1, 1), p: 0 } },
            { time: 30, data: { t: 0, x: 0 - 50, y: 0, w: 60, h: 40, img: imgs.stage2Enemy2, s: 100, v: new Vector(1, 1), p: 0 } },
            { time: 30, data: { t: 0, x: gw- 50, y: 0, w: 60, h: 40, img: imgs.stage2Enemy2, s: 100, v: new Vector(-1, 1), p: 0 } },
            { time: 30, data: { t: 0, x: 0, y: 0, w: 60, h: 40, img: imgs.stage2Enemy2, s: 100, v: new Vector(1, 1), p: 0 } },
            { time: 30, data: { t: 0, x: gw, y: 0, w: 60, h: 40, img: imgs.stage2Enemy2, s: 100, v: new Vector(-1, 1), p: 0 } },
            { time: 35, data: { t: 0, x: gw / 3 * 2 - 40, y: -40, w: 60, h: 40, img: imgs.stage2Enemy2, s: 100, v: new Vector(0, 1), p: 4 } },
            { time: 35, data: { t: 0, x: 0, y: -40, w: 60, h: 40, img: imgs.stage2Enemy2, s: 100, v: new Vector(1, 1), p: 4 }, },
            { time: 39, data: { t: 0, x: gw / 3 * 2 - 10, y: -40, w: 60, h: 40, img: imgs.stage2Enemy2, s: 100, v: new Vector(0, 1), p: 0 } },
            { time: 39, data: { t: 0, x: 0, y: 150, w: 60, h: 40, img: imgs.stage2Enemy2, s: 70, v: new Vector(1, 0), p: 0 } },
            { time: 39, data: { t: 0, x: gw, y: 150, w: 60, h: 40, img: imgs.stage2Enemy2, s: 70, v: new Vector(-1, 0), p: 0 } }, 

            { time: 42, data: { t: 0, x: gw / 2 - 30, y: 0, w: 60, h: 40, img: imgs.stage2Enemy1, s: 100, v: new Vector(0, 1), p: 5 } },
            { time: 42, data: { t: 0, x: gw / 2 - 60, y: 0, w: 60, h: 40, img: imgs.stage2Enemy1, s: 100, v: new Vector(0, 1), p: 5 } },
            { time: 42, data: { t: 0, x: gw / 2, y: 0, w: 60, h: 40, img: imgs.stage2Enemy1, s: 100, v: new Vector(0, 1), p: 5 } },


            { time: 44, data: { t: 0, x: gw, y: -40, w: 60, h: 40, img: imgs.seedEnemy, s: 500, v: new Vector(0, 1), p: -1 } },
            { time: 44, data: { t: 0, x: 0 - 30, y: -40, w: 60, h: 40, img: imgs.seedEnemy, s: 500, v: new Vector(0, 1), p: -1 } },
            { time: 44, data: { t: 0, x: gw / 2 - 30, y: -40, w: 60, h: 40, img: imgs.seedEnemy, s: 500, v: new Vector(0, 1), p: -1 } },

            
            { time: 45, data: { t: 1, x: gw /2 - 100, y: -40, w: 200, h: 180, img: imgs.stage2Boss, s: 100, v: new Vector(0, 1) } },
        ];

            

        this.stage3 = [
            { time: 2, data: { t: 0, x: 0, y: 0, w: 60, h: 40, img: imgs.enemy, s: 100, v: new Vector(1, 1), p: 0 } },
            { time: 2, data: { t: 0, x: gw, y: 0, w: 60, h: 40, img: imgs.enemy, s: 100, v: new Vector(-1, 1), p: 0 } },
            { time: 8, data: { t: 0, x: gw / 3 * 2 - 40, y: -40, w: 60, h: 40, img: imgs.enemy, s: 100, v: new Vector(0, 1), p: 4 } },
            { time: 8, data: { t: 0, x: 0, y: -40, w: 60, h: 40, img: imgs.enemy, s: 100, v: new Vector(1, 1), p: 4 }, },
            { time: 8, data: { t: 0, x: gw / 3 - 10, y: -40, w: 60, h: 40, img: imgs.enemy, s: 100, v: new Vector(0, 1), p: 0 } },
            { time: 8, data: { t: 0, x: gw / 3 * 2 - 10, y: -40, w: 60, h: 40, img: imgs.enemy, s: 100, v: new Vector(0, 1), p: 0 } },
            { time: 10, data: { t: 0, x: 0, y: 150, w: 60, h: 40, img: imgs.enemy, s: 70, v: new Vector(1, 0), p: 0 } },
            { time: 10, data: { t: 0, x: gw, y: 150, w: 60, h: 40, img: imgs.enemy, s: 70, v: new Vector(-1, 0), p: 0 } }, 

            { time: 13, data: { t: 0, x: 0, y: 0, w: 60, h: 40, img: imgs.enemy, s: 100, v: new Vector(1, 1), p: 0 } },
            { time: 13, data: { t: 0, x: gw, y: 0, w: 60, h: 40, img: imgs.enemy, s: 100, v: new Vector(-1, 1), p: 0 } },

            { time: 17, data: { t: 0, x: 0 - 50, y: 0, w: 60, h: 40, img: imgs.enemy2, s: 100, v: new Vector(1, 1), p: 0 } },
            { time: 17, data: { t: 0, x: gw- 50, y: 0, w: 60, h: 40, img: imgs.enemy2, s: 100, v: new Vector(-1, 1), p: 0 } },
            { time: 17, data: { t: 0, x: 0, y: 0, w: 60, h: 40, img: imgs.enemy2, s: 100, v: new Vector(1, 1), p: 0 } },
            { time: 17, data: { t: 0, x: gw, y: 0, w: 60, h: 40, img: imgs.enemy2, s: 100, v: new Vector(-1, 1), p: 0 } },

            { time: 8, data: { t: 0, x: gw / 3 * 2 - 40, y: -40, w: 60, h: 40, img: imgs.enemy, s: 100, v: new Vector(0, 1), p: 4 } },
            { time: 8, data: { t: 0, x: 0, y: -40, w: 60, h: 40, img: imgs.enemy, s: 100, v: new Vector(1, 1), p: 4 }, },
            { time: 8, data: { t: 0, x: gw / 3 - 10, y: -40, w: 60, h: 40, img: imgs.enemy, s: 100, v: new Vector(0, 1), p: 0 } },
            { time: 8, data: { t: 0, x: gw / 3 * 2 - 10, y: -40, w: 60, h: 40, img: imgs.enemy, s: 100, v: new Vector(0, 1), p: 0 } },

            { time: 20, data: { t: 0, x: gw / 2 - 30, y: 0, w: 60, h: 40, img: imgs.enemy, s: 100, v: new Vector(0, 1), p: 5 } },
            { time: 20, data: { t: 0, x: gw / 2 - 60, y: 0, w: 60, h: 40, img: imgs.enemy, s: 100, v: new Vector(0, 1), p: 5 } },
            { time: 20, data: { t: 0, x: gw / 2, y: 0, w: 60, h: 40, img: imgs.enemy, s: 100, v: new Vector(0, 1), p: 5 } },

            { time: 25, data: { t: 0, x: gw - 60, y: -40, w: 60, h: 40, img: imgs.seedEnemy, s: 500, v: new Vector(0, 1), p: -1 } },
            { time: 25, data: { t: 0, x: 0 + 60, y: -40, w: 60, h: 40, img: imgs.seedEnemy, s: 500, v: new Vector(0, 1), p: -1 } },
            { time: 25, data: { t: 0, x: gw / 2 - 30, y: -40, w: 60, h: 40, img: imgs.seedEnemy, s: 500, v: new Vector(0, 1), p: -1 } },

            { time: 27, data: { t: 0, x: 0, y: 0, w: 60, h: 40, img: imgs.enemy2, s: 100, v: new Vector(1, 1), p: 0 } },
            { time: 27, data: { t: 0, x: gw, y: 0, w: 60, h: 40, img: imgs.enemy2, s: 100, v: new Vector(-1, 1), p: 0 } },
            { time: 30, data: { t: 0, x: 0 - 50, y: 0, w: 60, h: 40, img: imgs.enemy2, s: 100, v: new Vector(1, 1), p: 0 } },
            { time: 30, data: { t: 0, x: gw- 50, y: 0, w: 60, h: 40, img: imgs.enemy2, s: 100, v: new Vector(-1, 1), p: 0 } },
            { time: 30, data: { t: 0, x: 0, y: 0, w: 60, h: 40, img: imgs.enemy2, s: 100, v: new Vector(1, 1), p: 0 } },
            { time: 30, data: { t: 0, x: gw, y: 0, w: 60, h: 40, img: imgs.enemy2, s: 100, v: new Vector(-1, 1), p: 0 } },
            { time: 35, data: { t: 0, x: gw / 3 * 2 - 40, y: -40, w: 60, h: 40, img: imgs.enemy2, s: 100, v: new Vector(0, 1), p: 4 } },
            { time: 35, data: { t: 0, x: 0, y: -40, w: 60, h: 40, img: imgs.enemy2, s: 100, v: new Vector(1, 1), p: 4 }, },
            { time: 39, data: { t: 0, x: gw / 3 * 2 - 10, y: -40, w: 60, h: 40, img: imgs.enemy2, s: 100, v: new Vector(0, 1), p: 0 } },
            { time: 39, data: { t: 0, x: 0, y: 150, w: 60, h: 40, img: imgs.enemy2, s: 70, v: new Vector(1, 0), p: 0 } },
            { time: 39, data: { t: 0, x: gw, y: 150, w: 60, h: 40, img: imgs.enemy2, s: 70, v: new Vector(-1, 0), p: 0 } }, 

            { time: 42, data: { t: 0, x: gw / 2 - 30, y: 0, w: 60, h: 40, img: imgs.enemy, s: 100, v: new Vector(0, 1), p: 5 } },
            { time: 42, data: { t: 0, x: gw / 2 - 60, y: 0, w: 60, h: 40, img: imgs.enemy, s: 100, v: new Vector(0, 1), p: 5 } },
            { time: 42, data: { t: 0, x: gw / 2, y: 0, w: 60, h: 40, img: imgs.enemy, s: 100, v: new Vector(0, 1), p: 5 } },


            { time: 44, data: { t: 0, x: gw, y: -40, w: 60, h: 40, img: imgs.seedEnemy, s: 500, v: new Vector(0, 1), p: -1 } },
            { time: 44, data: { t: 0, x: 0 - 30, y: -40, w: 60, h: 40, img: imgs.seedEnemy, s: 500, v: new Vector(0, 1), p: -1 } },
            { time: 44, data: { t: 0, x: gw / 2 - 30, y: -40, w: 60, h: 40, img: imgs.seedEnemy, s: 500, v: new Vector(0, 1), p: -1 } },

            
            { time: 45, data: { t: 1, x: gw /2 - 100, y: -40, w: 200, h: 180, img: imgs.boss, s: 100, v: new Vector(0, 1) } },
        ];
    }


    update() {
        App.app.playerX;
    }
}
