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
get   http://localhost:3003/api/all       
get all list of movies
Responses  "application/json"

delete http://localhost:3003/api/delete/:id
delete movie by id
Responses  "application/json"

http://localhost:3003/api/create  
post    http://localhost:3003/api/upload    

```
