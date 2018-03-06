<?php
namespace usr;
require_once(__DIR__ . '/../ttr/class.php');
require_once(__DIR__ . '/func.php');
require_once(__DIR__ . '/define.php');

try {
    /* add user */
    //$usr = new User('admin');
    //$usr->password('ultoy');
    //$usr->role(DUSR_ROLE_ADMIN);
    //\usr\add($usr);
    
    /* find user */
    var_dump(\usr\find('admin'));
    
    /* delete user */
    //$usr = new User('admin');
    //\usr\delete($usr);
    
} catch (\Exception $e) {
    echo $e->getMessage() . PHP_EOL;
}
