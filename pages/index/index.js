// index.js
Page({
  // 页面持有的状态数据
  data: {
    items: [{
      id: 3,
      content: '去超市买白菜',
      checked: false,
    },
    {
      id: 2,
      content: '吃烧烤',
      checked: false,
    },
    {
      id: 1,
      content: '汇报工作',
      checked: false,
    }
  ],
},
// 监听多选框的状态改变条件
  checkboxChange(e) {
    // 页面持有的数据
    // 获取本地数据的写法为this.data.xxx
    const items = JSON.parse(JSON.stringify(this.data.items))
    // checkbox持有的数据
    const values = e.detail.value
    //将items和values进行对比
    //根据value的值更新页面数据
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false
      for (let j = 0, lenJ = items.length; j < lenJ; ++j) {
        //values[j是String,转化为Int
        if (items[i].id === parseInt(values[j])) {
          items[i].checked = true
          break
        }
      }
    }
    //更新数据
    this.setData({
      items: items
    })
    //打印的内容会展示在调试器中
    console.log(this.data.items)
  }
})
