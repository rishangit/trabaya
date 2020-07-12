import React, { useEffect, useState } from 'react';
import styles from './createUser.module.scss';
import {
  TextBox,
  Button,
  BtnType,
  FormElement,
  ChipText,
  MultiSelect,
} from '../../../common/primitives';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import {
  initModel,
  validation,
  userRoles,
  departments,
} from './createUser.constants';
import {
  springBoardAddUser,
} from '../springBoard.action';
import { SpringUserStatus } from '../springBoard.constants';
import classNames from 'classnames';
import SuccessMessage from './successMesasge/successMessage.component';

const CreateUserComponent = props => {
  const dispatch = useDispatch();
  const [model, setModel] = useState(initModel);
  const {
    springReducer: { newUserStatus },
  } = useSelector(state => state);

  const handleOnSubmit = model => {
    model = { ...model, department: model.department[0].id };
    dispatch(springBoardAddUser(model));
  };

  return (
    <>
      {newUserStatus !== SpringUserStatus.USER_SUCCESS ? (
        <div className={styles.createUser}>
          <h2 className={styles.title}>Create user </h2>
          <h5>Add users into the Springboard platform.</h5>
          <div className={styles.container}>
            <Formik
              enableReinitialize={true}
              initialValues={model && model}
              validationSchema={validation && validation}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                handleOnSubmit(values);
              }}
            >
              {({ handleSubmit, ...formikprops }) => (
                <form onSubmit={handleSubmit}>
                  <div className={styles.form}>
                    <div className={styles.formContainer}>
                      <FormElement
                        icon="user"
                        className={classNames(
                          styles.formElement,
                          styles.halfCol,
                        )}
                      >
                        <TextBox
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          className={styles.textBox}
                          formProps={formikprops}
                        />
                      </FormElement>
                      <FormElement
                        icon="user"
                        className={classNames(
                          styles.formElement,
                          styles.halfCol,
                        )}
                      >
                        <TextBox
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          className={styles.textBox}
                          formProps={formikprops}
                        />
                      </FormElement>
                      <FormElement
                        icon="mail"
                        className={classNames(
                          styles.formElement,
                          styles.halfCol,
                        )}
                      >
                        <TextBox
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          className={styles.textBox}
                          formProps={formikprops}
                        />
                      </FormElement>
                      <FormElement
                        icon="team"
                        className={classNames(
                          styles.formElement,
                          styles.halfCol,
                        )}
                      >
                        <MultiSelect
                          name="department"
                          placeholder={'Department'}
                          labelField={'name'}
                          valueField={'id'}
                          searchBy={'name'}
                          options={departments}
                          multi={null}
                          formProps={formikprops}
                        />
                      </FormElement>
                      <div className={styles.userRoleWrapper}>
                        <label>User Role</label>
                        <FormElement
                          icon="user"
                          className={classNames(styles.formElementUserRole)}
                        >
                          <ChipText
                            type="text"
                            name="userRoles"
                            placeholder="User Roles"
                            className={styles.textBox}
                            formProps={formikprops}
                            suggestions={userRoles}
                          />
                        </FormElement>
                      </div>
                    </div>
                    <div className={styles.btnWrapper}>
                      <Button
                        className={styles.loginButton}
                        type={'submit'}
                        btn={BtnType.REGULAR}
                      >
                        Create
                      </Button>
                    </div>
                    {newUserStatus === SpringUserStatus.ERROR && (
                      <div>Invalid login</div>
                    )}
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      ) : (
        <SuccessMessage />
      )}
    </>
  );
};

export default React.memo(CreateUserComponent);
