#!/bin/bash
SCP_DIR=$(cd $(dirname $0);pwd);
cd $SCP_DIR/../
WEBPACK=node_modules/.bin/webpack
MODE=''

if [[ $1 = "pro" ]]; then
  MODE='production'
else
  MODE='development'
fi

EXEC="$WEBPACK --config conf/webpack/webpack.config.index.js --mode $MODE"
echo $EXEC
echo $($EXEC);
#echo $($WEBPACK --config conf/webpack/webpack.config.index.js --mode $MODE);
