#!/usr/bin/env sh
set -ev

LERNA=$TRAVIS_BUILD_DIR/node_modules/.bin/lerna

npm run test:ci
