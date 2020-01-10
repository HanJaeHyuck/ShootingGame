<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Gondr - Todo</title>
    <link rel="stylesheet" href="/vendor/bootstrap-4.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/app.css">
    <script src="/js/Vector.js"></script>
    <script src="/js/Stage.js"></script>
    <script src="/js/Boss.js"></script>
    <script src="/js/Enemy.js"></script>
    <script src="/js/Background.js"></script>
    <script src="/js/Bullet.js"></script>
    <script src="/js/Item.js"></script>
    <script src="/js/Player.js"></script>
    <script src="/js/App.js"></script>
    <script src="/js/Explosion.js"></script>
    
</head>
<body>
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a href="/" class="navbar-brand">ShootingGAME</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="mainNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a href="/game/play" class="nav-link">GAME</a>
                        </li>
                        <li class="nav-item">
                            <a href="/game/rank" class="nav-link">RankingBoard</a>
                        </li>
                        
                    </ul>
                    <div class="ml-auto">
                        <?php if(isset($_SESSION['user'])) : ?>
                            <button class="btn btn-primary"><?= $_SESSION['user']->name ?></button>
                            <a href="/user/logout" class="btn btn-danger">Logout</a>
                        <?php else : ?>
                            <a href="/user/register" class="btn btn-primary">Register</a>
                            <a href="/user/login" class="btn btn-success">Login</a>
                        <?php endif; ?>
                    </div>
                </div>

            </nav>
        </header>
        <?php if (isset($_SESSION['err'])) : ?>
            <div class="alert alert-<?= $_SESSION['err']['css'] ?> out">
                <?= $_SESSION['err']['msg'] ?>
            </div>
            <?php unset($_SESSION['err']); ?>
            <script>
                let fade = document.querySelector(".out");
                setTimeout(()=>{
                    fade.classList.add("fade-out");
                    setTimeout(()=>{
                        fade.remove();
                    }, 500);
                }, 3000);
            </script>
        <?php endif; ?>