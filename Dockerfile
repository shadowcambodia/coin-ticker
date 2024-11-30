# Stage 1: Build the application
FROM gradle:8.4-jdk17 AS build

# Set the working directory for the build process
WORKDIR /app

# Copy only Gradle wrapper and build files first for caching dependencies
COPY gradlew settings.gradle build.gradle ./
COPY gradle ./gradle

# Pre-cache dependencies (speeds up subsequent builds)
RUN ./gradlew build --no-daemon || true

# Copy the rest of the source code
COPY . .

# Build the application (produces a JAR file in /app/build/libs)
RUN ./gradlew clean bootJar --no-daemon

# Stage 2: Run the application
FROM openjdk:17-jdk-slim

# Set the working directory for the runtime
WORKDIR /app

# Copy the built JAR from the first stage
COPY --from=build /app/build/libs/*.jar app.jar

# Expose the Spring Boot default port
EXPOSE 8080

# Command to run the Spring Boot application
ENTRYPOINT ["java", "-jar", "app.jar"]