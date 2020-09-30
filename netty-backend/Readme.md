1. docker build . -t java-docker
2. docker run --cpus="2" -e JAVA_OPTS="-Xms4g -Xmx4g" -p 8688:8688 java-docker
