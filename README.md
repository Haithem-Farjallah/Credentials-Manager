# Password Manager (MEAN Stack)

This project is a **Password Manager** where users can securely store their credentials so they don't forget them. The project is built using the **MEAN stack** (MongoDB, Express.js, Angular, and Node.js) and serves as a learning exercise to explore **Angular** concepts in greater depth.

## Angular Concepts Used
- **Resolvers**: For loading data before a route is activated.
- **AuthGuards**: To secure routes and restrict access based on authentication.
- **Interceptors**: To manage HTTP requests, such as attaching authentication tokens.
- **Template-Driven Forms**: For simpler forms with two-way data binding.
- **Reactive Forms**: For more complex forms with dynamic validation and reactive programming.

## Getting Started

### Prerequisites
- **Node.js** installed on your machine.
- **MongoDB** for database storage.
- **Angular CLI** to run the Angular frontend.

### Installation
1. Clone the repository:
   ```bash
   git clone git@github.com:Haithem-Farjallah/Password-manager-extension.git
    ```

2. Install server-side dependencies:
```bash
cd back
npm install
```
3. Install client-side dependencies:
```bash
cd ../front
npm install
```

### Environment Configuration

#### Angular Environment Files
In Angular, environment-specific settings are managed through environment files located in the `src/environments` folder. There are typically two main files:

- `environment.ts`: This is used for development settings.
- `environment.prod.ts`: This is used for production settings.

To create or modify these files, follow these steps:
1. run the following command :
```bash 
ng g environments
```
2. Navigate to `src/environments/`.
3. Open `environment.ts` for development configuration and `environment.prod.ts` for production configuration.
4. Add or update your environment variables as needed.

#### Example `environment.ts` file:
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  key: 'MyReallySecretKey12355',
};
```

#### Backend `.env` File
For the backend, environment variables are managed using a `.env` file. This file is used to configure sensitive settings like database connections and JWT secrets. 

**Make sure to set up the `.env` file in the backend directory to ensure proper configuration of your application.**

To create and use a `.env` file:
1. In the root of your backend project directory, create a file named `.env`:
   ```bash
   touch .env
   ```
2. Navigate to `.env`.
3. Add or update your environment variables as needed.

#### Example `.env` file:
```env
PORT=3000
DB_URL=mongodb+srv://haithem:hello3100@extension.edri9.mongodb.net/?retryWrites=true&w=majority&appName=extension
KEY=MyReallySecretKey12355
JWT_SECRET=SecretKey
```
### Running the Application
Start the backend server:
```bash
   npm start
   ```
Start the Angular frontend:
```bash
   ng serve
   ```
The application will be accessible at http://localhost:4200/

### Demo Login Credentials
To log in and explore the app, use the following demo account:

- Email: haithemfarjallah2002@gmail.com
- Password: root

### License
This project is open for educational purposes.
