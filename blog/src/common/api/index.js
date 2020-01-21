import { post } from '../js/axios'

// list
export function list(){
    return post('/blog/list')
}
export function getMd(params = {}){
    return post('/blog/md',params)
}
export function getDbArt(params = {}){
    return post('/blog/dbArt',params)
}
export function writeArt(params = {}){
    return post('/blog/writeArt',params)
}
export function writeArtcleDb(params = {}){
    return post('/blog/writeArtcleDb',params)
}
export function login(params = {}){
    return post('/blog/login',params)
}
export function getDbDetail(params = {}){
    return post('/blog/getDbDetail',params)
}
export function getUserInfo(params = {}){
    return post('/blog/getUserInfo',params)
}
export function getTypeList(params = {}){
    return post('/blog/getTypeList',params)
}
export function eidtArticle(params = {}){
    return post('/blog/eidtArticle',params)
}
export function visitNum(params = {}){
    return post('/blog/visitNum',params)
}
export function writeComment(params = {}){
    return post('/blog/writeComment',params)
}