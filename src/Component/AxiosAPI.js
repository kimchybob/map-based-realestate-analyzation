import React from 'react';

import axios from 'axios';
// headers = {'header1': value}

export default function AxiosAPI () {
//   state = {
//     persons: []
//   }
  const [state,setState] = React.useState({persons: []});

//   const getfile = () => { 
    axios.get(`http://admin:admin@172.26.131.149:5984/aurin-geo/bne`, {
        headers: {
            'Authorization': 'Basic YWRtaW46YWRtaW4='
        }
    })
    .then(res => {
    console.log(res.data);
    })
//   }


    return (
        <p>
            hello world
        </p>
    )
}