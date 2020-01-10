<?php

use Gondr\App\Route;

Route::get('/', 'MainController@index');
Route::get('/game/play', 'GameController@play');
Route::get('/game/rank', 'GameController@rank');

if(isset($_SESSION['user'])) { //로그인시 사용가능함
    Route::get('/user/logout', 'UserController@logout'); //로그 아웃
    Route::get('/game/rank', 'GameController@rankProcess');

} else { //비로그인시 사용가능함
    Route::get('/user/register', 'UserController@register'); // 회원가입 화면 넘어가기
    Route::post('/user/register', 'UserController@registerProcess'); //회원가입 후
    Route::get('/user/login', 'UserController@login'); // 로그인 화면 
    Route::post('/user/login', 'UserController@loginProcess'); // 로그인 코드
}


