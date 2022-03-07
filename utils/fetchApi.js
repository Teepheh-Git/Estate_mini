import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': "e56fffd23fmshd093cdb2590e6c0p12d69ejsn3a2c23e9c946" ,
        },
    });

    return data;
}
