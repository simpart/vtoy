/**
 * @file login.js
 * @brief login page initialization
 */
let mf = require('mofron');
let Login  = require('mofron-comp-login');
let Shadow = require('mofron-effect-shadow');
let Fade   = require('mofron-effect-fade');

/* app ctrl */
let theme = require('../conf/theme.js');

/**
 * page init function
 * 
 * @param rc : root component
 */
let start = (rc) => {
    try {
        let login = new Login({
            title    : 'vToy',
            color    : new mf.Color(200,200,230),
            authConf : new mf.Param(
                           './mng/login',
                           (ret, form) => {
                               try {
                                   if ((false === ret.result) || (false === ret.message)) {
                                       form.message('Invalid Username or Password.');
                                   } else if ((true === ret.result) || (true === ret.message)) {
                                       window.location.href = './';
                                   }
                               } catch (e) {
                                   console.error(e.stack);
                               }
                           }
                       )
        });
        login.header().addEffect(
            new Shadow(20)
        );
        login.frame().width(500);
        login.frame().effect([
            new Shadow(20),
            //new Fade()
        ]);
        rc.addChild(login);
    } catch (e) {
        console.error(e.stack);
        throw e;
    }
}

try {
    require('expose-loader?app!../conf/namesp.js');
    theme.theme(app.root.theme());
    start(app.root);
    
    app.root.visible(true);
} catch (e) {
    console.error(e.stack);
}
/* end of file */
