module.exports = {
  apps: [
    {
      name: 'aranda-bridge',
      script: './dist/main.js',
      cwd: '/home/arandao/bridge',
      watch: false,
      ignore_watch: ['./dist/*', './node_modules/*', './public/*'],
      instance_var: 'ARANDA_BRIDGE',
    },
  ],
};
