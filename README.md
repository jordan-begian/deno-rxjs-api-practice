# RxJS Deno API

This project is a Deno-based API that leverages RxJS for reactive programming. The API is structured with controllers, services, and routes to handle various operations.

## Getting Started

### Prerequisites

- [Deno](https://deno.land/) must be installed on your machine.

### Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install dependencies:
    ```sh
    deno cache deno.json
    ```

### Running the Application

To start the application in development mode, run:

```sh
deno task dev
```

This will run the `app.ts` file with all necessary permissions and watch for file changes.

## Project Configuration

### `deno.json`

The [`deno.json`](deno.json) file contains the configuration for the project, including tasks and module imports.

### `deno.lock`

The `deno.lock` file ensures that the exact versions of dependencies are used.

## Project Structure

- **`app.ts`**: Entry point of the application.
- **`src/controllers/Controller.ts`**: Contains the controller logic.
- **`src/database/Queries.ts`**: Handles database queries.
- **`src/models/DTO.ts`**: Data Transfer Objects.
- **`src/routes/Router.ts`**: Defines the application routes.
- **`src/services/Service.ts`**: Contains the business logic.
- **`src/utils/`**: Utility functions.
