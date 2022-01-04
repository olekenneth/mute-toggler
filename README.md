A local webserver to keep status of microphone mute state

# REST API

The REST API to this app is described below.

## Get state

### Request

`GET /state`

    curl -i -H 'Accept: application/json' http://localhost:29290/state

### Response

    HTTP/1.1 200 OK
    content-type: application/json
    Access-Control-Allow-Origin: *
    cache-control: max-age=30s
    surrogate-control: max-age=0
    Date: Tue, 04 Jan 2022 22:21:38 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    Transfer-Encoding: chunked

    {"muted":false}

## Set muted state

### Request

`GET /mute`

    curl -i -H 'Accept: application/json' http://localhost:29290/mute

### Response

    HTTP/1.1 200 OK
    content-type: application/json
    Access-Control-Allow-Origin: *
    cache-control: max-age=30s
    surrogate-control: max-age=0
    Date: Tue, 04 Jan 2022 22:21:38 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    Transfer-Encoding: chunked

    {"muted":true}

## Set unmuted state

### Request

`GET /unmute`

    curl -i -H 'Accept: application/json' http://localhost:29290/unmute

### Response

    HTTP/1.1 200 OK
    content-type: application/json
    Access-Control-Allow-Origin: *
    cache-control: max-age=30s
    surrogate-control: max-age=0
    Date: Tue, 04 Jan 2022 22:21:38 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    Transfer-Encoding: chunked

    {"muted":false}

## Get state as SSE (Server Sent Events)

### Request

`GET /sse`

    curl -i -H 'Accept: application/json' http://localhost:29290/mute

### Response

    HTTP/1.1 200 OK
    Cache-Control: no-cache
    Content-Type: text/event-stream
    Access-Control-Allow-Origin: *
    Access-Control-Allow-Headers: Cache-Control, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With
    Date: Tue, 04 Jan 2022 22:24:43 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    Transfer-Encoding: chunked

    event: state
    data: {"muted":true}

    ...

    event: state
    data: {"muted":true}
>
