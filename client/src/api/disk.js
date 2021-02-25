import { call } from 'redux-saga/effects';
import axios from "axios";


export function* getFiles(payload) {
  return yield call(axios.get, payload.url, {headers: {
      Authorization:`Bearer ${localStorage.getItem('token')}`
    }});
}

export function* createFile(payload) {
  return yield call(axios.post, 'http://localhost:5000/api/files',
    payload,
    {headers: {
        Authorization:`Bearer ${localStorage.getItem('token')}`
      }}
  );
}

export function* uploadFile(formData) {
  return yield call(axios.post, 'http://localhost:5000/api/files/upload',
    formData,
    {headers: {
        Authorization:`Bearer ${localStorage.getItem('token')}`
      },
      onUploadProgress: progressEvent => {
        const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
        console.log('total', totalLength)
        if (totalLength) {
          let progress = Math.round((progressEvent.loaded * 100) / totalLength)
          console.log(progress)
        }
      }
    },
  );
}



