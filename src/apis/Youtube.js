import Axios from 'axios';

const KEY = "AIzaSyCx_FLGX4R1TRJQim3vEnEFyc9yZqMB8Ek";



export default Axios.create ({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResult: 50,
        key: KEY,
    }
});