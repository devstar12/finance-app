# React Finance App

This is a React application for managing finances. It provides a user-friendly interface to track expenses, income, and budgets.

## Project Structure

- **src/**: Contains the source code for the application.
  - **App.tsx**: The main application component.
  - **main.tsx**: The entry point of the React application.
  - **index.css**: Global styles for the application.
  
- **public/**: Contains static files.
  - **index.html**: The main HTML file that serves the React application.
  - **favicon.ico**: The favicon for the application.

- **Dockerfile**: Instructions to build the Docker image for the React application.

- **.dockerignore**: Specifies files and directories to ignore when building the Docker image.

- **package.json**: Configuration file for npm, listing dependencies and scripts.

- **tsconfig.json**: Configuration file for TypeScript, specifying compiler options.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd finance-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the application:
   ```
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Docker Setup

To build and run the application using Docker, follow these steps:

1. Build the Docker image:
   ```
   docker build -t finance-app .
   ```

2. Run the Docker container:
   ```
   docker run -p 3000:3000 finance-app
   ```

The application will be accessible at `http://localhost:3000` in your browser.

## License

This project is licensed under the MIT License.