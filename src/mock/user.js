import Mock from 'mockjs';

var template = {
  'string|1-10': '★',
  'number|+1': 100,
  'boolean|1': true,
  'object|2-4': {
    '110000': '北京市',
    '120000': '天津市',
    '130000': '河北省',
    '140000': '山西省'
  },
  'array|1': ['AMD', 'CMD', 'KMD', 'UMD'],
}

let Users = [];

for (var i = 0; i < 20; i++) {  
  Users.push(Mock.mock('api',template))  
}  

// let Users = Mock.mock('api.com',template);
export default Users;