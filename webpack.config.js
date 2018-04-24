module.exports = {
  egg: true,
  framework: 'react',
  // devtool: 'source-map',
  entry: {
    include: ['app/web/page',
      { layout: 'app/web/framework/layout/layout.jsx?loader=false' },
      { 'spa/redux': 'app/web/page/spa/redux.jsx?loader=false' },
      { 'spa/client': 'app/web/page/spa/client.jsx?loader=false' },
      { 'spa/ssr': 'app/web/page/spa/ssr.jsx?loader=false' },
      { 'class/class': 'app/web/page/class/class.jsx?loader=false',
        'course/course': 'app/web/page/course/course.jsx?loader=false',
        'course/edit': 'app/web/page/course/edit.jsx?loader=false',
        'course/modify': 'app/web/page/course/modify.jsx?loader=false',
        'stuCourse/stuCourse': 'app/web/page/stuCourse/stuCourse.jsx?loader=false', 
        'upload/upload': 'app/web/page/upload/upload.jsx?loader=false'
      },
    ],
    exclude: ['app/web/page/test'],
    loader: {
      client: 'app/web/framework/entry/client-loader.js',
      server: 'app/web/framework/entry/server-loader.js'
    }
  },
  alias: {
    asset: 'app/web/asset',
    component: 'app/web/component',
    framework: 'app/web/framework',
    store: 'app/web/store',
    container: 'app/web/container',
    utils: 'app/web/utils',
    service: 'app/web/service',
    config: 'config'
  },
  cssModule: {
    include: 'app/web/page/css/module'
  },
  dll: ['react', 'react-dom'],
  loaders: {

  },
  plugins: {

  },

  done() {
    console.log('---webpack compile finish---');
  }
};
