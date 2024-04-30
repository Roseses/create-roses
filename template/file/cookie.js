import cookie from 'xe-utils/cookie'

/**
 * version: ^3.5.25
 * 文档: https://vxetable.cn/xe-utils/#/?to=cookie
 * git: https://www.npmjs.com/package/xe-utils?activeTab=readme
 */

export default cookie
// 获取所有
// cookie()
// 根据name获取
// cookie('name')
// 删除
// cookie('name', null, {expires: -1})
// cookie('name', null, {expires: -1, path: '/'})
// 添加/修改
// cookie('name', 'value')
// 指定 10 秒后过期
// cookie('name', 'value', {expires: '10s'})
// 指定 1 分钟后过期
// cookie('name', 'value', {expires: '1m'})
// 指定 1 小时后过期
// cookie('name', 'value', {expires: '1H'})
// 指定 1 天后过期
// cookie('name', 'value', {expires: '1d'})
// 指定 1 月后过期
// cookie('name', 'value', {expires: '1M'})
// 指定 1 年后过期
// cookie('name', 'value', {expires: '1y'})
// 指定时间戳后过期
// cookie('name', 'value', {expires: 1525541938031})
// 指定日期过期
// cookie('name', 'value', {expires: new Date()})
// 指定 UTCString 格式日期
// cookie('name', 'value', {expires: new Date().toUTCString()})
// 指定数值 1 天后过期
// cookie('name', 'value', {expires: 1})
// 完整设置domain/path/secure/expires
// cookie('name', 'value', {domain: 'xxx.com', path: '/', expires: 7, secure: true})

// 批量删除
// cookie([{name: 'name', expires: -1}])
// 批量添加/修改
// cookie([{name: 'name', value: 'value'}])
// 批量添加并设置domain/path/secure/expires 7天后过期
// cookie([{name: 'name', value: 'value', domain: 'xxx.com', path: '/', expires: 7, secure: true}])

// 判断name是否存在
// cookie.has(name)
// 添加
// cookie.set(name, value, option)
// cookie.set(name, value, option).set(name, value, option)
// 根据name获取
// cookie.get(name)
// 删除
// cookie.remove(name)
// cookie.remove(name, {path: '/'})
