# MoviesList attachment

This is a full stack React/Redux-Node/Express Movies list attachment
# The application can:
- get a list of movies from the database,
- add a new movie,
- filter the list by title, actors, sort alphabetically,
- upload a file with a list of movies to the server and database;
- receive from the server a list of movies,


## Quick Start
```
# Install dependencies server/client
npm install
cd client
npm install
cd ..
npm run dev

# Server on localhost:3000
# Client on localhost:3003

```
## BackEnd documentation

```
@metod GET   http://localhost:3003/api/all
get all list of movies

You get res.json 
if success
{
success": true,
"data": [{"stars": [string],
"_id": string",
"title": number,
 "releaseYear": number,
"format": string,
},"message": "ok"
}

if error 
{
"success": false,
"message": "error on server"
 })



@metod DELETE http://localhost:3003/api/delete/:id
delete movie by id

You get res.json 

if error 
{
success: false,
message: "file is not delete"
};
      
if success
res.json({
success: true,
message: "file delete",
deleteMovie: {}
});






@metod PUT  http://localhost:3003/api/create
create a new movie

req.body: {
  title: String,
  releaseYear: Number,
  format: String,
  stars: String
  }
  
You get res.json 
  if success
  {
 success: true,
 message: "Movie create"
 createdFilm: {}
  }
  
 if error 
{
"success": false,
"message": "Movie not create
 }









@metod POST http://localhost:3003/api/upload    
download file in BD
form-data: file.txt


if error 
res.json({
success: false,
message: "file is not ulpoad"
});
      
if success
res.json({
success: true,
message: "file upload",
createdMovies: 
});


```
