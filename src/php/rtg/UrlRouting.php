<?php
/**
 * @file   UrlRouting.php
 * @brief  url routing class
 * @author simpart
 */
namespace rtg;
require_once(__DIR__ . '/../ttr/dir/require.php');
require_once(__DIR__ . '/../ttr/file/require.php');

/**
 * @class UrlRouting
 */
class UrlRouting {
    private $url      = null;
    private $cnt_path = null;
    private $map      = array();
    
    /**
     * check uri format, and get request contents
     * 
     * @param[in] $u : (string) request uri
     * @param[in] $t : (string) app title
     * @param[in] $c : (string) path to map config
     */
    function __construct($u, $t, $c) {
        try {
            $this->url = new \ttr\routing\URL($u);
            if (0 === strcmp($this->url->getUrl(0), $t)) {
                $this->url->setOffset(1);
            }
            
            $cnf = \ttr\dir\getFiles($c);
            foreach ($cnf as $cnf_elm) {
                $exp_cnf = explode('/', $cnf_elm);
                if (0 === strcmp($exp_cnf[count($exp_cnf)-1], 'README')) {
                    continue;
                }
                $this->map[] = new UrlMap($cnf_elm);
            }
            /* check map count */
            if (0 === count($this->map)) {
                throw new \Exception('could not find map config');
            }
        } catch (err\RtgExcp $rtg_exp) {
            throw $rtg_exp;
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
    
    public function isRest () {
        try {
            foreach ($this->map as $elm) {
                if (true === $elm->isAttr($this->url, 'rest')) {
                    return true;
                }
            }
            return false;
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
    
    /**
     * check the request whether it require check loggedin process
     */
    public function loginRequired () {
        try {
            $login_attr_hit = false;
            /* check exists login attribute */
            foreach ($this->map as $map_elm) {
                if (true === $map_elm->existsAttr('login')) {
                    $login_attr_hit = true;
                    break;
                }
            }
            if (false === $login_attr_hit) {
                /* there is no 'login' attribute in the map */
                return false;
            }
            
            /* check attribute whether login value is exists */
            foreach ($this->map as $map_elm) {
                /* check exsist map */
                if (null === $map_elm->getConts($this->url)) {
                    /* not matched */
                    continue;
                }
                /* check attribute value */
                return !($map_elm->isAttr($this->url, 'login'));
            }
            return true;
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
    
    public function getContsPath () {
        try {
            if (null !== $this->cnt_path) {
                /* get from buffering */
                return $this->cnt_path;
            }
            $toroot = __DIR__ . '/../../../';
            /* check map config */
            foreach ($this->map as $map_elm) {
                $chk_path = $map_elm->getConts($this->url);
                if (null !== $chk_path) {
                    $this->cnt_path = $toroot . $chk_path;
                    return $this->cnt_path;
                }
            }

            /* check file path */
            $path = $this->url->getUrlString();
            if (true === \ttr\file\isExists($toroot . $path)) {
                $this->cnt_path = $toroot . $path;
                return $this->cnt_path;
            }
            /* error : not matched contents */
            $err = new err\RtgExcp($path);
            $err->setRespCode(400);
            throw $err;
        } catch (err\RtgExcp $rtg_exp) {
            throw $rtg_exp;
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
