import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          "Client-ID 5e7311c196ca4baea9a2fa2ce1f7a6a6daf88237fbd42509d43c606fb81bc94e"
      }
    
});



