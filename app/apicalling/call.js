import axios from "axios";



export const searchdata = async(data)=> {

    const options = {
      method: 'GET',
      url: 'https://youtube-search-and-download.p.rapidapi.com/search',
      params: {
        query: data,
      },
      headers: {
        'X-RapidAPI-Key': '2bce29759dmshd3de81d7dcccb57p16a50bjsn256ae22c4f85',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
      }
    };
    
    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data
    } catch (error) {
        console.error(error);
        return response.data
    }
}


export const download = async(data)=> {

  const options = {
    method: 'GET',
    url: 'https://ytstream-download-youtube-videos.p.rapidapi.com/dl',
    params: {id: data},
    headers: {
      'X-RapidAPI-Key': '2bce29759dmshd3de81d7dcccb57p16a50bjsn256ae22c4f85',
      'X-RapidAPI-Host': 'ytstream-download-youtube-videos.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data
  } catch (error) {
    console.error(error);
    return response.data
  }
}




export const related = async(id)=> {
  const options = {
    method: 'GET',
    url: 'https://youtube-search-and-download.p.rapidapi.com/video/related',
    params: {
      id: id,
    },
    headers: {
      'X-RapidAPI-Key': '2bce29759dmshd3de81d7dcccb57p16a50bjsn256ae22c4f85',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data
  } catch (error) {
    console.error(error);
    return response.data
  }
}