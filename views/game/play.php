<div class="container">
    <div class="cavas-box">            
        <canvas id="myGame" width="500" height="800" class="view"></canvas>
    </div>
    <div id="gameover"></div>
    <div id="stageClear"></div>
    <button class="startbtn">GAMESTART</button>
</div>
    <script>
        this.canvas = document.querySelector("#myGame");
        let btn = document.querySelector(".startbtn");
        btn.addEventListener("click",  (e)=> {
            window.app = new App();
            btn.style.display ="none";
        });
    </script>