/**
 * api 统一管理
 */

import request from "@/api/request";

// 三级联动接口
export const reqCategoryList = () => {
    return request({
        url: '/product/getBaseCategoryList',
        method: 'get'
    })
}

