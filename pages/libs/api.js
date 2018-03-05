import axios from 'axios';

Object.assign(axios.defaults,{
    // withCredentials:true,
    baseURL: '/'
});

let API = {
    TV_MAZE : 'http://api.tvmaze.com/search/shows?q=batman',
    ADD_TODO: 'addtodo'
};

export const getTVMaze = (params) => {
    return axios.get(API.TV_MAZE, {params: params});
};

export const addTodo = (params) => {
    return axios.get(API.ADD_TODO, {params: params});
};