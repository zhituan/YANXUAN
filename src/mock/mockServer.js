/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './homeData.json'

Mock.mock('/home_tagList',{code:0, data:data.tagList})
Mock.mock('/home_newItemList',{code:0, data:data.newItemList})
Mock.mock('/home_popularItemList',{code:0, data:data.popularItemList})
