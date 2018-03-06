<?php
/**
 * @file User.php
 * @brief user common class
 */
namespace usr;
require_once(__DIR__ . '/define.php');

class User {
    private $id     = null;
    private $name   = null;
    private $passwd = null;
    private $role   = null;
    
    function __construct ($nm=null) {
        try {
            $this->name($nm);
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
   
    public function id ($prm=null) {
        try {
            if (null === $prm) {
                /* getter */
                if (null === $this->id) {
                     $this->id(uuid_create(UUID_TYPE_RANDOM));
                }
                return $this->id;
            }
            /* setter */
            if ('string' !== gettype($prm)) {
                throw new \Exception('invalid data type');
            }
            $this->id = $prm;
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
    
    public function name ($prm=null) {
        try {
            if (null === $prm) {
                /* getter */
                return $this->name;
            }
            /* setter */
            if ('string' !== gettype($prm)) {
                throw new \Exception('invalid data type');
            }
            $this->name = $prm;
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
    
    
    public function password ($prm=null, $md5=true) {
        try {
            if (null === $prm) {
                /* getter */
                return $this->passwd;
            }
            /* setter */
            if ('string' !== gettype($prm)) {
                throw new \Exception('invalid data type');
            }
            if (true === $md5) {
                /**
                 * @attention this password hash is so weak
                 *            this is workaround
                 */
                $this->passwd = md5($prm);
            } else {
                $this->passwd = $prm;
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
    
    public function role ($prm=null) {
        try {
            if (null === $prm) {
                /* getter */
                return $this->role;
            }
            /* setter */
            if ( (DUSR_ROLE_ADMIN !== $prm) &&
                 (DUSR_ROLE_USER !== $prm) ) {
                throw new \Exception('invalid parameter');
            }
            $this->role = $prm;
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
    
    public function isSetted ($chk) {
        try {
            if ( (DUSR_ELM_ID & $chk) && (null === $this->id()) ) {
                return false;
            }
            
            if ( (DUSR_ELM_NAME & $chk) && (null === $this->name()) ) {
                return false;
            }
            
            if ( (DUSR_ELM_PWD & $chk) && (null === $this->password()) ) {
                return false;
            }
            
            if ( (DUSR_ELM_ROL & $chk) && (null === $this->role()) ) {
                return false;
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
}
/* end of file */
