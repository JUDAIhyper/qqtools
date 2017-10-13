// @flow
/* 配置文件 */
const path = node_require('path');
const process = node_require('process');
const execPath = path.dirname(process.execPath).replace(/\\/g, '/');

type inforMap = {
  name: string,
  key: string,
  data: {
    name: string,
    index: string
  }[]
};

type indexeddbMap = {
  name: string,
  version: number,
  objectStore: {
    option: inforMap
  }
};

const option: {
  cache: string,
  indexeddb: indexeddbMap
} = {
  cache: `${ execPath }/.cache`,          // 文件缓存目录
  ptqr: `${ execPath }/.cache/ptqr.png`,  // 二维码
  indexeddb: {                            // 配置indexedDB
    name: 'qqtools',
    version: 1,
    objectStore: {
      option: {
        /*
         name       配置名称
         id         配置的id
         groupName  监听的群名称
         basic      基础配置
         custom     自定义配置
         */
        name: 'option',
        key: 'name',
        data: [
          {
            name: 'id',
            index: 'id'
          }
        ]
      },
    }
  }
};

export default option;