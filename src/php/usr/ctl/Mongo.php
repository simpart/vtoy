<?php
/**
 * @file func/mongo.php
 * @brief user controller for mongo-db
 * @author simpart
 */
namespace usr\ctl;
require_once(__DIR__ . '/../../com/define.php');
require_once(__DIR__ . '/../../ttr/db/mongo/require.php');

define('DUSR_MNGCOL', 'user');

class Mongo implements Ctrl {
    private $ctrl = null;
    
    function __construct() {
        try {
            $this->ctrl = new \ttr\db\mongo\Ctrl(
                                  DCOM_DB_HOST,
                                  DCOM_APP_TITLE
                              );
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
    
    public function add ($usr) {
        try {
            /* check data */
            $set = $usr->isSetted(
                        DUSR_ELM_ID | DUSR_ELM_NAME | DUSR_ELM_PWD  | DUSR_ELM_ROL
                   );
            if (true !== $set) {
                throw new \Exception('parameter is not enough');
            }
            $chk_usr = $this->find($usr->name());
            if (null !== $chk_usr) {
                throw new \Exception('the username is already exists');
            }
            
            $this->ctrl->add(
                DUSR_MNGCOL,
                [ 
                  'id'       => $usr->id()      ,
                  'name'     => $usr->name()    ,
                  'password' => $usr->password(),
                  'role'     => $usr->role()
                ]
            );
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
    
    public function delete ($usr) {
        try {
            /* check parameter */
            $set = $usr->isSetted(DUSR_ELM_NAME);
            if (true !== $set) {
                throw new \Exception('parameter is not enough');
            }
            
            /* check target exists */
            $fusr = $this->find($usr->name());
            if (0 === count($fusr)) {
                throw new \Exception('this user is already deleted');
            }
            
            /* delete */
            $this->ctrl->delete(
                DUSR_MNGCOL,
                [ 'id' => $fusr[0]->id() ]
            ); 
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

    public function update ($usr) {
        try {
            /* check parameter */
            $set = $usr->isSetted(DUSR_ELM_ID);
            if (true !== $set) {
                throw new \Exception('parameter is not enough');
            }
            $this->ctrl->update(
                DUSR_MNGCOL,
                [ 'id' => $usr->id() ],
                [
                  'id'       => $usr->id()      ,
                  'name'     => $usr->name()    ,
                  'password' => $usr->password(),
                  'role'     => $usr->role()
                ]
            );
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

    public function find ($name) {
        try {
            $rows = $this->ctrl->find(
                DUSR_MNGCOL,
                ['name' => $name]
            );
            $ret = null;
            foreach ($rows as $doc) {
                $usr = new \usr\User($doc->name);
                $usr->id($doc->id);
                $usr->password($doc->password, false);
                $usr->role($doc->role);
                $ret[] = $usr;
            }
            return $ret;
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
