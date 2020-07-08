// pages/live_player/live_player.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: true
  },
  statechange(e) {
    console.log('live-player code:', e.detail.code)
    const {
      code
    } = e.detail
    if (code === 2004) {
      this.setData({
        loading: false
      })
    }
  },
  error(e) {
    console.error('live-player error:', e.detail.errMsg)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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