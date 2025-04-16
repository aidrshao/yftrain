// Vercel API代理配置
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
  // 您需要将这里的URL替换为实际的后端API地址
  let target = process.env.API_URL || 'http://your-backend-api-url';
  
  // 创建代理
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      '^/api': ''
    }
  })(req, res);
}; 