#!/bin/bash
SCP_DIR=$(cd $(dirname $0);pwd);
cd $SCP_DIR/../../

error () {
    echo "ERROR : $1"
    echo "init.sh is failed"
    exit -1
}

del_file () {
    sudo rm LICENSE
    if [ $? != 0 ]; then
        error "could not delete LICENSE"
    fi

    sudo rm README.md
    if [ $? != 0 ]; then
        error "could not delete README.md"
    fi
    
    sudo rm -rf ./git
    if [ $? != 0 ]; then
        error "could not delete ./git"
    fi
}

build_env () {
    sudo yum install -y epel-release
    sudo yum install -y nodejs npm
}

del_file
build_env
npm install mofron
if [ $? != 0 ]; then
    error "could not install mofron"
fi
echo `./tool/build.sh`

rm -rf ./src/js/app/.dmy
rm -rf ./src/js/comp/.dmy
rm -rf ./html/.dmy
rm -rf ./img/.dmy
rm -rf ./font/.dmy
rm -rf .git/

echo "initialized mofron env"
