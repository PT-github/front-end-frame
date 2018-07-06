import request from '@/utils/request'

// 首页接口测试
export function queryPoster() {
	return request({
		url: '/test/test',
		method: 'post'
	})
}