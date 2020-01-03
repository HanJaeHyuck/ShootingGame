<?php

date_default_timezone_set('Asia/Seoul'); 

session_start(); //번호표 발급

define('__DS', DIRECTORY_SEPARATOR);
define('__ROOT', dirname(__DIR__)); //htdocs
define('__SRC', __ROOT . __DS . 'src'); //htdocs\src
define('__VIEWS', __ROOT . __DS . 'views'); //htdocs\views

require __ROOT . __DS . 'autoload.php'; //autoload 등록
require __ROOT . __DS . 'web.php'; //웹 주소 정리

Gondr\App\Route::init(); //사용자 요청에 맞는 메서드 실행해주기
