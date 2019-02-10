#!/usr/bin/env bash

set -e
set -o pipefail

echo 'Copying .env.sample to .env'
cp -i .env.sample .env

echo 'Running npm install'
npm install

echo 'Starting service on development environment'
npm run dev
