import axios from 'axios'

let alac = axios.create({
    baseURL: 'http://127.0.0.1:8000/local_api/',
    headers: {
        'X-CSRF-TOKEN': window.Laravel.csrfToken,
        'X-Requested-With': 'XMLHttpRequest',
    }
})

alac.resultData = (res) => {
    return res.data
}

export default alac