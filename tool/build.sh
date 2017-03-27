#!/bin/bash
SCP_DIR=$(cd $(dirname $0);pwd);
cd $SCP_DIR/../

echo $(pwd);

WEBPACK=node_modules/.bin/webpack
echo $($WEBPACK --config conf/webpack/webpack.config.login.js);
