//import axios from 'axios'

const SERVER_URL = 'https://bbs.nga.cn/'
function urlFor(relativeUrl, params) {
  params = new URLSearchParams({ ...params, 'lite': 'js' })
  // eslint-disable-next-line
  console.log(params.toString())
  console.log(relativeUrl)
  return new URL(relativeUrl + `?${params.toString()}`, SERVER_URL).toString()
}

function fetch(url, params) {
  // eslint-disable-next-line
  return new Promise((resolve, reject) => {
    const iframe = document.createElement('iframe')
    iframe.hidden = true
    document.body.appendChild(iframe)
    Object.defineProperty(iframe.contentWindow, 'script_muti_get_var_store', {
        set(v) {
          resolve(v)
        }
    })
    const idocument = iframe.contentDocument
    const script = idocument.createElement('script')
    script.setAttribute('charset', 'gbk')
    script.setAttribute('src', urlFor(url, params))
    idocument.body.appendChild(script)
  })
}

export { fetch }
