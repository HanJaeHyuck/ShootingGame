<?php

namespace Gondr\App;

class Route
{
    public static $actions = [];

    public static function __callStatic($method, $args)
    {
        $req = strtolower($_SERVER['REQUEST_METHOD']); //현재 사용자가 요청하는 방법이랑 지금 내가 사용하는 방법이랑 비교해서 같으면 실행한다.

        if($req == $method) {
            self::$actions[] = $args;
        }
    }
// ::static ->인스턴스 방식
    public static function init()
    {
        $path = explode("?", $_SERVER['REQUEST_URI']); //자바에서 split같은 의미
        $path = $path[0];

        foreach(self::$actions as $req) {
            // ['/', 'MainController@index']
            if($req[0] === $path) {
                $action = explode("@", $req[1]);
                // $action[0] => MainController
                // $action[1] => index

                $controller = 'Gondr\\Controller\\' .$action[0];
                //Gondr\\Controller\MainController
                $controllerInstance = new $controller();
                $controllerInstance->{$action[1]}(); //{}를 해주면 코드로 변환됨.
                return;
            }
        }
        echo "잘못된 접근입니다.";
    }   
}