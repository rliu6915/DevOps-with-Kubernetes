# Use the official Maven image to build the project
FROM maven:3.6.3-openjdk-11-slim AS build
WORKDIR /app
COPY pom.xml .
COPY src src
RUN mvn clean package -DskipTests

# Use OpenJDK for running the application
FROM openjdk:11-jre-slim
COPY --from=build /app/target/*.jar app.jar
EXPOSE $PORT
ENTRYPOINT ["java", "-jar", "/app.jar"]
