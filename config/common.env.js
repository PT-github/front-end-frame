var environment = process.argv.slice(2)[0] || 'dev'
console.log('当前接口使用环境：' + environment)
var obj = {
    prod: {
        SERVICE_CONFIG: '"prod"'
    },
    test: {
        SERVICE_CONFIG: '"test"'
    },
    dev: {
        SERVICE_CONFIG: '"dev"'
    }
}
module.exports = obj[environment]