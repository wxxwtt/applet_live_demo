// pages/live_player/live_player.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    liveSatus: 0,
    fullScreen: false,
    screenFooterShow: false,
    id: null,
    url: 'rtmp://192.168.0.16:1935/live/'
  },
  statechange(e) {
    console.log('live-player code:', e.detail.code)
    let { liveSatus } = this.data.liveSatus
    let {
      code
    } = e.detail
    liveSatus = code
    this.setData({liveSatus})
    
  },
  error(e) {
    console.error('live-player error:', e.detail.errMsg)
  },
  screenClick() {
    this.setData({ screenFooterShow: true  })
  },
  fullScreenChange(e) {
    const { type } = e.currentTarget.dataset
    console.log(type)

    if( type == 1) { // 进入全屏
      this.ctx.requestFullScreen({
        success:() => {
          console.log(11111)
          this.setData({fullScreen: true})
        },
        fail:e => {
          console.log(e)
        },
        complete: e => {
          console.log(e)
        }
      })
    }else { // 退出全屏
      this.ctx.exitFullScreen({
        success:function(){
          this.setData({fullScreen: false})
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { id } = options
    const { url } = this.data
    this.setData({url: url + id})
    this.ctx = wx.createLivePlayerContext ('player')

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})