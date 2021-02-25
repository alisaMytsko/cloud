import { React, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getFilesActionCreator, setCurrentDirActionCreator, setPopupDisplay} from "../../actions/file";
import FileList from './FileList';
import Popup from './Popup'
import './disk.css';

const Disc = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector(state => state.files.currentDir)
  const dirStack = useSelector(state => state.files.dirStack)

  useEffect(() => {
    dispatch(getFilesActionCreator(currentDir))
  }, currentDir)

  const popupHandler = () => {
    dispatch(setPopupDisplay('flex'))
  }

  const backHandler = () => {
    console.log('sdfljgldkjfgdflkj')
    const backDirId = dirStack.pop();
    dispatch(setCurrentDirActionCreator(backDirId))
  }

  return (
    <div>
      <div className="disk">
        <div className="disk__btns">
          <button className="disk__back" onClick={() => backHandler()}>Назад</button>
          <button className="disk__create" onClick={() => popupHandler()}>Создать папку</button>
        </div>
        <FileList/>
      </div>
      <Popup/>
    </div>
  );
};

export default Disc;
