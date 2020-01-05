<div class="container">
        <canvas id="myGame" width="500" height="800" class="view"></canvas>
    <!-- <div id="lobby" class="center position-absolute"> -->
        <button class="startbtn">GAMESTART</button>
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