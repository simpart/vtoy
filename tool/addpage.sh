#!/bin/bash
SCP_DIR=$(cd $(dirname $0);pwd);
cd $SCP_DIR/../
PAGE_NAME=''
OVERRIDE=''

# check env
if [ ! -d ./html ]; then
    error "could not found html directory"
fi

error () {
    echo "ERROR : $1"
    echo "ttr-web addpage is failed"
    exit -1
}

echo "### ttr-web add page ###"

# get page name
echo -n "page name : "
read PAGE_NAME
if [[ "" == ${PAGE_NAME} ]]; then
    error "page name is null"
fi

if [ -f "./html/${PAGE_NAME}.html" ]; then
    echo "${PAGE_NAME} is already exists."
    echo -n "override ${PAGE_NAME} page? "
    read OVERRIDE
    if [ "Y" == $OVERRIDE ] || [ "y" == $OVERRIDE ] || [ "yes" == $OVERRIDE ] || [ "YES" == $OVERRIDE ]; then
        OVERRIDE="Y"
    else
        error "user stop"
    fi
fi


# add html
ADDHTML="./html/${PAGE_NAME}.html"
sudo cp ./tool/tmpl/index.html $ADDHTML
if [ $? != 0 ]; then
    error "copy template was failed"
fi
grep -l '{@pagename}' $ADDHTML | xargs sed -i.bak -e "s/{@pagename}/$PAGE_NAME/g"
if [ $? != 0 ]; then
    error "replace string was failed"
fi
sudo rm ${ADDHTML}.bak

# add javascript
ADDJS="./src/js/init/${PAGE_NAME}.js"
sudo cp ./tool/tmpl/index.js $ADDJS
if [ $? != 0 ]; then
    error "copy template was failed"
fi
grep -l '{@pagename}' $ADDJS | xargs sed -i.bak -e "s/{@pagename}/$PAGE_NAME/g"
if [ $? != 0 ]; then
    error "replace string was failed"
fi
sudo rm ${ADDJS}.bak

# add webpack config
ADDWEBPK="./conf/webpack/webpack.config.${PAGE_NAME}.js"
sudo cp ./tool/tmpl/webpack.config.js $ADDWEBPK
if [ $? != 0 ]; then
    error "copy template was failed"
fi

grep -l '{@pagename}' $ADDWEBPK | xargs sed -i.bak -e "s/{@pagename}/$PAGE_NAME/g"
if [ $? != 0 ]; then
    error "replace string was failed"
fi
sudo rm ${ADDWEBPK}.bak

# add build script

WEBPACK1="EXEC=\"\$WEBPACK --config conf/webpack/webpack.config.${PAGE_NAME}.js --mode \$MODE\""
WEBPACK2='echo $EXEC'
WEBPACK3='echo $($EXEC);'

echo $WEBPACK1 >> ./tool/build.sh
echo $WEBPACK2 >> ./tool/build.sh
echo $WEBPACK3 >> ./tool/build.sh

# add urlmap
PAGEMAP="./conf/urlmap/pagemap.yaml"
if [ ! -f $PAGEMAP ]; then
    sudo touch $PAGEMAP
fi
echo "-" >> $PAGEMAP
if [ $? != 0 ]; then
    error "add urlmap was failed"
fi
echo "  url   : /${PAGE_NAME}" >> $PAGEMAP
echo "  conts : ./html/${PAGE_NAME}.html" >> $PAGEMAP


echo '### addpage is successful ###'
