<div id="game">
    <div id="container" class="mt-3">
        <canvas id="myGame" width="500" height="800" class="view"></canvas>    
        <!-- <div id="lobby" class="center position-absolute"> -->
    </div>    
    <div class="main">
        <div class="start">
            <h1>Shooting Game</h1>
            <button class="startbtn">플레이</button>
            <input type="text" id="cheat">
        </div>
        <div class="end">
            <div class="gameover"></div>
            <h1 class="score"></h1>
            <div class="end-btn">
                <button class="restart">재시도</button>
            </div>
            
        </div>
        
    </div>
    
</div>


    <script>
        let startbtn = document.querySelector(".startbtn");
        let start = document.querySelector(".start");
        let endbtn = document.querySelector(".restart");
        let end = document.querySelector(".end");
        startbtn.addEventListener("click",  (e)=> {
            this.canvas = document.querySelector("#myGame");
            this.canvas.style.display = "block";
            start.style.display ="none";
            window.app = new App();
        });


        
        endbtn.addEventListener("click",  (e)=> {
            this.canvas.style.display = "block";
            end.style.display ="none";
            window.app = new App();
        });
    </script>