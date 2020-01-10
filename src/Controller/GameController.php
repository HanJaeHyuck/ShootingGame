<?php

namespace Gondr\Controller;

use Gondr\App\Library;

class GameController extends MasterController
{

    public function play()
    {

        if(!isset($_SESSION['user'])) {
            Library::msgAndGo("로그인이 필요한 서비스 입니다." ,"/user/register");
            return;
        }
        $this->render("game/play");
    }

    public function rank() {
        
        if(!isset($_SESSION['user'])) {
            Library::msgAndGo("로그인이 필요한 서비스 입니다." ,"/user/register");
            return;
        }
        
        $this->render("game/rank");
    }

    public function rankProcess() {
        
    }
}