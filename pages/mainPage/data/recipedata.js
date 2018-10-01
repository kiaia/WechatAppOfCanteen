var localData = {
  goods: {
    1: {
      id: 1,
      name: '西红柿鸡蛋盖饭',
      pic: '/images/446105925964471455.jpg',
      sold: 1014,
      price: 2
    },
    2: {
      id: 2,
      name: '青椒肉丝铁板饭',
      pic: '/images/446105925964471455.jpg',
      sold: 1029,
      price: 3
    },
    3: {
      id: 3,
      name: '地三鲜盖饭',
      pic: '/images/446105925964471455.jpg',
      sold: 1030,
      price: 2
    },
    4: {
      id: 4,
      name: '干锅羊肉',
      pic: '/images/446105925964471455.jpg',
      sold: 1059,
      price: 1
    },
    5: {
      id: 5,
      name: '干锅茶树菇牛肉',
      pic: '/images/446105925964471455.jpg',
      sold: 1029,
      price: 2
    },
    6: {
      id: 6,
      name: '火腿鸡蛋铁板饭',
      pic: '/images/446105925964471455.jpg',
      sold: 1064,
      price: 2
    },
    7: {
      id: 7,
      name: '咖喱牛肉盖饭',
      pic: '/images/446105925964471455.jpg',
      sold: 814,
      price: 3
    },
    8: {
      id: 8,
      name: '酸辣土豆丝盖饭',
      pic: '/images/446105925964471455.jpg',
      sold: 124,
      price: 3
    },
    9: {
      id: 9,
      name: '紫菜鸡蛋汤',
      pic: '/images/446105925964471455.jpg',
      sold: 102,
      price: 5
    }
  },
  goodsList: [
    {
      id: 'hot',
      classifyName: '热销',
      goods: [1, 2, 3, 4, 5]
    },
    {
      id: 'new',
      classifyName: '新品',
      goods: [1, 3]
    },
    {
      id: 'tsgf',
      classifyName: '特色盖饭',
      goods: [1, 3, 7, 8]
    },
    {
      id: 'gggz',
      classifyName: '干锅锅仔',
      goods: [4, 5]
    },
    {
      id: 'tbf',
      classifyName: '铁板饭',
      goods: [2, 6, 9]
    },
    {
      id: 'favorite',
      classifyName: '收藏',
      goods: [2, 6, 9]
    }
  ],
  cart: {
    count: 0,
    total: 0,
    list: {}
  },
  showCartDetail: false
}

// 定义数据出口
module.exports = {
  postList: localData
}