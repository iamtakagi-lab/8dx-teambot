# 👨‍👨‍👦‍👦 8dx-teambot: Team grouping on discord.

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/iamtakagi/8dx-teambot)](https://github.com/iamtakagi/8dx-teambot/releases)
[![Check-PR](https://github.com/iamtakagi/8dx-teambot/actions/workflows/check-pr.yml/badge.svg)](https://github.com/iamtakagi/8dx-teambot/actions/workflows/check-pr.yml)
[![Deploy](https://github.com/iamtakagi/8dx-teambot/actions/workflows/deploy.yml/badge.svg)](https://github.com/iamtakagi/8dx-teambot/actions/workflows/deploy.yml)
[![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/iamtakagi/8dx-teambot)](https://hub.docker.com/r/iamtakagi/8dx-teambot)
[![Docker Pulls](https://img.shields.io/docker/pulls/iamtakagi/8dx-teambot)](https://hub.docker.com/r/iamtakagi/8dx-teambot)
[![license](https://img.shields.io/github/license/iamtakagi/8dx-teambot)](https://github.com/iamtakagi/8dx-teambot/blob/master/LICENSE)
[![issues](https://img.shields.io/github/issues/iamtakagi/8dx-teambot)](https://github.com/iamtakagi/8dx-teambot/issues)
[![pull requests](https://img.shields.io/github/issues-pr/iamtakagi/8dx-teambot)](https://github.com/iamtakagi/8dx-teambot/pulls)

## Commands
- _t [teamSize 1-6] [players] : Random Grouping
- _tag [1-10] : Random Tag

## Install
`docker-compose.yml`
```yml
version: '3.8'
services:
  8dx-teambot:
    container_name: 8dx-teambot
    image: iamtakagi/8dx-teambot:latest
    BOT_TOKEN: xxx
```

## Start
```console
docker-compose up -d
```