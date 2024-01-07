
FROM openjdk:17-jdk-slim

VOLUME /tmp
EXPOSE 8080

WORKDIR /app


COPY target/gestion_freelances-0.0.1-SNAPSHOT.jar /app/gestion_freelances.jar




CMD ["sh", "-c", "sleep 30 && java -jar gestion_freelances.jar"]
