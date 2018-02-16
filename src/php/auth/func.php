<?php
/**
 * @file auth/func.php
 * @brief util function for authentication
 */
namespace auth;
require_once(__DIR__ . '/define.php');


function authLogin ($usr, $pwd) {
    try {
        // authentication login proceess
        return false;
    } catch (\Exception $e) {
        throw new \Exception(
                   PHP_EOL .
                   'File:' . __FILE__     . ',' .
                   'Line:' . __line__     . ',' .
                   'Func:' . __FUNCTION__ . ',' .
                   $e->getMessage()
              );
    }
}

function isLoggedin () {
    try {
        $ses   = new \ttr\session\Controller(DCOM_APP_TITLE);
        $login = $ses->get(DATHLGN_CHKKEY);
        if (true !== $login) {
            return false;
        }
        return true;
    } catch (\Exception $e) {
        throw new \Exception(
                   PHP_EOL .
                   'File:' . __FILE__     . ',' .
                   'Line:' . __line__     . ',' .
                   'Func:' . __FUNCTION__ . ',' .
                   $e->getMessage()
              );
    }
}



/* end of file */
