import React, { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Formik } from 'formik';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import styles from './login.module.scss';
import {
  TextBox,
  Button,
  BtnType,
  CheckBox,
  CheckType,
  FormElement,
} from '../../../common/primitives';
import { loginAttempt } from '../auth.action';
import { LoginStatus } from '../auth.constants';
import { initModel, validation } from './login.constants';

const LoginComponent = props => {
  const dispatch = useDispatch();
  const {
    authReducer: { loginStatus },
  } = useSelector(state => state);
  const history = useHistory();

  useEffect(() => {
    if (loginStatus === LoginStatus.LOGIN_SUCCESS) {
      history.push('/');
    }
  }, [loginStatus]);

  const handleOnSubmit = model => {
    dispatch(loginAttempt(model));
  };

  const handleRememberMeClick = e => {
    alert('remember me');
  };

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to spingboard</h1>
        <h5 className={styles.subtitle}>Please log in to continue</h5>
        <Formik
          initialValues={initModel && initModel}
          validationSchema={validation && validation}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            handleOnSubmit(values);
          }}
        >
          {({ handleSubmit, ...formikprops }) => (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formContainer}>
                <FormElement icon="user" className={styles.formElement}>
                  <TextBox
                    type="email"
                    name="username"
                    placeholder="Username"
                    className={styles.textBox}
                    formProps={formikprops}
                  />
                </FormElement>
                <FormElement icon="padlock">
                  <TextBox
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={styles.textBox}
                    formProps={formikprops}
                  />
                </FormElement>
              </div>
              <div className={styles.linksWrapper}>
                <div className={styles.rememberMeWrapper}>
                  <CheckBox
                    label={'Remember me'}
                    checked={false}
                    checkType={CheckType.BLUE}
                    onLabelClick={handleRememberMeClick}
                  />
                </div>
                <Link to={'/forgot-password'}>
                  <div className={classNames('caption', styles.forgetPassword)}>
                    Forgot password?
                  </div>
                </Link>
              </div>
              <div className={styles.btnWrapper}>
                <Button
                  className={styles.loginButton}
                  type={'submit'}
                  btn={BtnType.INVERTED}
                >
                  Login
                </Button>
              </div>
              {loginStatus === LoginStatus.ERROR && <div className={styles.error}>Invalid login</div>}
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default React.memo(LoginComponent);
