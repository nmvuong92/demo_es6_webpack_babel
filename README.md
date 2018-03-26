#1. install webpack
npm install webpack@2.1.0-beta.22 --save-dev
#2. install babel-loader
npm install babel-loader@7.1.1 --dev
#3. install webpack cli
npm i webpack-cli

##DO
#1. create file webpack.config.js in root project
```
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './js/main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
```

##./js/main.js
```
function sayhello(){
    console.log("Hello");
    alert("hello");
}
window.sayhello = sayhello;
```
=> webpack export file: ./build/main.bundle.js

##index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <button onclick="sayhello();">say hello</button>
    <script src="./build/main.bundle.js"></script>
</body>
</html>
```

