
const URL = 'https://mini-live.digilinx.net.cn'

export  const GET = function(url, params) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: URL + url, //仅为示例，并非真实的接口地址
      data: params,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        resolve(res.data)
      },
      fail (error) {
        reject(error.data)
      }
    })
  })
}