import shuihu from '../../static/1.jpg'
import yaliguo from '../../static/2.jpg'
import dianfanbao from '../../static/3.jpg'
import diancilu from '../../static/4.jpg'
import weibo from '../../static/5.jpg'
import dianbing from '../../static/6.jpg'
import doujiang from '../../static/7.jpg'
import duoyong from '../../static/8.jpg'


const data = [
  { 'id': 1, 'title': '电水壶', 'price': 50.01, src: shuihu },
  { 'id': 2, 'title': '电压力锅', 'price': 260.99, src: yaliguo },
  { 'id': 3, 'title': '电饭煲', 'price': 200.99, src: dianfanbao },
  { 'id': 4, 'title': '电磁炉', 'price': 300.99, src: diancilu },
  { 'id': 5, 'title': '微波炉', 'price': 400.99, src: weibo },
  { 'id': 6, 'title': '电饼铛', 'price': 200.99, src: dianbing },
  { 'id': 7, 'title': '豆浆机', 'price': 199.99, src: doujiang },
  { 'id': 8, 'title': '多用途锅', 'price': 510.99, src: duoyong}
]

export default {
  getGoodsList (callback) {
    setTimeout(() => callback(data), 100)
  }
}
