import React, { useState, useEffect } from 'react';
import Modal from 'react-awesome-modal';
import { useSelector, useDispatch } from 'react-redux';
import { appModelSettingSet } from '../app.action';
import styles from './modal.module.scss';

const ModalComponent = (props) => {
  const dispatch = useDispatch();
  const {
    appReducer:{modalSetting},
  } = useSelector((state) => state);
  const [show, setShow] = useState(false);

  const handleCloseClick = (e) => {
    dispatch(appModelSettingSet({ ...modalSetting, show: false }));
  };

  useEffect(() => {
    setShow(modalSetting.show);
  }, [modalSetting]);


  const handleButtonClick = (key, btnObj) =>{
      if(btnObj.click){
        dispatch(appModelSettingSet({ ...modalSetting, show: false }));
        btnObj.click++  
      }else{
        handleCloseClick()
      }
  }
  return (
    <Modal
      visible={show}
      width={modalSetting.width}
      height={modalSetting.height}
      effect='fadeInUp'
      onClickAway={() => handleCloseClick()}
    >
      <div className={styles.modalWrp}>

          <h4 className={styles.modalTitle}>{modalSetting.title}</h4>
          {modalSetting.component}
      
      </div>
    </Modal>
  );
};

export default ModalComponent;
