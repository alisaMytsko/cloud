import React from 'react';
import './disk.css'
import dirLogo from '../../assets/img/dir.svg'
import fileLogo from '../../assets/img/file.svg'
import {useDispatch, useSelector} from 'react-redux';
import { setCurrentDirActionCreator, pushToStack } from '../../actions/file'

const File = ({file}) => {
  const dispatch = useDispatch();
  const currentDir = useSelector(state => state.files.currentDir)

  const openDirHandler = () => {
    dispatch(pushToStack(currentDir));
    dispatch(setCurrentDirActionCreator(file._id))
  }

  return (
    <div className='file' onClick={file.type === 'dir' ? () => openDirHandler() : ''}>
      <img src={file.type === 'dir' ? dirLogo : fileLogo} alt="" className="file__img"/>
      <div className="file__name">{file.name}</div>
      <div className="file__date">{file.date.slice(0,10)}</div>
      <div className="file__size">{file.size}</div>
    </div>
  );
};

export default File;
