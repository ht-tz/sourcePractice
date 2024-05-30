import axios from 'axios'
import sourceMap from 'source-map-js'
const getSourceMap = async (url) => {
  return await axios.get(url)
}
// // stackFrame.fileName 就是报错的Js代码，需要根据这个Js 获取到对应的source-map
const findCodeBySourceMap = async (stackFrame) => {
  //因为存放的map文件可能在服务器上， 真实环境可能是 url + 存放map文件的服务器地址
  const sourceData = await getSourceMap(stackFrame.fileName + '.map')
  const fileContent = sourceData.data
  const consumer = await new sourceMap.SourceMapConsumer(fileContent)
  // 通过报错位置查找到对应的源文件名称以及报错行数
  const originalPosition = consumer.originalPositionFor({
    line: stackFrame.lineNumber,
    column: stackFrame.columnNumber
  })
  // 那么就可以通过 sourceContentFor 这个方法找到报错的源代码
  const code = consumer.sourceContentFor(originalPosition.source)
  console.log(code, '还原之后的 code')
}
export { findCodeBySourceMap }

// 1. 获取到报错信息
// 2. 获取到报错信息中的 sourceMap 文件
// 3. 通过 sourceMap 文件找到报错的代码
// 4. 打印出报错的代码所在的文件

// 利用到的库
// souce-map
// souce-map-js source-map的争强版本
