
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/matlachacharter-web.github.io/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/matlachacharter-web.github.io/home",
    "route": "/matlachacharter-web.github.io"
  },
  {
    "renderMode": 2,
    "route": "/matlachacharter-web.github.io/home"
  },
  {
    "renderMode": 2,
    "route": "/matlachacharter-web.github.io/trips"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 22401, hash: '1bd5bf5248b1c10f4de2b0aeb2cab91ff651e40d7afc0bed353a37a18c650ffa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 22542, hash: 'a6a6f921ab070ec193ffefd425981de05cb1ead8a21a57694c5a1374ee81dfb1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'trips/index.html': {size: 32001, hash: '41d136ef42944f96e9294533cfe433498d186d505b4fb1451443978a58e4759d', text: () => import('./assets-chunks/trips_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 51513, hash: 'caa2effcb7673aff252d10d18337208c17306beb4e3ea285aed5067b5247c5bc', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-BY4ODBDI.css': {size: 357, hash: 'hluGl8QFl2w', text: () => import('./assets-chunks/styles-BY4ODBDI_css.mjs').then(m => m.default)}
  },
};
