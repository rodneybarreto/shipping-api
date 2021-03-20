#!/usr/bin/env sh

## Generate docker image
docker build . -t rodneybarreto/minipets_shipping-api:1.0.0

## Run container
# docker run --name shipping-api -p 3001:3001 rodneybarreto/minipets_shipping-api:1.0.0