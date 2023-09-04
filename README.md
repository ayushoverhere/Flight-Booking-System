# Flight Booking System

## Overview

The Flight Booking System is a microservices-based application for managing flight bookings. It includes the following features:

1. **RESTful API**: Each microservice provides REST/JSON endpoints for business operations.

2. **Spring Framework**: The microservices are built using the Spring(Boot) framework for efficiency.

3. **In-Memory Databases**: H2 in-memory databases store data for each microservice, simplifying setup.

4. **Embedded Tomcat Server**: Spring Boot's embedded Tomcat server handles HTTP requests.

5. **Asynchronous Messaging**: RabbitMQ facilitates asynchronous communication between microservices.

## Components

1. **Search Microservice**: Retrieves available flights and communicates with the Fare service.

2. **Fare Microservice**: Manages fare-related operations and serves fare information.

3. **Booking Microservice**: Handles flight bookings and passenger details.

4. **Check-in Microservice**: Manages passenger check-in operations.

## Usage

1. **Search & Book**: Search for flights, book tickets, and receive booking confirmation.

2. **Check-In**: Perform passenger check-in with a confirmation message.

## Testing

A web-based front-end with basic authentication is available for testing.

## Customization

Customize the application by modifying microservice code and adding new features.

## Security

Enhance security beyond basic authentication for production use.

The Flight Booking System is a flexible and efficient solution for flight booking management. Adapt and extend it to your specific needs.
