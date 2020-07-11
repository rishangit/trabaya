import * as Yup from 'yup';

const initModel = {
  firstName: '',
  lastName: '',
  email: '',
  department: '',
  userRoles: [],
};

const validation = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email address'),
  department: Yup.array().required('Department is required'),
  // userRoles:Yup.array().required('Atleast one role is required'),
});

const userRoles = ['PR_ADMIN', 'PR_SYSTEM', 'SYSTEM_ADMIN', 'ORG_SYSTEM'];

const departments = [
  {
    id: 'dep1',
    name: 'Department 1',
  },
  {
    id: 'dep2',
    name: 'Department 2',
  },
];

export { initModel, validation, userRoles, departments };
