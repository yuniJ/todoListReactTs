#!/usr/bin/env sh

# 오류 발생 시 중단
set -e

# build
npm run build

# 빌드 출력 디렉토리로 이동
cd dist

# 사용자 정의 도메인에 배포하는 경우
# echo 'www.example.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# https://<USERNAME>.github.io에 배포하는 경우
# git push -f git@github.com:<yuniJ>/<yuniJ>.github.io.git 메인

# https://<USERNAME>.github.io/<REPO>에 배포하는 경우
git push -f git@github.com:<yuniJ>/<todoListReactTs>.git 메인:gh-pages

cd -