import { React, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
  getFilesActionCreator,
  setCurrentDirActionCreator,
  setPopupDisplay,
  uploadFiles,
} from "../../actions/file";
import FileList from './FileList';
import Popup from './Popup'
import './disk.css';

const Disc = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector(state => state.files.currentDir)
  const dirStack = useSelector(state => state.files.dirStack)

  const popupHandler = () => {
    dispatch(setPopupDisplay('flex'))
  }

  const backHandler = () => {
    const backDirId = dirStack.pop()
    dispatch(setCurrentDirActionCreator(backDirId));
  }

  const fileUploadHandler = (e) => {
    const files = [...e.target.files];
    files.forEach(file  => {
        dispatch(uploadFiles({ file: file, dirId: currentDir }))
    })
  }

  useEffect(() => {
    dispatch(getFilesActionCreator(currentDir))
  }, currentDir)

  return (
    <div>
      <div className="disk">
        <div className="disk__btns">
          <button className="disk__back" onClick={() => backHandler()}>Назад</button>
          <button className="disk__create" onClick={() => popupHandler()}>Создать папку</button>
          <div className="disk__upload">
            <label htmlFor="disk__upload-input" className="disk__upload-label">Загрузить файл</label>
            <input multiple={true} onChange={(event)=> {
              fileUploadHandler(event)
            }} type="file" id="disk__upload-input" className="disk__upload-input"/>
          </div>
        </div>
        <FileList/>
      </div>
      <Popup/>
    </div>
  );
};

export default Disc;
