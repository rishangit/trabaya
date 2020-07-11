import React, { useEffect, useState } from 'react';
import styles from './springDash.module.scss';
import { useDispatch, useSelector } from 'react-redux';

import {
  springBoardListUser,
  springBoardRemoveUser,
} from '../springBoard.action';
import { SpringUserStatus } from '../springBoard.constants';
import classNames from 'classnames';
import SpringItem from './springItem/springItem.component';
import { departments } from '../createUser/createUser.constants';

const CreateUserComponent = props => {
  const dispatch = useDispatch();
  const [userOfDepartments, setUserOfDepartments] = useState({});
  const {
    springReducer: { userList },
    appReducer: { search },
  } = useSelector(state => state);

  useEffect(() => {
    dispatch(springBoardListUser({ query: search }));
  }, [search]);

  useEffect(() => {
    if (userList.length > 0) {
      setUserOfDepartments({});
      userList.forEach(user => {
        setUserOfDepartments(prev => {
          let dep = prev[user.department]
            ? [...prev[user.department], user]
            : [user];
          return {
            ...prev,
            [user.department]: dep,
          };
        });
      });
    }
  }, [userList]);

  useEffect(() => {
    console.log('departments', userOfDepartments);
  }, [userOfDepartments]);

  const handleOnRemove = (e, user) => {
    dispatch(springBoardRemoveUser({ _id: user._id }));
  };

  return (
    <div className={styles.springDash}>
      {Object.keys(userOfDepartments).map(departmentId => (
        <div key={departmentId} className={styles.department}>
          <h5 className={styles.departmentName}>
            {departments.find(dip => dip.id === departmentId)['name']}
          </h5>
          <div className={styles.userContainer}>
            {userOfDepartments[departmentId].map(user => (
              <SpringItem
                key={user._id}
                user={user}
                onRemove={handleOnRemove}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(CreateUserComponent);
