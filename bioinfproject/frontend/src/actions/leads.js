import axios from 'axios';

import { GET_LEADS } from './types';

//GET LEADS
export const getLeads = () => dispatch => {
    axios
        .get('/api/bioinfapp/') //request to our backend
        .then(res => {
            dispatch({
                type: GET_LEADS,
                payload: res.data,
            });
        })
        .catch(err => console.log(err));

};
//we are making an asynchronous request with axios