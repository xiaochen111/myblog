import { post } from '../js/axios'

// list
export function list(){
    return post('/blog/list')
}
export function getMd(params = {}){
    return post('/blog/md',params)
}
export function getDbArt(){
    return post('/blog/dbArt')
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