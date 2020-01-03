
    <canvas id="myGame" width="400" height="600"></canvas>
    <button class="startbtn">GAMESTART</button>
    <div id="gameover"></div>
    <div id="stageClear"></div>
    
    <script>
        this.canvas = document.querySelector("#myGame");
        let btn = document.querySelector(".startbtn");

        btn.addEventListener("click",  (e)=> {
            window.app = new App();
            btn.style.display ="none";
        });
    </script>