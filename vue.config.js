module.exports = {
  devServer: {
      proxy: {
          '/api': {
              target: 'http://192.168.1.118:8080',
              changeOrigin: true,
              pathRewrite: {
                '^/api': ''
            }
          },
      },
  },
}