import axios from 'axios'

//类型列表
export const getTypeList = function (params) {
    return axios.get(`/blog/type/select`,{params:params}).then(res=>res.data)
}

//文章列表
export const getArticleList = function (params) {
    return axios.get(`/blog/article/select`, { params: params }).then(res=>res.data); 
}
//文章详情
export const getArticle = function (params) {
    return axios.get(`/blog/article/edit`, { params: params}).then(res=>res.data)
}

//笔记列表
export const getNoteList = function (params) {
    return axios.get(`/blog/note/select`, {params: params }).then(res=>res.data)
}
//笔记详情
export const getNote = function (params) {
    return axios.get(`/blog/note/edit`, { params: params}).then(res=>res.data)
}

//资源列表
export const getSourceList = function (params) {
    return axios.get(`/blog/source/select`, {params: params }).then(res=>res.data)
}

//其他...类型
export const getRestType = function (params) {
    return axios.get(`/blog/rstype/select`,{params:params}).then(res=>res.data)
}
//其他...列表
export const getRestList = function (params) {
    return axios.get(`/blog/rest/select`,{params:params}).then(res=>res.data)
}
//其他...详情
export const getRest = function (params) {
    return axios.get(`/blog/rest/edit`, { params: params}).then(res=>res.data)
}

//标签页列表
export const getTabsList = function (params) {
    return axios.get(`/blog/main/tabs`,{params,params}).then(res=>res.data)
}