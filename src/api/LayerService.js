import axios from 'axios';

export default {
    fetchLayer: () => {
        return axios.get('data/data.json');
    }
}