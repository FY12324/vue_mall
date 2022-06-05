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

  export default {
    data () {
      return {
        menus: [],
        rightLiTops: [],
        scrollY: 0        // 记住右菜单的滚动距离
      }
    },
    created () {
      this.$indicator.open({
        text: '加载中'
      })
      this.$http.get('category').then(res => {
        this.$indicator.close()
        this.menus = res.data.data
      })
    },
    watch: {
      menus () {
        // $nextTick用来在下次DOM更新循环结束之后执行延迟回调
        this.$nextTick(() => {
          this._initBScroll()      // 初始化better-scroll
          this._initRightHeight()  // 初始化右边菜单的高度
        })
      }
    },
    computed: {
      currentIndex () {
        // 当 scrollY 发生改变时，修改左菜单的激活项
        const { scrollY, rightLiTops } = this
        // 从右菜单中查找元素，返回元素索引
        return rightLiTops.findIndex((top, index) => {
          if (index === rightLiTops.length - 2) {
            return true
          }
          if (scrollY >= top && scrollY < rightLiTops[index + 1]) {
            this._initLeftScroll(index)
            return true
          }
        })
      }
    },
    methods: {
      // 单击左菜单中的某一项后，将右菜单切换到对应项下面
      clickList (index) {
        this.scrollY = this.rightLiTops[index]
        this.rightBscroll.scrollTo(0, -this.scrollY)
      },
      // 初始化better-scroll
      _initBScroll () {
        this.leftBscroll = new BScroll('.menu-left', {
          click: true,
          mouseWheel: true
        })
        this.rightBscroll = new BScroll('.menu-right', {
          click: true,
          mouseWheel: true,
          probeType: 3  // 实时派发 scroll 事件
        })
        this.rightBscroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(pos.y)
        })
      },
      // 初始化右边菜单的高度
      _initRightHeight () {
        let itemArray = []
        let top = 0
        itemArray.push(top)
        let allList = this.$refs.itemList.getElementsByClassName('cate')
        // 将 allList 转换为普通数组进行遍历，记录每个元素的高度
        Array.prototype.slice.call(allList).forEach(li => {
          top += li.clientHeight
          itemArray.push(top)
        })
        let bottom = this.$refs.itemList.getElementsByClassName('cate-bottom')[0]
        bottom.style.height = this.$refs.itemList.clientHeight / 1.2 + 'px'
        this.rightLiTops = itemArray
      },
      // 右菜单滚动时，左菜单联动
      _initLeftScroll (index) {
        let menu = this.$refs.menuList
        let el = menu[index]
        // scrollToElement(el, time, offsetX, offsetY, easing)
        this.leftBscroll.scrollToElement(el, 300, 0, -100)
      }
    }
  }