import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;


export const getData = async (resource) => {
    try {
        const res = await axios.get(baseUrl + resource)
        
        return res
    } catch(e) {
        console.log(e);
    }
}

export const postData = async (resource, body) => {
    try {
        const res = await axios.post(baseUrl + resource, body)
        
        return res
    } catch(e) {
        console.log(e);
    }
}

export const patchData = async (resource, body) => {
    try {
        const res = await axios.patch(baseUrl + resource, body)
        
        return res
    } catch(e) {
        console.log(e);
    }
}

export const deleteData = async (resource) => {
    try {
        const res = await axios.delete(baseUrl + resource)
        
        return res
    } catch(e) {
        console.log(e);
    }
}

export const getSymbols = async () => {
    const symbols = localStorage.getItem('symbols')

    if(symbols) return JSON.parse(symbols)

    try {
        const res = await axios.get("https://api.apilayer.com/fixer/symbols", {
            headers: {
                apikey: import.meta.env.VITE_API_KEY
            }
        })

        localStorage.setItem('symbols', JSON.stringify(res?.data?.symbols))


        return res?.data?.symbols
    } catch(e) {
        console.log(e);
    }
}


export const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}