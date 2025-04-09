// index.js
Page({
  data: {
    // Banneru8f6eu64adu56feu6570u636e
    banners: [
      {
        id: 1,
        imageUrl: '/images/banner1.png',
        linkUrl: '/pages/product/product?id=101'
      },
      {
        id: 2,
        imageUrl: '/images/banner2.png',
        linkUrl: '/pages/category/category?id=2'
      },
      {
        id: 3,
        imageUrl: '/images/banner3.png',
        linkUrl: '/pages/product/product?id=103'
      }
    ],
    // u516cu544au6570u636e
    announcementText: 'u65b0u9c9cu6c34u679cu5b63uff0cu5168u573au6c34u679cu6ee18u6298uff01u65b0u4ebau9996u5355u7acbu51cf10u5143uff0cu5febu6765u9009u8d2du5427uff01',
    announcementDetail: 'u65b0u9c9cu6c34u679cu5b63uff0cu5168u573au6c34u679cu6ee18u6298uff01u65b0u4ebau9996u5355u7acbu51cf10u5143uff0cu5febu6765u9009u8d2du5427uff01\n\nu6d3bu52a8u65f6u95f4uff1a2025u5e743u670825u65e5-2025u5e744u670810u65e5\n\nu6d3bu52a8u8be6u60c5uff1a\n1. u65b0u7528u6237u9996u5355u6ee1100u5143u7acbu51cf10u5143\n2. u8001u7528u6237u4e0bu5355u6ee1200u5143u7acbu51cf20u5143\n3. u6307u5b9au5546u54c1u6ee18u6298uff0cu6570u91cfu6709u9650uff0cu5148u5230u5148u5f97\n\nu6ce8u610fu4e8bu9879uff1a\n- u6bcfu4e2au7528u6237u9650u9886u4e00u6b21u65b0u4ebau793cu5305\n- u4f18u60e0u4e0du53e0u52a0uff0cu4e0du53efu4e0eu5176u4ed6u4f18u60e0u5238u540cu65f6u4f7fu7528\n- u6700u7ec8u89e3u91cau6743u5f52u7ea2u7ea2u679cu56edu6240u6709',
    announcementHighlight: true,
    // u5206u7c7bu6570u636e
    categories: [
      {
        id: 1,
        name: 'u65f6u4ee4u6c34u679c',
        iconUrl: '/images/category1.png'
      },
      {
        id: 2,
        name: 'u6298u6263u4e13u533a',
        iconUrl: '/images/category2.png'
      },
      {
        id: 3,
        name: 'u62fcu56e2u62a2u8d2d',
        iconUrl: '/images/category3.png'
      },
      {
        id: 4,
        name: 'u4f1au5458u7279u60e0',
        iconUrl: '/images/category4.png'
      },
      {
        id: 5,
        name: 'u8fdbu53e3u6c34u679c',
        iconUrl: '/images/category5.png'
      },
      {
        id: 6,
        name: 'u5e72u679cu575au679c',
        iconUrl: '/images/category6.png'
      },
      {
        id: 7,
        name: 'u793cu54c1u5305u88c5',
        iconUrl: '/images/category7.png'
      },
      {
        id: 8,
        name: 'u5168u90e8u5206u7c7b',
        iconUrl: '/images/category8.png'
      }
    ],
    // u5546u54c1u6570u636euff08u5de6u4fa7u5217uff09
    leftProducts: [
      {
        id: 101,
        name: 'u65b0u9c9cu8349u8393 500g/u76d2',
        price: 29.9,
        originalPrice: 39.9,
        imageUrl: '/images/product1.png',
        tag: 'u9650u65f65u6298'
      },
      {
        id: 103,
        name: 'u667au5229u7ea2u63d0u5b50 1kg/u888b',
        price: 45.8,
        originalPrice: 55.8,
        imageUrl: '/images/product3.png',
        tag: 'u7206u6b3eu70edu5356'
      },
      {
        id: 105,
        name: 'u6cf0u56fdu91d1u679du6930u5b50 3u4e2a',
        price: 39.9,
        originalPrice: null,
        imageUrl: '/images/product5.png',
        tag: 'u65b0u54c1u4e0au5e02'
      }
    ],
    // u5546u54c1u6570u636euff08u53f3u4fa7u5217uff09
    rightProducts: [
      {
        id: 102,
        name: 'u9655u897fu7ea2u5bccu58ebu82f9u679c 5u4e2a',
        price: 35.8,
        originalPrice: 45.8,
        imageUrl: '/images/product2.png',
        tag: 'u62fcu56e2u4e2d'
      },
      {
        id: 104,
        name: 'u8d8au5357u9752u76aeu706bu9f99u679c 2u4e2a',
        price: 89.9,
        originalPrice: 109.9,
        imageUrl: '/images/product4.png',
        tag: null
      },
      {
        id: 106,
        name: 'u65b0u897fu5170u5947u5f02u679c 6u4e2a',
        price: 99.9,
        originalPrice: 129.9,
        imageUrl: '/images/product6.png',
        tag: 'u4f1au5458u7279u4eab'
      }
    ],
    // u72b6u6001u6807u8bb0
    hasUnread: true,
    isRefreshing: false,
    isLoading: false,
    noMoreProducts: false,
    networkError: false,
    showWelcomeModal: false,
    showAnnouncementModal: false,
    page: 1,
    pageSize: 6
  },

  onLoad: function() {
    // u9875u9762u52a0u8f7du65f6u6267u884c
    this.checkNetwork();
    
    // u5ef6u65f61u79d2u663eu793au65b0u4ebau793cu5305u5f39u7a97
    setTimeout(() => {
      this.setData({
        showWelcomeModal: true
      });
    }, 1000);
  },
  
  onShow: function() {
    // u9875u9762u663eu793au65f6u6267u884c
  },
  
  // u68c0u67e5u7f51u7edcu72b6u6001
  checkNetwork: function() {
    wx.getNetworkType({
      success: (res) => {
        if (res.networkType === 'none') {
          this.setData({
            networkError: true
          });
        } else {
          this.setData({
            networkError: false
          });
        }
      }
    });
  },
  
  // u91cdu8bd5u52a0u8f7d
  retryLoading: function() {
    this.checkNetwork();
    if (!this.data.networkError) {
      // u91cdu65b0u52a0u8f7du6570u636e
      this.onRefresh();
    }
  },
  
  // u4e0bu62c9u5237u65b0u76f8u5173u51fdu6570
  onPulling: function() {
    // u4e0bu62c9u8fc7u7a0bu4e2d
  },
  
  onRefresh: function() {
    // u5f00u59cbu5237u65b0
    this.setData({
      isRefreshing: true
    });
    
    // u6a21u62dfu7f51u7edcu8bf7u6c42
    setTimeout(() => {
      // u5237u65b0u5b8cu6210
      this.setData({
        isRefreshing: false,
        page: 1,
        noMoreProducts: false
      });
      
      // u663eu793au63d0u793a
      wx.showToast({
        title: 'u5df2u66f4u65b0',
        icon: 'success',
        duration: 1500
      });
    }, 1500);
  },
  
  onRestore: function() {
    // u5237u65b0u5b8cu6210u540eu7684u56deu5f39u52a8u753bu5b8cu6210
  },
  
  onAbort: function() {
    // u5237u65b0u88abu7528u6237u4e2du65ad
    this.setData({
      isRefreshing: false
    });
  },
  
  // u52a0u8f7du66f4u591a
  loadMore: function() {
    if (this.data.isLoading || this.data.noMoreProducts) return;
    
    this.setData({
      isLoading: true
    });
    
    // u6a21u62dfu7f51u7edcu8bf7u6c42
    setTimeout(() => {
      // u5224u65adu662fu5426u8fd8u6709u66f4u591au6570u636e
      if (this.data.page >= 3) {
        this.setData({
          isLoading: false,
          noMoreProducts: true
        });
      } else {
        // u52a0u8f7du66f4u591au5546u54c1
        const newLeftProducts = [
          {
            id: 107 + (this.data.page - 1) * 6,
            name: 'u6d77u5357u91d1u94bbu51e4u68a8 1u4e2a',
            price: 25.8,
            originalPrice: 32.8,
            imageUrl: '/images/product7.png',
            tag: 'u7279u4ef7u4f18u60e0'
          },
          {
            id: 109 + (this.data.page - 1) * 6,
            name: 'u667au5229u8fdbu53e3u7ea2u63d0 500g/u76d2',
            price: 59.9,
            originalPrice: 79.9,
            imageUrl: '/images/product9.png',
            tag: null
          },
          {
            id: 111 + (this.data.page - 1) * 6,
            name: 'u56fdu4ea7u7206u6c41u6843u5b50 4u4e2a',
            price: 29.9,
            originalPrice: null,
            imageUrl: '/images/product11.png',
            tag: 'u5f53u5b63u65b0u54c1'
          }
        ];
        
        const newRightProducts = [
          {
            id: 108 + (this.data.page - 1) * 6,
            name: 'u8fdbu53e3u7275u725bu679c 3u4e2a',
            price: 45.9,
            originalPrice: 55.9,
            imageUrl: '/images/product8.png',
            tag: null
          },
          {
            id: 110 + (this.data.page - 1) * 6,
            name: 'u6cf0u56fdu5c71u7af9u9999u8461u8404 1kg',
            price: 89.9,
            originalPrice: 99.9,
            imageUrl: '/images/product10.png',
            tag: 'u9650u65f68u6298'
          },
          {
            id: 112 + (this.data.page - 1) * 6,
            name: 'u65b0u9c9cu5c71u7af9u9999u8292u679c 1u4e2a',
            price: 35.8,
            originalPrice: 45.8,
            imageUrl: '/images/product12.png',
            tag: 'u7206u6b3eu70edu5356'
          }
        ];
        
        this.setData({
          leftProducts: [...this.data.leftProducts, ...newLeftProducts],
          rightProducts: [...this.data.rightProducts, ...newRightProducts],
          page: this.data.page + 1,
          isLoading: false
        });
      }
    }, 1000);
  },
  
  // Banneru70b9u51fb
  onBannerTap: function(e) {
    const item = e.currentTarget.dataset.item;
    wx.navigateTo({
      url: item.linkUrl
    });
  },
  
  // u641cu7d22u6846u70b9u51fb
  goToSearch: function() {
    wx.navigateTo({
      url: '/pages/search/search'
    });
  },
  
  // u6d88u606fu901au77e5u70b9u51fb
  goToNotification: function() {
    wx.navigateTo({
      url: '/pages/notification/notification'
    });
  },
  
  // u5206u7c7bu70b9u51fb
  goToCategory: function(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/category/category?id=${id}`
    });
  },
  
  // u5206u7c7bu957fu6309u9884u89c8
  previewCategory: function(e) {
    const id = e.currentTarget.dataset.id;
    wx.showToast({
      title: `u9884u89c8${this.data.categories.find(item => item.id === id).name}`,
      icon: 'none'
    });
    // u8fd9u91ccu53efu4ee5u5b9eu73b0u5f39u51fau9884u89c8u6d6eu5c42u7684u903bu8f91
  },
  
  // u67e5u770bu66f4u591au70edu9500u5546u54c1
  viewMoreHotProducts: function() {
    wx.navigateTo({
      url: '/pages/category/category?id=2' // u8df3u8f6cu5230u70edu9500u5206u7c7b
    });
  },
  
  // u5546u54c1u70b9u51fb
  goToProduct: function(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/product/product?id=${id}`
    });
  },
  
  // u5546u54c1u957fu6309u5febu901fu52a0u8d2d
  quickAddToCart: function(e) {
    const id = e.currentTarget.dataset.id;
    const product = [...this.data.leftProducts, ...this.data.rightProducts].find(item => item.id === id);
    
    wx.showToast({
      title: `u5df2u5c06${product.name}u52a0u5165u8d2du7269u8f66`,
      icon: 'success'
    });
    // u8fd9u91ccu53efu4ee5u5b9eu73b0u5f39u51fau9009u62e9u89c4u683cu5e76u52a0u5165u8d2du7269u8f66u7684u903bu8f91
  },
  
  // u663eu793au5b8cu6574u516cu544a
  showFullAnnouncement: function() {
    this.setData({
      showAnnouncementModal: true
    });
  },
  
  // u5173u95edu516cu544au5f39u7a97
  closeAnnouncementModal: function() {
    this.setData({
      showAnnouncementModal: false
    });
  },
  
  // u5173u95edu65b0u4ebau793cu5305u5f39u7a97
  closeWelcomeModal: function() {
    this.setData({
      showWelcomeModal: false
    });
  },
  
  // u9886u53d6u65b0u4ebau793cu5305
  claimGift: function() {
    wx.showToast({
      title: 'u793cu5305u9886u53d6u6210u529fuff01',
      icon: 'success'
    });
    
    this.setData({
      showWelcomeModal: false
    });
  }
})
