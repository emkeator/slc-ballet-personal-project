import axios from 'axios';

let url = 'http://localhost:3000';

export function getDancers() {
    axios.get(`${url}/api/dancers`).then(res => {
        console.log(res.data);
        return res.data;
    });
}

export function getSeasonShows() {
    axios.get(`${url}/api/shows`).then(res => {
        console.log(res.data);
        return res.data;
    });
}