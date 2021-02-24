import { call, takeEvery, put } from 'redux-saga/effects';
import { actions, setFilesActionCreator } from '../actions/file'
import {toastr} from 'react-redux-toastr'
import { getFiles } from '../api/disk';


export function* getFilesSaga({payload }) {
  try {
    console.log( payload, 'from saga')
    const { data } = yield call(getFiles, { url: `http://localhost:5000/api/files/${payload ? '?parent='+payload : ''}` });
    yield put(setFilesActionCreator(data));
  } catch (e) {
    toastr.error(e.response.data.message);
  }
}


export default [
  takeEvery(actions.GET_FILES, getFilesSaga),

];
