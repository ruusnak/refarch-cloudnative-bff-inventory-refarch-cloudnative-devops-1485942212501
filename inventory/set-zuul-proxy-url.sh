#!/bin/bash

MICROSERVICE_NAME=inventory-microservice
CONTEXT_PATH=micro

while [[ $# -gt 1 ]]
do
arg="$1"

case $arg in
    -m|--msname)
    MICROSERVICE_NAME="$2"
    shift;; 
    -c|--context)
    CONTEXT_PATH="$2"
    shift;;
    -z|--zuul)
    ZUUL_FQDN=$(echo ${2}|sed -e "s/http.*\/\///" -e "s/\/$//")
    shift;;
    *)
esac
shift
done

ZUULPROXY="https://${ZUUL_FQDN}/${MICROSERVICE_NAME}/${CONTEXT_PATH}"
echo "Zuul Proxy URL: $ZUULPROXY"
sed -i -e "s|\(var microserviceBaseUrl =\)\(.*http:\/\/\)\(.*\)\(;$\)|\1 \"$ZUULPROXY\"\4|" routes/itemservices.js >/dev/null
cat routes/itemservices.js|grep -m1 microserviceBaseUrl
