import axios from 'axios'

export function getData (params) {
    console.log(params)
    return axios({
        url: '/mock/data.json',
        params: params
    })
}

export  function updateData(params){
    //  setTimeout(()=>{
        return axios({
            url: '/mock/form.json',
            data: params,
        })
    // },1000)
    
}