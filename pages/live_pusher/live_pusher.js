import { GET } from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pusherUrl: 'rtmp://mini-live.digilinx.net.cn:1935/live/',
    roomId: '',
    url: ''
  },

  statechange(e) {
    console.log('live-pusher code:', e.detail.code)
  },
  bindSwitchCamera() {
    this.ctx.switchCamera({
      success: res => {
        console.log('switchCamera success')
      },
      fail: res => {
        console.log('switchCamera fail')
      }
    })
  },
   async bindStart () {
      const { pusherUrl } = this.data
      const roomId = wx.getStorageSync('roomId')
      if(roomId) {
        if(pusherUrl.includes(roomId)) {
          this.setData({pusherUrl: pusherUrl,roomId,url: pusherUrl})

        }else {
          this.setData({pusherUrl: pusherUrl + roomId, roomId, url: pusherUrl + roomId })
          
        }
      } else {

        const { char } = await GET('/index.php?type=add')
        wx.setStorageSync('roomId', char)
        this.setData({pusherUrl: pusherUrl + char,roomId: char, url: pusherUrl + roomId}) 
      }
     
      this.ctx.start({
        success: res => {
          console.log('start success')
        },
        fail: res => {
          console.log('start fail')
        }
      })

   
  },
  bindPause() {
    this.ctx.pause({
      success: res => {
        console.log('pause success')
      },
      fail: res => {
        console.log('pause fail')
      }
    })
  },
  bindStop() {
    this.ctx.stop({
      success: res => {
        console.log('stop success')
      },
      fail: res => {
        console.log('stop fail')
      }
    })
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
    this.ctx = wx.createLivePusherContext('pusher')
    this.ctx.startPreview()
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