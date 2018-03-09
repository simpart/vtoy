<?php
/**
 * @file   UrlMap.php
 * @brief  config manager for url mapping
 * @author simpart
 */
namespace rtg;

/**
 * @class UrlMap
 */
class UrlMap {
    private $conf    = null;
    private $map_idx = 0;
    
    /**
     * check uri format, and get request contents
     * 
     * @param[in] uri : request uri string
     */
    function __construct($c) {
        try {
            $this->conf = yaml_parse_file($c);
            if (false === $this->conf) {
                throw new \Exception('could not parse map config');
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
    
    public function getNext () {
        try {
            if ($this->map_idx > (count($this->conf)-1)) {
                $this->map_idx = 0;
                return null;
            }
            $idx = $this->map_idx;
            $this->map_idx++;
            return $this->conf[$idx];
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
    
    public function getList () {
        try {
            return $this->conf;
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
    
    public function getAttr ($url) {
        try {
            $val = $this->getValue($url);
            if ((null === $val) || (true !== array_key_exists('attr', $val))) {
                return null;
            }
            return $val['attr'];
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
    
    public function isAttr ($url, $chk) {
        try {
            $attr = $this->getAttr($url);
            if (null !== $attr) {
                foreach ($attr as $elm) {
                    if (0 === strcmp($elm, $chk)) {
                        return true;
                    }
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
    
    public function getConts ($url) {
        try {
            $val = $this->getValue($url);
            if (null === $val) {
                return null;
            }
            return $val['conts'];
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
    
    public function existsAttr ($attr) {
        try {
            foreach ($this->conf as $cnf_elm) {
                if ( (false === array_key_exists('attr', $cnf_elm)) ||
                     (null === $cnf_elm['attr']) ) {
                    continue;
                }
                foreach ($cnf_elm['attr'] as $atr_elm) {
                    if (0 === strcmp($atr_elm, $attr)) {
                        return true;
                    }
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
    
    private function getValue ($p_url) {
        try {
            $c_url = null;
            $mch   = true;
            
            foreach ($this->conf as $celm) {
                $c_url = new \ttr\routing\URL($celm['url']);
                /* check root(/) request */
                if (0 === count($p_url->getUrl())) {
                    if (0 === count($c_url->getUrl())) {
                        return $celm;
                    } else {
                        continue;
                    }
                } else if (0 === count($c_url->getUrl())) {
                    continue;
                }
                /* check matched url */
                $mch     = true;
                $cnf_url = $c_url->getUrl();
                
                foreach ($cnf_url as $cidx => $cval) {
                    /* check regex */
                    if (0 === strcmp('*', $cval)) {
                        if ($cidx >= count($p_url->getUrl())) {
                            $mch = false;
                            break;
                        }
                        /* skip check */
                        continue;
                    } else if ($cidx >= count($p_url->getUrl())) {
                        $mch = false;
                        break;
                    } else if (0 === strcmp($p_url->getUrl($cidx+1), $cval)) {
                        continue;
                    } else {
                        $mch = false;
                        break;
                    }
                }
                /* check matched */
                if (true === $mch) {
                    // matched url
                    return $celm;
                }
            }
            /* no matched any url config */
            return null;
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
