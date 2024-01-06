# Use a base image with Java 17 and a minimal Linux distribution
FROM openjdk:17-jdk-slim



# Set the working directory in the container
WORKDIR /app

# Copy the packaged JAR file into the container at the defined working directory
COPY target/gestion_freelances-0.0.1-SNAPSHOT.jar /app/gestion_freelances.jar

# Expose the port that your Spring Boot application will run on
EXPOSE 8080

# Specify the command to run your Spring Boot application
CMD ["java", "-jar", "gestion_freelances.jar"]
