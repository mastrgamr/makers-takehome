# makers-takehome
-------------------------------------------
About the app:
--------------
This app is a simple api that allows users to create and retrieve factories. It uses the [express.js framework](https://expressjs.com/) and implements the [json-fs-store](https://github.com/alexkwolfe/json-fs-store) library to store data. The tests for the app, found in the /spec folder, use the [jasmine testing framework](https://github.com/jasmine/jasmine). 

How to run the app
------------------
Clone this repo 
Run:

    $ npm install
    $ npm start

How to run the tests
--------------------
    $ npm test


Running the front end
---------------------
The repo contains a front end html that is optimized for local use and easy interaction with the API.
It uses AngularJS, Jquery, and MaterialCss, and retrieves endpoints contained in this project hosted on a Heroku server.
  - Open index.html (in Chrome/Firefox browser) *or*
  - The hosted [Heroku Instance](http://hello-workspace-mastrgamr.c9users.io/)


Resources
---------
**/factories**

    GET: Retrieves an array of all of the factory objects
    
    POST: Creates a new factory object
        Expects:
            {
              id: 'Factory id',
              company_type: "FACTORY",
              name: 'Factory name',
              email: 'Factory email',
              phone_number: 'Factory phone number',
              city: 'Factory city',
              state: 'Factory state'
            }

**/factories/{id}**

    GET: Retrieves factory object with the id {id}
    
**/factories/{id}**

    DELETE: Deletes factory object with the id {id}

**/brands**

    GET: Retrieves an array of all of the brand objects
    
    POST: Creates a new factory object
        Expects:
            {
              id: 'Brand id',
              company_type: "BRAND",
              name: 'Brand name',
              email: 'Brand email',
              phone_number: 'Brand phone number',
              city: 'Brand city',
              state: 'Brand state'
            }

**/brands/{id}**

    GET: Retrieves factory object with the id {id}

**/brands/{id}**

    DELETE: Deletes brand object with the id {id}
