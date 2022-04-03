/**
 * api 统一管理
 */

import request from "@/api/request";
import requestMock from "@/api/request-mock";

// 三级联动接口
export const getCategoryList = () => {
    return request({
        url: '/product/getBaseCategoryList',
        method: 'get'
    })
}

export const getBannerList = () => {
    return requestMock({
        url: '/banner',
        method: 'get'
    })
}

