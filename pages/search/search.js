var API_URL = "https://api.douban.com/v2/movie/search?q=";
var API_URL_TOP25 = "https://api.douban.com/v2/movie/top250";
Page({

  data: {
    movies:[]
  },

  search: function (e){
    if(!e.detail.value){
      return;
    }
    var thisObj = this;
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 10000
    });

    wx.request({
      url: API_URL+e.detail.value,
      data: {},
      header: {
        'Content-Type': 'json' // 默认值
      },
      success: function (res) {
        wx.hideToast();
        var data = res.data;
        thisObj.setData({
          movies: data.subjects
        });
      }
    });

  },

  onLoad: function (options) {
    var thisObj = this;
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 10000
    });

    wx.request({
      url: API_URL_TOP25,
      data: {},
      method: "GET",
      header: {
        'Content-Type': 'json' // 默认值
      },
      success: function (res) {
        wx.hideToast();
        var data = res.data;
        thisObj.setData({
          title: data.title,
          movies: data.subjects
        });
      }
    });
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