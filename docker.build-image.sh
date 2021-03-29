#!/usr/bin/env sh

## Generate docker image
docker build . -t rodneybarreto/minipets_shipping-api:1.0.0

## Push to docker hub
docker push rodneybarreto/minipets_shipping-api:1.0.0

## Run container
#docker run --name shipping-api --network=host -p 8082:8082 rodneybarreto/minipets_shipping-api:1.0.0