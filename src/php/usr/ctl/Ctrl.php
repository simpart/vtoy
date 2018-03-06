<?php
/**
 * @file Ctrl.php
 * @brief user function base controller
 * @author simpart
 */
namespace usr\ctl;

interface Ctrl {
    #private $ctrl;
    public function add ($usr);
    public function delete ($usr);
}
/* end of file */

