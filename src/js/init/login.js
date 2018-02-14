/**
 * @file login.js
 * @brief login page initialization
 */
let mf = require('mofron');
let Login = require('mofron-comp-login');
/* app ctrl */
let theme = require('../conf/theme.js');

/**
 * page init function
 * 
 * @param rt : root component
 */
let start = (rt) => {
    try {
        rt.addChild(
            new Login({
                title : 'Ultoy',
                color : new mf.Color(200,200,230)
            })
        );
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
