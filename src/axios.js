import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-challenge-6bbca.cloudfunctions.net/api' // THE API (cloud function) URL
    //http://localhost:5001/clone-b36c8/us-central1/api
});

export default instance;


