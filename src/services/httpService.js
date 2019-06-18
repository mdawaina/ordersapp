import axios from 'axios';

//axios.defaults.baseURL = 'https://rallycoding.herokuapp.com/api';
axios.defaults.baseURL = 'http://dawzone.tech/restapi2/index.php';

export default {
    get: axios.get,
    post: axios.post
}