// Vercel API代理配置
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
  // 获取环境变量中配置的API地址，替换为腾讯云服务器地址
  let target = process.env.API_URL || 'http://您的腾讯云服务器IP:8080';
  
  // 创建代理
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      '^/api': ''
    },
    onError: (err, req, res) => {
      console.error('代理错误:', err);
      res.status(500).json({ error: '无法连接到后端服务' });
    }
  })(req, res);
}; 