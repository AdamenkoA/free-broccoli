import {FormErrors} from 'redux-form';
import {AddUserParams} from './AddUser';

const validate = (values: AddUserParams): FormErrors<AddUserParams> => {
    const errors: FormErrors<AddUserParams> = {};

    if (!values.userName) {
        errors.userName = 'User name required';
    }

    if (!values.userDOB) {
        errors.userDOB = 'DOB required';
    }

    if (!values.userAge) {
        errors.userAge = 'Age required';
    }

    if (!values.userGender) {
        errors.userGender = 'Gender required';
    }

    if (!values.userMobileNumber) {
        errors.userMobileNumber = 'Mobile number required';
    }

    if (!values.userAddress) {
        errors.userAddress = 'Address required';
    }

    if (!values.userAccountNumber) {
        errors.userAccountNumber = 'Account number required';
    }

    if (!values.userBankName) {
        errors.userBankName = 'Bank name required';
    }

    if (!values.userBankAddress) {
        errors.userBankAddress = 'Bank address required';
    }

    return errors;
};
export default validate;
