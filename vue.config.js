const path = require('path');
module.exports={
  devServer: {
    disableHostCheck: true
  },
  configureWebpack:{
    resolve:{
      alias:{
        '@': path.resolve(__dirname, './src'),
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
      }
    }
  }
}
