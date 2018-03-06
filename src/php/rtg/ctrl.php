<?php
/**
 * @file   ctrl.php
 * @brief  url routing contoroller
 * @author simpart
 */
namespace rtg;
require_once(__DIR__ . '/../ttr/require.php');
require_once(__DIR__ . '/../com/define.php');
require_once(__DIR__ . '/../auth/func.php');

define('DRTG_CNF_PATH', __DIR__ . '/../../../conf/urlmap/');

try {
    /* check url, check contents path */
    $rtg = new UrlRouting(
               $_SERVER['REQUEST_URI'],
               DCOM_APP_TITLE,
               DRTG_CNF_PATH
           );

    $path = $rtg->getContsPath();
    $rst_flg = false;
    /* check request type */
    if (true === $rtg->isRest()) {
        /* check token */
        $rst_flg = true;
    } else {
        /* check login */
        if (true === $rtg->loginRequired()) {
            if (true !== \auth\isLoggedin()) {
                header('location: /'. DCOM_APP_TITLE .'/login');
                exit();
            }
        }
    }
    /* set contents type, etc.. */
    \ttr\header\setContsType($path);
    /* return contents or execute api */
    $ret = require($path);

    /* return api value */
    if (true === $rst_flg) {
        \ttr\rest\resp($ret);
    }
} catch (\rtg\err\RtgExcp $rtg_exp) {
    $rtg_exp->responce();
} catch (\Exception $e) {
    http_response_code(500);
    // get debug log
    \ttr\rest\errResp($e->getMessage());
}
/* end of file */
