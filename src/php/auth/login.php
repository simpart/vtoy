<?php
/**
 * @file   login.php
 * @brief  util function for login authentication
 * @author simpart
 */
namespace auth\login;
define('DATHLGN_CHKKEY', 'loggedin');

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
    
function login ($usr, $pwd) {
    try {
        // login process
        
        // successful loggedin
        // $ses   = new \ttr\session\Controller(DCOM_APP_TITLE);
        // $ses->set(DATHLGN_CHKKEY, true);
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
    
function logout () {
    try {
        $ses = new \ttr\session\Controller(DCOM_APP_TITLE);
        $ses->destroy();
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
