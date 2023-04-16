nestjs와 docker 연동

로컬에서는 DB만 docker로 띄우기
실제 운영에서는 DB가 서버에 설치되어 있다고 가정하고 api 서버만 도커라이징

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## 로컬에서 docker를 사용하여 postgresql을 실행시키자

```bash
# pull image
$ docker pull postgres

# execute container
$ docker run --name [컨테이너 이름] \
-d -p 5432:5432 \
-e POSTGRES_PASSWORD=[비밀번호] \
[이미지 이름]

# bash 실행
$ docker exec -it [컨테이너 이름] bash

# --- bash -----

# postgres 실행
$ psql -U postgres

# db 생성
$ createdb [db 이름]
```
