# Angular & .NET Core

### Front

1.Create angular application.
2.Create 3 folders:
components
models
services
3.Create new file in models -> super-hero.ts
Create the model class
4.Create a new service inside services folder -> super-hero:
Define the methods inside service
5.Inject Service inside constructor of app.component.ts
Call the method from service inside ngOnInit by assigning it to a variable declared inside the ts file.
6.Design the html page

### Back

1.Create .net core web api
2.Create the data model class
3.Create an empty api controller inside controllers folder
Define the Get method inside the controller

### Front

1.Add  apiUrl: "https://localhost:7196/api/" inside environment .ts
2.Add  url = "SuperHero"; [url = “controllerName] inside class in service.ts
3.Add ‘HttpClientModule’ to imports array in app.module.ts 
add the import statement - import {HttpClientModule} from '@angular/common/http';
4.Inject HttpClient inside constructor in the service
5.Modify get method in service

```ts
public getSuperHeroes(): Observable<SuperHero[]>
{
   return this.http.get<SuperHero[]>(`${environment.apiUrl}/${this.url}`); 
}

```
 

### Enable CORS

1.Add cors

builder.Services.AddCors( options => options.AddPolicy(name: "SuperHeroOrigins",
policy =>
{
policy.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader();
}));

2.Use Cors

`app.UseCors("SuperHeroOrigins");`

### Add Entity Framework Core

1.Install EF Core packages
2.Add new folder -> Data
3.Add new class  -> DataContext
4.Add dbcontext in the class
5.Add DbContext in program.cs
6.Add Connection string in appsettings
builder.Services.AddDbContext<DataContext>(options =>
{	     options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"));
}); 

### To Create a new Database:
Tools -> NuGet package manager -> package manager console
Use the following commands:
Add-Migration
Update-Database

### Getting data from the database
1.Create a constructor in the controller
Inject data context into the constructor
2.Change the http get method to return an Ok object.

### CRUD

1.Define the post method inside the controller.
Add the newly created object to the db
Return the database objects as a list


2.Define the put method
Find the object with the same id as of the object passed as parameter
Update the object from database

3.Define the delete method
Find the object from db
Delete the object

### Creating Edit Form in the Frontend

1.Import the Forms module and add it to imports in app.module.ts
2.Update html to add forms and the necessary bindings.
3.Use the Input and Output events to have cross component communication.

### Coupling Form with backend

1.Define the crud methods in the service and call them from the form component.
