/*
 * @Author: KokoTa
 * @Date: 2020-06-08 12:04:35
 * @LastEditTime: 2020-06-08 17:25:42
 * @Description: 测试服务
 */
const http = require('http')
const redis = require('redis')


const server = http.createServer((req, res) => {
  const client = redis.createClient({
    host: '10.5.0.3',
    port: 6379
  })
  client.on("error", (err) => console.error(err))
  client.on("connect", () => client.set('key', 'value', redis.print))
  res.end('hello!!!')
})

server.listen(3000, () => console.log('ok'))
