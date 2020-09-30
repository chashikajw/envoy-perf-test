##### Running netty backend

Build the docker container

```bash
docker build . -t netty-backend
```

Run the docker container with 2 cores and 4g

```bash
docker run --cpus="2" -e JAVA_OPTS="-Xms4g -Xmx4g" -p 8688:8688 netty-backend

```


