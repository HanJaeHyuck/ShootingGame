<div class="container">
    <div class="row text-center">
        <canvas id="myGame" width="500" height="700">
        </canvas>
        <button class="startbtn">GAMESTART</button>
        <div id="gameover"></div>
        <div id="stageClear"></div>
    </div>
</div>
    <script>
        this.canvas = document.querySelector("#myGame");
        let btn = document.querySelector(".startbtn");
        btn.addEventListener("click",  (e)=> {
            window.app = new App();
            btn.style.display ="none";
        });
    </script>