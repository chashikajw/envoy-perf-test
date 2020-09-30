
##### Running envoy

Build the docker container

```bash
docker build . -t envoy:v1
```

Run the docker container with 2 cores and 512m

```bash
docker run --cpus="2" -m="512m" -d -p 9901:9901 -p 10000:10000 envoy:v1

```


