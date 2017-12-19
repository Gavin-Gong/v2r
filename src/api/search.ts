import $http from './_http';
import { IPaging } from 'typings'

export default {
  search: 
    (keyword: string, paging?: IPaging) => $http.get(`/search`, { params: {keyword, ...paging} }),
  searchSuggest: 
    (keyword: string, paging?: IPaging) => $http.get(`/search/suggest`, {params: {keyword, ...paging}}),
  searchMultimatch: 
    (keyword: string, paging?: IPaging) => $http.get(`/search/multimatch`, {params: {keyword, ...paging}}),
  
}