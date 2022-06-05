import nvzhuang from ''

const data = [
    { 'id': a, 'title': '服装', src: nvzhuang },
    { 'id': b, 'title': '鞋类', src: xielei },
    { 'id': c, 'title': '彩妆', src: caizhuang },
    { 'id': d, 'title': '美食', src: meishi },
    { 'id': e, 'title': '配饰', src: peishi },
    { 'id': f, 'title': '百货', src: baihuo },
    { 'id': g, 'title': '数码', src: shuma },
    { 'id': h, 'title': '更多', src: gengduo}
  ]

    export default{
            getGoodsName (callback) {
                setTimeout(() => callback(data), 100)
            }
  }