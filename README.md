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
1. Delete services/post.js and remove where its references in services/index.js and views/main.controller.js

### Services

All services should extend the base service. By default, the base service creates `get`, `query`, `save`, `delete`, and `remove` actions. Those actions can be extended by passing `actions` to the constructor options. Check out service/post.js as an example service.

If you want to override the action function and call the super function, you can do so by calling `this.request()`.

An example of a simple post service that implements only the basic 4 requests would look something like this:
```js
let self = {};
class PostService extends BaseService {
  constructor($q, $resource) {
    Object.assign(self, {$q, $resource}); 
    // This will create a post resource with the default action. i.e. we can call postService.get(postId) or postService.save(postId, updatedField).
    super('/posts/:id', self);
  }
}
```

If we want to extend this and add another action, we can do so by passing `options` to the `super` constructor:
```js
let self = {};
class PostService extends BaseService {
  constructor($q, $resource) {
    Object.assign(self, {$q, $resource}); 
    let options = {
      actions: {
       addAuthor: {method: 'POST', url: this.getAPIUrl() + '/posts/:id/author'},
       queryAuthors: {method: 'GET', isArray: true, url: this.getAPIUrl() + '/posts/:id/author'}
      }
    };
    // In addition to the 5 default actions, we can now call postService.addAuthor() and postService.queryAuthors()
    super('/posts/:id', self, options);
  }
}
```

It's also possible to customize the resource params by passing `params` with the constructor options:
```js
let self = {};
class PostService extends BaseService {
  constructor($q, $resource) {
    Object.assign(self, {$q, $resource}); 
    let options = {
      params: {
        postId: '@postId'
      }
      actions: {
        addAuthor: {method: 'POST', path: '/author'},
        queryAuthors: {method: 'GET', isArray: true, path: '/author'}
      }
    };
    super('/posts/:postId', self, options);
  }
}
```

We can also override any action function:
```js
let self = {};
class PostService extends BaseService {
  constructor($q, $resource) {...}
  
  save(post) {
    // For example let's say we want to add some validation before we make the request
    if (post.title.length > 150) throw new Error('Post title can\'t be more than 150 characters long');
    
    return this.request('save', post);
  }

  queryAuthorsAndCount(options) {
    // We can also do some work after the request resolves before we return the response.
    return this.request('queryAuthors', options).then(authors => {
      return {
        count: authors.length
        authors
      };
    });
  }
}
```

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
