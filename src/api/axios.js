import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://api.themoviedb.org/3',
  params: {
    api_key: '04a2b6c431aa198aa0cd8fa4b1fd6745',
    language: 'ko-KR'
  }
})

export default instance;