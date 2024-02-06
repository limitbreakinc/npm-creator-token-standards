#!/usr/bin/env bash

mkdir ./creator-token-standards/scripts
cp ./build.package.json ./creator-token-standards/package.json
cp ./package-lock.json ./creator-token-standards/package-lock.json
cp ./build.hardhat.config.js ./creator-token-standards/hardhat.config.js
cp ./scripts/prepack.js ./creator-token-standards/scripts/prepack.js

cd ./creator-token-standards

npm ci
npm run clean