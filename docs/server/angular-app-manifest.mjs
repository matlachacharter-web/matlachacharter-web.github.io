
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/matlachacharter-web/matlachacharter-web.github.io',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/matlachacharter-web/matlachacharter-web.github.io/home",
    "route": "/matlachacharter-web/matlachacharter-web.github.io"
  },
  {
    "renderMode": 2,
    "route": "/matlachacharter-web/matlachacharter-web.github.io/home"
  },
  {
    "renderMode": 2,
    "route": "/matlachacharter-web/matlachacharter-web.github.io/trips"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 21787, hash: '98fafb31c30e2ab7a21a18ca27b15afcc9a41e6d42c7df4306252ebb20214986', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 21928, hash: '7a8660aed3b9cdc4a5e4187d0109767cc34c479a3c3a1a0ffb7a59a47aa820d3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'trips/index.html': {size: 31533, hash: '11c192b09eb05edd5a37af8ac8e13248561ddeeaacfb724845b5fcb397e80804', text: () => import('./assets-chunks/trips_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 51045, hash: 'b860a6c33c7169f4547f55833feadcaa6d771589438f290d05824aad5516ab0e', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-BY4ODBDI.css': {size: 357, hash: 'hluGl8QFl2w', text: () => import('./assets-chunks/styles-BY4ODBDI_css.mjs').then(m => m.default)}
  },
};
