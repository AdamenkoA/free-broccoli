import React, {useState} from 'react';
import {InjectedFormProps} from 'redux-form';
import {Card} from 'reactstrap';
// @ts-ignore
import Stepper from 'react-stepper-horizontal';

import AccountDetailForm from './AccountDetailForm';
import PersonalDetailForm from './PersonalDetailForm';
import UserInfoTable from "./UserInfoTable";

export const Form: React.FC<InjectedFormProps> = (props: any) => {

    const [page, setPage] = useState(0);
    const steps = [
        {title: 'Personal Details'},
        // {title: 'Account Detail'},
        {title: 'User Info'}];

    const {onSubmit, isLoading} = props;

    const nextPage = () => {
        setPage(page + 1);
    };

    const previousPage = () => {
        setPage(page - 1);
    };

    return (
        <Card>
            <Stepper steps={steps} activeStep={page}/>
            {page === 0 && <PersonalDetailForm onSubmit={nextPage}/>}
           {/* {page === 1 && (
                <AccountDetailForm isLoading={isLoading} previousPage={previousPage} onSubmit={nextPage}/>
            )}*/}
            {page === 1 && <UserInfoTable  isLoading={isLoading} previousPage={previousPage} onSubmit={nextPage}/>}
        </Card>
    );
}

export default Form;
