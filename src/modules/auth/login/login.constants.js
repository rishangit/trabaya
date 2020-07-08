import * as Yup from 'yup'

const initModel = {
    username:'',
    password:'',
}

const validation = Yup.object().shape({
    username:Yup.string().required('Email is required').email('Invalid email address'),
    password:Yup.string().required('Password is required'),
})

export {initModel, validation}