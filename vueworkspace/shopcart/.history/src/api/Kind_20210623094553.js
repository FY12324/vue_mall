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
    getGoodsList (callback) {
      setTimeout(() => callback(data), 100)
    }
  }
  var vm = new Vue({
    data:{
        list:[],
        list1:['羽绒服','毛衣','冬季外套','裤子','连衣裙'],
        list2:['帆布鞋','高帮','低帮','平底','运动'],
        list3:['美容护肤','香氛精油','眼部彩妆','保养','美发'],
        list4:['羽绒服','毛衣','冬季外套','裤子','连衣裙'],
        list5:['羽绒服','毛衣','冬季外套','裤子','连衣裙'],
        list6:['羽绒服','毛衣','冬季外套','裤子','连衣裙'],
        list7:['羽绒服','毛衣','冬季外套','裤子','连衣裙'],
        list8:['羽绒服','毛衣','冬季外套','裤子','连衣裙'],
    },
        leibie(){
            if(item.title='服装'){
                this.list = this.list1
            }else if(item.title="鞋类"){
                this.list = this.list2
            }else if(item.title="彩妆"){
                this.list = this.list3
            }else if(item.title="美食"){
                this.list = this.list4
            }else if(item.title="配饰"){
                this.list = this.list5
            }else if(item.title="百货"){
                this.list = this.list6
            }else if(item.title="数码"){
                this.list = this.list7
            }else{
                this.list = this.list8
            }
        }
    })