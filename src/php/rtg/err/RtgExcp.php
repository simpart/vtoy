<?php
/**
 * @file  Nmatched.php
 * @brief no matched routing exception
 * @author simpart
 */
namespace rtg\err;
require_once(__DIR__ . '/../../ttr/file/require.php');
require_once(__DIR__ . '/../../ttr/header/require.php');

class RtgExcp extends \Exception {
    private $req_uri   = null;
    private $resp_code = 500;
    private $cnt_path  = null;
    
    function __construct($req) {
        try {
            parent::__construct();
            $this->req_uri = $req;
        } catch (\Exception $e) {
            throw new \Exception(
                PHP_EOL   .
                'File:'   . __FILE__         . ',' .
                'Line:'   . __line__         . ',' .
                'Class:'  . get_class($this) . ',' .
                'Method:' . __FUNCTION__     . ',' .
                $e->getMessage()
            );
        }
    }
    
    public function setRespCode ($code) {
        try {
            if (0 !== strcmp(gettype($code), 'integer')) {
                throw new \Exception('invalid responce code');
            }
            $this->resp_code = $code;
        } catch (\Exception $e) {
            throw new \Exception(
                PHP_EOL   .
                'File:'   . __FILE__         . ',' .
                'Line:'   . __line__         . ',' .
                'Class:'  . get_class($this) . ',' .
                'Method:' . __FUNCTION__     . ',' .
                $e->getMessage()
            );
        }
    }
    
    //public function getRespCode () {
    //    try {
    //        return $this->resp_code;
    //    } catch (\Exception $e) {
    //        throw new \Exception(
    //            PHP_EOL   .
    //            'File:'   . __FILE__         . ',' .
    //            'Line:'   . __line__         . ',' .
    //            'Class:'  . get_class($this) . ',' .
    //            'Method:' . __FUNCTION__     . ',' .
    //            $e->getMessage()
    //        );
    //    }
    //}
    
    public function responce () {
        try {
            http_response_code($this->resp_code);
            $cnt_pth = __DIR__ . '/../../../../html/err/' . $this->resp_code . '.html';
            if (true === \ttr\file\isExists($cnt_pth)) {
                \ttr\header\setContsType($cnt_pth);
                require($cnt_pth);
            }
        } catch (\Exception $e) {
            throw new \Exception(
                PHP_EOL   .
                'File:'   . __FILE__         . ',' .
                'Line:'   . __line__         . ',' .
                'Class:'  . get_class($this) . ',' .
                'Method:' . __FUNCTION__     . ',' .
                $e->getMessage()
            );
        }
    }
}
/* end of file */
