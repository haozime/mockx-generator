module.exports = {
  domains: ['ju.tmall.com'],
  mockIds: [],
  projectIds: ['4', '6', '7'],
  rules: [{
    route: '/mockJSON',
    json: 'jsonfile.json'
  }, {
    route: '/mockFile',
    file: 'file.html'
  }, {
    route: '/mockJsData',
    jsdata: 'jsdata.js'
  }, {
    route: /(.*)/,
    remote: 'http://127.0.0.1:6001/$1',
    requestHeaders: {
      'x-header': '233333'
    }
  }],
  mockDir: '../mock'
}
