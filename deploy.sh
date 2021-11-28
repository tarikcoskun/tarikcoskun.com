#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m '🚀 Deploy'

git push -f git@github.com:tarikcoskun/tarikcoskun.github.io.git main

cd -