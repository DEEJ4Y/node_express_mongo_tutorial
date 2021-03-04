# Backend tutorial

What we will learn:

1. JS
2. Bash CLI: Basic terminal operations.
3. Node JS: REPL, npm
4. Express: Creating an express server, handling requests and responses.
5. Mongoose: Integrating a mongoDB database with our application.

## Bash CLI

Install bash [here](https://git-scm.com/downloads).

### Check your current directory

```shell
pwd
```

Shows your present working directory/folder.

### Show all items inside your current directory

```shell
ls
```

Shows all files and folders inside the directory.

### Changing directories

Go one step up:

```shell
cd ..
```

Go into a subfolder:

```shell
cd folder_name/
```

Tip: Use tab after typing a few letters to autocomplete file and folder names.

### Create a folder

```shell
mkdir folder_name
```

### Delete a folder

```shell
rm -r folder_name/
```

### Create a file

```shell
touch filename.extension
```

### Delete a file

```shell
rm filename.extension
```

### Open a folder in VS Code

Once in the project folder, type:

```shell
start code .
```

## Node

Install node [here](https://nodejs.org/en/download/).

Read the [Node JS documentation](https://nodejs.org/en/docs/).

### REPL

REPL: Read-Evaluate-Print-Loop

To enter the REPL, inside your terminal, type:

```shell
node
```

Here you can write any JS you like.

To exit the REPL, hit CTRL+C twice. (Command+C for Mac)

### Hello World

Creating a modular hello world program.

### Node: require and exports

To use a node module:

```javascript
const varName = require(path);
```

To export a function from a node module:

```javascript
module.exports = functionName;
```

### NPM: Node Package Manager

[NPM](https://www.npmjs.com/) is a package manager for Node.

#### Initializing npm

For every project that requires npm, you will have to initialize npm inside the directory. This is a one time step.

```shell
npm init
```

It will prompt you with some options, change the defaults and hit enter to proceed to the next option.

If you want to use all defaults during initialization, use:

```shell
npm init -y
```

Initialization creates a package.json file that npm uses to keep track of the packages that your project is using.

#### Installing a package

Once you have the name of the package from the docs, simply install the package from your terminal like so:

```shell
npm i package-name
```

For example, to install express:

```shell
npm i express
```

To install multiple packages at once:

```shell
npm i package-1 package-2
```

## Express JS

A web framework for Node JS.

Read the [express documentation](https://expressjs.com/en/5x/api.html).

### First server with express

Creating a server with express:

- Require express inside your server.js file.

```javascript
const express = require("express");
```

- Set a variable to use express.

```javascript
const app = express();
```

- Set a port for the server to listen to.

```javascript
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
```

- Set up a home route

```javascript
app.get("/", (req, res) => {
  res.send("Hello World!");
});
```

Your server.js file should look like this:

```javascript
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
```

Run the server in the terminal by typing:

```shell
node server.js
```

The console should show:

```shell
Server started on port 8000
```

In the browser head over to [http://localhost:8000/](http://localhost:8000/).

### Handling POST requests

- Require express.

```javascript
const express = require("express");

const app = express();
```

- We will need to use express.urlencoded to parse the body of the request.

```javascript
// Body-parser
app.use(express.urlencoded({ extended: true }));
```

- Handling routes.

```javascript
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/register.html");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});
```

- Server port.

```javascript
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
```
