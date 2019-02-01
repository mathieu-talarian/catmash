#! /bin/sh

cd client && yarn build && mv build ../server
cd ../server
go build main.go
./catmash
