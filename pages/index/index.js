// index.js
Page({
  data: {
    location: {
      name: '',
      address: '',
      latitude: 0,
      longitude: 0
    },
    products: [
      {
        id: 201,
        name: '红宝石草莓（大） 1份/约250g',
        image: '/images/strawberry1.jpg',
        price: 20.45,
        originalPrice: 19.95,
        grade: 'A级',
        service: '清洗易损伤，谨慎选择服务',
        sales: '8.89万人回购',
        discount: '心享95折'
      },
      {
        id: 202,
        name: '珍贵-粉红初恋草莓（大） 1份/约250g',
        image: '/images/strawberry2.jpg',
        price: 34.5,
        originalPrice: 34,
        brand: '招牌',
        discount: '心享95折'
      },
      {
        id: 203,
        name: '初恋草莓（大） 1份/约250g',
        image: '/images/strawberry3.jpg',
        price: 34.5,
        originalPrice: 34,
        grade: 'A级',
        discount: '心享95折'
      },
      {
        id: 204,
        name: '【现切】A级-红宝石草莓（大）',
        image: '/images/strawberry4.jpg',
        price: 23.5,
        originalPrice: 22.94,
        tag: '【现切】',
        grade: 'A级',
        service: '现切为下单后升切服务，非...',
        sales: '8.89万人回购',
        discount: '心享95折'
      }
    ],
    banners: [
      { image: '/images/banner_fruit.jpg' },
      { image: '/images/strawberry_banner.jpg' }
    ],
    categories: [
      { name: '水果', icon: '/images/icon_fruit.png' },
      { name: '蔬菜', icon: '/images/icon_vegetable.png' },
      { name: '海鲜', icon: '/images/icon_seafood.png' },
      { name: '肉禽', icon: '/images/icon_meat.png' },
      { name: '更多', icon: '/images/icon_more.png' }
    ]
  },
  
  onLoad: function() {
    this.getLocation();
  },
  
  getLocation: function() {
    const that = this;
    wx.getLocation({
      type: 'gcj02',
      success: function(res) {
        const latitude = res.latitude;
        const longitude = res.longitude;
        
        that.setData({
          'location.latitude': latitude,
          'location.longitude': longitude
        });
        
        // 获取地址信息
        that.getLocationName(latitude, longitude);
      },
      fail: function() {
        wx.showToast({
          title: '获取位置失败',
          icon: 'none'
        });
      }
    });
  },
  
  getLocationName: function(latitude, longitude) {
    const that = this;
    wx.request({
      url: 'https://apis.map.qq.com/ws/geocoder/v1/',
      data: {
        location: latitude + ',' + longitude,
        key: 'YOUR_KEY_HERE', // 需要替换为实际的腾讯地图API密钥
        get_poi: 0
      },
      success: function(res) {
        if (res.data.status === 0) {
          const result = res.data.result;
          that.setData({
            'location.name': result.address_component.street_number || result.address_component.street,
            'location.address': result.address
          });
        }
      },
      fail: function() {
        wx.showToast({
          title: '获取地址信息失败',
          icon: 'none'
        });
      }
    });
  },
  
  chooseLocation: function() {
    const that = this;
    wx.chooseLocation({
      success: function(res) {
        that.setData({
          location: {
            name: res.name || res.address,
            address: res.address,
            latitude: res.latitude,
            longitude: res.longitude
          }
        });
      }
    });
  },
  
  goToSearch: function() {
    wx.navigateTo({
      url: '/pages/search/search'
    });
  },
  
  selectSpec: function(e) {
    const id = e.currentTarget.dataset.id;
    wx.showToast({
      title: '选择规格: ' + id,
      icon: 'none'
    });
  },
  
  onRefresh: function() {
    // 模拟刷新
    setTimeout(() => {
      wx.stopPullDownRefresh();
      wx.showToast({
        title: '刷新成功',
        icon: 'success'
      });
    }, 1000);
  },
  
  loadMore: function() {
    // 模拟加载更多
    wx.showToast({
      title: '加载更多...',
      icon: 'loading'
    });
  }
})
