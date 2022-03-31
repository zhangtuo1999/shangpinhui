/**
 * api 统一管理
 */

import request from "@/api/request";

// 三级联动接口
export const getCategoryList = () => {
    return request({
        url: '/product/getBaseCategoryList',
        method: 'get'
    })
}

