import * as yup from 'yup';
export const signUpSchema = yup.object({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    email: yup.string().email('Invalid email format')
    .required('Email is required'),
    password: yup.string().required('Password is required'),
 
});

