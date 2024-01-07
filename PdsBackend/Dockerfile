
FROM openjdk:17-jdk-slim
VOLUME /tmp
EXPOSE 8081

WORKDIR /app

ARG JAR_FILE=target/gestion_freelances-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} gestion_freelances.jar

ENTRYPOINT ["java","-jar","/app/gestion_freelances.jar"]
