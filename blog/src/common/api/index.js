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