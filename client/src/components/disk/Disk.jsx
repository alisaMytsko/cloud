import { React, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getFilesActionCreator} from "../../actions/file";
import FileList from './FileList';
import './disk.css';

const Disc = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector(state => state.files.currentDir)

  useEffect(() => {
    dispatch(getFilesActionCreator(currentDir))
  }, currentDir)

  return (
    <div>
      <div className="disk">
        <div className="disk__btns">
          <button className="disk__back">Назад</button>
          <button className="disk__create">Создать папку</button>
        </div>
        <FileList/>
      </div>
    </div>
  );
};

export default Disc;
