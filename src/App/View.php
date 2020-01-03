<?php

namespace Gondr\App;

class View
{
    public function __construct($page, $data) //생성자 만들기
    {
        extract($data); // 키 값으로 변수설정

        require_once(__VIEWS . __DS . "layout" . __DS . "header.php");
        require_once(__VIEWS . __DS . "{$page}.php");
        require_once(__VIEWS . __DS . "layout" . __DS . "footer.php");
    }
}
