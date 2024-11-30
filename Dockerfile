FROM amazoncorretto:17-alpine
WORKDIR /app
COPY . /app
EXPOSE 8080
CMD ["java", "-jar", "coin-ticker.jar"]