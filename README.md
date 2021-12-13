# express-movie-database

<h1>About Express Movie Database</h1>

The goal of the project was to create 3 tables

   a) Movie - list of movies
   b) Crew - list of crew members participating in making the movie
   c) Cast - actors, actress playing the movie

Using relational database, link 3 tables (primary and foreign keys)

Following APIs are available once the seed file is ran:

base url : http://localhost:3000/


http protocols using get, put, delete and post
----------------------------------------------

HTTP GET

<ul>
    <li>get('/movies')</li>
    <li>get('/casts')</li>
    <li>get('/crews')</li>
    <li>get('/movie/:id')</li>
    <li>get('/crew/:id')</li>
    <li>get('/cast/:id')</li>
    <li>get('/movie-name/:name')</li>
</ul>

HTTP POST
<ul>
    <li> post('/movie') --> supply a JSON body</li>
    <li>post('/cast') --> supply a JSON body</li>
    <li>post('/crew') --> supply a JSON body<li>

</ul>

HTTP PUT
<ul>
    <li>put('/movie/:id') --> supply a JSON body</li>
    <li>put('/crew/:id') --> supply a JSON body</li>
    <li>put('/movie/:id') --> supply a JSON body<li>

</ul>

HTTP DELETE


<ul>
    <li>delete('/movie/:id')</li>
    <li>delete('/crew/:id')</li>
    <li>delete('/cast/:id')<li>

</ul>


<h1>Technologies Used</h1>
<h5>Tools</h5>
<ul>
    <li>Visual Studio Code</li>
    <li>Postman</li>
   
   
</ul>
<h5>Tech Stack</h5>
<ul>
    <li>Node JS</li>
    <li>NPM node manager</li>
    <li>Sqlite3 - underlying relational DB</li>
    <li>ORM - Sequelize</li>
    <li>Express - render dynamic data</li>
    <li>TDD using JEST</li>
</ul>

<h1>Project Planning</h1>
The ERD Diagram is as follows:
<h3>
    <img src="https://github.com/ivycodr/express-movie-database/blob/main/resources/erd-movie-crew-cast.png">
</h3>

The Jira Kanban template was used to show the number of steps to achieve the goals:

<h3>
    <img src="https://github.com/ivycodr/express-movie-database/blob/main/resources/kanban.png">
</h3>

<h1>Testing</h1>
<h3>
    <img src="https://github.com/ivycodr/express-movie-database/blob/main/resources/test_report_12122021.png">
</h3>


<h1>Getting Started</h1>
Fork and clone this repository then run npm install to add the relevant dependencies. Run npm run test to seed the database and confirm tests pass. Finally, run server.js to run the express server and interact with the Routes using Postman.

<h1>Contribution Guidelines</h1>
To make suggestions, create a new issue on this repo.







<h5>Tools</h5>


<h5>How to Run</h5>
