const path = require ("path")

//  console.log(path.basename(__filename))      // which file
//  console.log(path.dirname(__filename))     // direction info
//  console.log(path.extname(__filename))   // what kind of name (js.html..)

// console.log(path.parse(__filename));  root info

// console.log(path.join(__dirname, `templates`, `index.html`));   // join files

console.log(path.resolve(__dirname, `templates`, `/index.html`));

