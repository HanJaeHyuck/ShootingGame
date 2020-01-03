<?php

function myLoader($name) {
    $prefix = "Gondr\\";
    $base_dir = __SRC . __DS;
    $prefixLen = strlen($prefix);

    if(strncmp($prefix, $name, $prefixLen) == 0) {
        $realName = substr($name, $prefixLen);

        $realName = str_replace("\\", __DS, $realName);
        $file = "{$base_dir}{$realName}.php";
        if(file_exists($file)) {
            require_once($file);
        }
    }
}

spl_autoload_register("myLoader"); //없는 함수를 실행 시켯을때 myLoader함수로 시작하는함수 시작