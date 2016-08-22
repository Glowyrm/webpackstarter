Some Webpack-React boilerplate that will eventually use Redux with an Express server

# Version
1.0.0

## Installation
Fork, clone, or whatever then run the following from the command line:
- npm install

## Dev Server
Uses webpack-dev-server configured to run on port 8000.
- npm run devserver

## Compile
Built code is placed in dist/app.bundle.js
- npm run build

## Output
You should see a page at port 8000 with an div in the index.html that says, "Howdy Mate" and under that, should be a react component that's a div with the text, "My App Component"
- Currently there's an error, and the react component doesn't render (seems like a babel issue)
