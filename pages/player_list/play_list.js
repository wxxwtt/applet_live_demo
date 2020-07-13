// pages/player_list/play_list.js
import { GET } from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    roomList: []
  },
  async getRoomList () {
    const  { list }  =  await GET('/index.php')
    this.setData({roomList: list})

  },
  enterRoom (e) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: `../live_player/live_player?id=${id}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getRoomList()
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