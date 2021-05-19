import axios from 'axios';

const KEY = 'AIzaSyBNsD1AIGk8bb56hggsxNucICtGFDZ75bI';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
