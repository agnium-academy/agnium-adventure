Agnium Adventure
================

Adventure of web app with REST API, using hapi.js and Swagger. This is a very simple adventure app.

*  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *

REST API
--------

List of basic routes:

| Route                  | HTTP Verb | Description
|------------------------|-----------|---------------------
| /api/hello?name={name} | GET       | Print hello, {name}!

List of adventurer routes:

| Route                | HTTP Verb | Description
|----------------------|-----------|-----------------------------------
| /api/adventurers     | GET       | Get all the adventurers
| /api/adventurers     | POST      | Create an adventurer
| /api/adventurers/:id | GET       | Get a single adventurer
| /api/adventurers/:id | PUT       | Update an adventurer with new info
| /api/adventurers/:id | DELETE    | Delete an adventurer

List of filter routes:

| Route                           | HTTP Verb | Description
|---------------------------------|-----------|--------------------------------
| /api/adventurers?name="{name}"  | GET       | Get {name} match in adventurers
| /api/adventurers?name="{na}"    | GET       | Get {na} like in adventurers

*  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *

Usage
-----

With only npm:

```
npm install
npm start
```

With pm2:

```
npm install -g pm2
pm2 start ecosystem.json
```

*  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *

Development
-----------

```
swagger project edit .
swagger project start .
atom .
```

*  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *

Deployment
----------

```
pm2 deploy ecosystem.json personal
pm2 deploy ecosystem.json production
pm2 deploy ecosystem.json dev
```
