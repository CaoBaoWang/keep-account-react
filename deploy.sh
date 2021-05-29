#!/usr/bin/env bash


yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin git@github.com:CaoBaoWang/keep-account-website.git &&
git push origin master -f
cd -
