#!/usr/bin/env bash


yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin git@github.com:CaoBaoWang/keep-account-website.git &&
git remote add origin-gitee git@gitee.com:wangshaoli/keep-account-webstite.git &&

git push origin master -f &&
git push origin-gitee master -f &&
cd -
