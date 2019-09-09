#!/bin/sh

# fail on error
set -e

# name arguments
BRANCH_NAME=$1

case $BRANCH_NAME in dev*)
  # set version (current + "-m3")
  VERSION="$(node -p "require('./package.json').version")"
  NEW_VERSION="$(node -p "'"$VERSION"-' + '"$BRANCH_NAME"'.split('-')[1]")"
  npm version $NEW_VERSION

  # build
  yarn install
  yarn run build

  # publish
  npm publish
esac


#case $BRANCH_NAME in prod*)
#esac
