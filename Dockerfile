FROM denoland/deno:1.41.1@sha256:9ac54784a22077941a564010e736196757e38013ba7931f74aaf7df9c7c52650

USER deno

WORKDIR /app

ADD . .

RUN deno cache src/main.ts

ENTRYPOINT ["/bin/deno"]
