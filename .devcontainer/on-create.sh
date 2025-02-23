# !/bin/bash

# chown volume-mounted dirs
VOLUME_MOUNTED_DIRS="/workspace/node_modules /home/node/.npm-global /home/node/.cache"
for dir in $VOLUME_MOUNTED_DIRS; do
  if [ -d $dir ]; then
    sudo chown -R node:node $dir
  fi
done

# install project dependencies
npm install
npx playwright install