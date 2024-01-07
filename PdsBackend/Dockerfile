
FROM openjdk:17-jdk-slim
VOLUME /tmp
EXPOSE 8080

ARG JAR_FILE=target/gestion_freelances-0.0.1-SNAPSHOT.jar
ADD ${JAR_FILE} gestion_freelances.jar

ENTRYPOINT ["java","-jar","/gestion_freelances.jar"]
