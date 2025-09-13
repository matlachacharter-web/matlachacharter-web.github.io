
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
    'index.csr.html': {size: 21750, hash: '52a22202a3067c193e463d469aa072870cb34dfe7274a715a6688ab0b3adbe4f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 21891, hash: '370aed4d0feacf3b68324e7a058cd4898a7852852b96b9fa01bd400a2b3213cf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'trips/index.html': {size: 31344, hash: '28d99617fa3d9ecf1abbfebb930e8c2373e190f886bc64583da7703ff1efa093', text: () => import('./assets-chunks/trips_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 50856, hash: 'dd7613d6d332d28d06db7254a99371f91160ed1e2f727acc4686c4a2c5989ec7', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-BY4ODBDI.css': {size: 357, hash: 'hluGl8QFl2w', text: () => import('./assets-chunks/styles-BY4ODBDI_css.mjs').then(m => m.default)}
  },
};
