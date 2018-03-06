sudo yum update
sudo yum install libmpc-devel mpfr-devel gmp-devel gcc zlib-devel git

# install g++
cd /tmp
wget https://ftp.gnu.org/gnu/gcc/gcc-4.9.4/gcc-4.9.4.tar.gz
tar xvzf gcc-4.9.4.ta.gz
cd gcc-4.9.4
./configure --with-system-zlib --disable-multilib --enable-languages=c,c++
sudo make
sudo make install

# install node
cd /tmp
git clone https://github.com/nodejs/node.git
cd node
sudo ./configure
sudo make
sudo make install

export PATH=$PATH:/usr/local/bin

# install npm
cd /tmp
git clone https://github.com/npm/npm.git
cd npm
sudo make
sudo make install
