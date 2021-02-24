import { call } from 'redux-saga/effects';
import axios from "axios";


export function* getFiles(payload) {
  return yield call(axios.get, payload.url, {headers: {
      Authorization:`Bearer ${localStorage.getItem('token')}`
    }});
}

