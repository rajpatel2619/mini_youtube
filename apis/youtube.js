import axios from 'axios'
const KEY  = 'AIzaSyBB4yQEXNOBCnScb3BrD6vw-OYQ18Fa9Yw';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResult:5,
        key:KEY
    }
});