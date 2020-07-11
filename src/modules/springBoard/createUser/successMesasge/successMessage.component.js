import React from 'react';
import styles from './successMessage.module.scss';
import { SpringUserStatus } from '../../springBoard.constants';
import { useDispatch } from 'react-redux';
import { springBoardNewUserStatus } from '../../springBoard.action';

const SuccessMessage = props => {
  const dispatch = useDispatch();

  const handleAddAnother = e => {
    dispatch(springBoardNewUserStatus(SpringUserStatus.USER_NEW));
  };

  return (
    <div className={styles.messageWrapper}>
      <h4>User saved succefully </h4>
      <div onClick={handleAddAnother}>Add another</div>
    </div>
  );
};

export default React.memo(SuccessMessage);
