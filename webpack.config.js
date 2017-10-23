var webpack = require('webpack');
var path = require('path');
//Thư mục sẽ chứa tập tin được biên dịch
var BUILD_DIR = path.resolve(__dirname, 'public');
//Thư mục chứa dự án - các component React
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
  entry: APP_DIR + '/app.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },

//   resolve: {
//     modules: [__dirname, 'node_modules'],
//     alias: {
//       reducer: 'app/reducers/reducer',
//       store: 'app/storeConf',
//       List: 'app/components/List',
//       Note: 'app/components/Note',
//       NoteForm: 'app/components/NoteForm',
//       action: 'app/action'
//     },
//     extensions: ['', '.js', '.jsx']
//   },
// //Thêm
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  }
//Kết thúc Thêm
};

module.exports = config;
