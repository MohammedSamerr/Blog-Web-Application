# Blog Web Application

This is a FullStack Blog Web Application built with a Java Spring back-end and an Angular 18 front-end. The application allows users to create, like, and comment on blog posts in real-time.

## Features

- **Post Management**: Create, view, and search posts.
- **Commenting System**: Add comments to posts, with timestamps for each comment.
- **Real-time Updates**: Updates are reflected in real-time.
- **Like Functionality**: Users can like posts.

## Tech Stack

### Back-end
- **Java Spring Boot**: Handles REST APIs.
- **Lombok**: Simplifies code with annotations.
- **SQL Driver**: Manages database connectivity.
- **JPA Repository**: Manages database operations.

### Front-end
- **Angular 18**: Provides a user-friendly interface.
  - **Post Components**: Add and search posts.
  - **Comment Component**: Add comments with date stamps.

## Project Structure

### Back-end
- **Controller**: Manages request routing.
- **Service**: Contains core business logic.
- **Service Implementation**: Implements the service interface for each API.

### Front-end
- **Angular Components**: Organized by feature for easy maintenance and scalability.

## Getting Started

### Prerequisites
- **Java JDK 17** (or higher)
- **Node.js 20** (for the Angular front-end)
- **SQL Database** (compatible with your SQL Driver setup)

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/MohammedSamerr/Blog-Web-Application.git
    cd Blog-Web-Application
    ```

2. **Set up the back-end**:
    - Configure the database in `application.properties`.
    - Run the Spring Boot application:
      ```bash
      ./mvnw spring-boot:run
      ```

3. **Set up the front-end**:
    - Navigate to the Angular project directory:
      ```bash
      cd frontend
      ```
    - Install dependencies:
      ```bash
      npm install
      ```
    - Start the Angular application:
      ```bash
      ng serve
      ```

4. **Access the Application**:
   - Open your browser and go to `http://localhost:4200`.

## Usage

- **Add Post**: Create a new post using the form in the "Add Post" section.
- **Search Post**: Use the search function to find specific posts.
- **Add Comment**: Add comments on posts, with real-time timestamp.
- **Like Post**: Like any post to show appreciation.

## Dependencies

- **Back-end**: Spring Boot, Lombok, SQL Driver, JPA Repository.
- **Front-end**: Angular 18, Angular Material (optional if used for UI styling).

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests.


