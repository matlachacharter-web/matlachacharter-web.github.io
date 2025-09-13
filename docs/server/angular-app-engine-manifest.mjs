
export default {
  basePath: 'https://github.com/matlachacharter-web/matlachacharter-web.github.io',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
