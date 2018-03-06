<?php
/**
 * @file auth/func.php
 * @brief util function for authentication
 */
namespace auth;
require_once(__DIR__ . '/define.php');
require_once(__DIR__ . '/../ttr/class.php');

/**
 * login authentication proceess
 * 
 */
function authLogin ($usr, $pwd) {
    try {
        /* check parameter */
        if ( ('string' !== gettype($usr)) ||
             (0 === strlen($usr)) ) {
            return false;
        }
        
        /* check login auth */
        $mng = new \usr\ctl\Mongo();
        $fnd_usr = $mng->find($usr);
        if (null === $fnd_usr) {
            /* invalid username */
            return false;
        }
        
        $chk_usr = new \usr\User($usr);
        $chk_usr->password($pwd);
        $cmp = strcmp(
                   $fnd_usr[0]->password(),
                   $chk_usr->password()
               );
        if (0 !== $cmp)  {
            /* invalid password */
            return false;
        }
        
        /* successful loggedin */
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

function isLoggedin () {
    try {
        $ses = new \ttr\session\Controller(
               DCOM_APP_TITLE,
               DATH_SES_TO
        );
        $login = $ses->get(DATH_LGN_KEY);
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
