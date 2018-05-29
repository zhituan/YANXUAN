/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'
// const BASE_URL = 'http://localhost:4000'
export const reqTagList = () => ajax('/home_tagList')
//新品首发
export const reqNewItemList = () => ajax('/home_newItemList')
//人气推荐
export const reqPopularItemList = () => ajax('/home_popularItemList')
