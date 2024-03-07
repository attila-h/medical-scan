# medical-scan

*Create a small web application that displays a list of products fetched from a local JSON file and allows users to perform basic CRUD (Create, Read, Update, Delete) operations on these products. The application should be built using .NET Core for the backend and Angular for the frontend.*

## Backend

### Technologies Used
- ASP.NET Core 7.0.403
- Entity Framework Core
- In-memory database provider for Entity Framework Core
- Automapper

### How to Run
1. Clone the repository:

   ```bash
   git clone https://github.com/attila-h/medical-scan.git
   ```
   
2. Navigate to the backend project directory.

3. Restore dependencies:

   ```bash
   dotnet restore
   ```

4. Run the backend server:

   ```bash
   dotnet run
   ```

The backend server will be running at `http://localhost:5167`. Swagger running at `http://localhost:5167/swagger/index.html`

## Frontend

### Technologies Used

- Angular 17.2.2
- Angular CLI
- Angular Material
- NgRx Store

### How to Run

1. Navigate to the frontend directory.

2. Install dependencies:

```bash
npm install
```

3. Start the Angular development server:

```bash
ng serve
```

The Angular app will be running at `http://localhost:4200`.

