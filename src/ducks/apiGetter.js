import axios from 'axios';

const myUrl = 'http://localhost:3005';

export function url() { 
    return myUrl;
} 

export function getDancers() {
    axios.get(`${url}/api/dancers`).then(res => {
        console.log('I\'ve got the dancers.');
        return res.data;
    });
}

export function getSeasonShows() {
    axios.get(`${url}/api/shows`).then(res => {
        // console.log(res.data);
        return res.data;
    });
}

export function getPerformances() {
    axios.get(`${url}/api/performances`).then(res => {
        // console.log(res.data);
        return res.data;
    });
}