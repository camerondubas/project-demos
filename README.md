# angular-starter-project

An empty project template for angular using:
- webpack as the module bundler, 
- babel as the compiler, 
- eslint as the linter, 
- webpack-dev-server as the dev server, 
- nginx in a docker image as the production server.

# Usage

1. Update the docker image tag in the package.json build script.
1. Find all the TODO comments and make the necessary changes.

# Build

```bash
npm run build
```

The build command does 3 things:
1. Transpiles all the code into an index.html, app.[hash].js and app.[hash].css files and puts it in /public directory.
1. Copies the static directory content into the /public directory.
1. Builds the docker image which serves the content of the /public directory.

# Dev server

```bash
npm start
```
Starts a dev server on the port 8080. The port number can be changed in the package.json start script.

# Production server

```bash 
docker run -d -p=80:80 user/image:version 
```
Make sure to change the `user/image:version` to the appropriate image tag set in the package.json build script.
