import Vue from 'vue'
import Router from 'vue-router'
console.log(process.env.NODE_ENV)
const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router)

export default new Router({
    routes: [
	    {
		    path: '',
		    component: _import('home/home'),
		    name: 'Home',
		    meta: {title: '首页', keepAlive: true}
	    },
	    {
		    path: '',
		    component: _import('test/test'),
		    name: 'test',
		    meta: {title: '测试', keepAlive: true}
	    }
    ]
})
