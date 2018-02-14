<?php
/**
 * @file auth/func.php
 * @brief authentication function
 * @author simpart
 */
namespace auth;
require_once(__DIR__ . '/../com/define.php');
require_once(__DIR__ . '/../ttr/class/require.php');

echo "test";

function chkLoggedin () {
    try {
        // check loggedin
        $ses = new \ttr\session\Controller(DCOM_APP_TITLE);
        $chk = $ses->get('loggedin');
        return false;
    } catch (\Exception $e) {
        throw new \Exception(
            PHP_EOL   .
            'File:'   . __FILE__   . ',' .
            'Line:'   . __line__   . ',' .
            'Func:' . __FUNCTION__ . ',' .
            $e->getMessage()
        );
    }
}
/* end of file */
