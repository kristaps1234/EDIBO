
#!/bin/bash
#1. try/catch/finally ...
#https://gist.github.com/YakDriver/d5285a1d6f0f7b595240f508665e856d

#2. if ...
cd ~
#npm -v
export NVM_DIR="$HOME/.nvm" && (
 git clone https://github.com/nvm-sh/nvm.git "$NVM_DIR"
 cd "$NVM_DIR"
 git checkout `git describe --abbrev=0 --tags --match "v[0-9]*" $(git rev-list --tags --max-count=1)`
) && \. "$NVM_DIR/nvm.sh"

# Install actual node version:
nvm i 12

echo "export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm" >> .bash_profile
. ~/.bash_profile

npm i -g @angular/cli
mv EDIBO/AngularTest/HelloWorld EDIBO/AngularTest/HelloWorldLegacy
cd EDIBO/AngularTest
ng new HelloWorld
cd HelloWorld
ng add @angular/material
cp -r ../HelloWorldLegacy/* ./
code .
