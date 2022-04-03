import Mock from 'mockjs'

import banner from './Home/banner.json'
import floor from './Home/floor.json'

Mock.mock('/mock/banner', {code: 200, data: banner})
Mock.mock('/mock/floor', {code: 200, data: floor})
