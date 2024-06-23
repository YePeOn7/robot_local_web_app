#!/bin/bash

# Check if a version is provided as an argument
if [ -z "$1" ]; then
  echo "Error: No version provided."
  echo "Usage: $0 <version>"
  exit 1
fi

VERSION=$1
echo "Building Docker image with version: $VERSION"

sudo docker build -t yepeon7/web-config-client .
sudo docker tag yepeon7/web-config-client yepeon7/web-config-client:$VERSION
sudo docker push yepeon7/web-config-client:$VERSION
sudo docker push yepeon7/web-config-client
