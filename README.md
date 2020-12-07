# NodeJS-Basic-Server

This is an example of a basic server.

Firstly, if we run in the terminal the command ```node server.js```, we see the ```listening on http://localhost:3000``` message.
Once we open the browser and we go to that address, we can observe that there is a message in the web ("hello" in this example) and looking at the terminal, there are two request:
  - One with the url ```/```: represents the home page. If we go to http://localhost:3000/page2, it would show us ```/page2```.
  - One with the url ```/favicon.ico```: represents the browser tab's icon.
  
Secondly, we're going to analyze the code.
  - ```require("http")```: NodeJs still uses an old way to import the modules (if you're using VSCode, it will recommend you to change the line to ES6).
  - "http": is a Node's module that provide all the necessary communication to be able to run a web server.
  - ```createServer()```: as the name suggests, this method creates the server, it has two parameters:
    - ```req```: represents the information coming from the user (URL, meta data, parameters, etc).
    - ```res```: represents the information what we want to send back (Cookies, headers, HTTP status code, etc).
    - ```res.end()```: it has to be called at the end to let the server know we're done.
  - ```listen()```: method to choose the port and start listening.
