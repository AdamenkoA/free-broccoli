import React from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import {change, InjectedFormProps, reduxForm} from "redux-form";
import {CurrentDate} from "../config/constants";
import validate from "./validate";
import {connect} from "react-redux";
import {PersonalDetailForm} from "./PersonalDetailForm";
import {Button, Card} from "reactstrap";
import {FaChevronLeft, FaRegSave, FaSpinner} from "react-icons/fa";
import {AddUserParams} from "./AddUser";

const products: any = [];

const columns = [{
    dataField: 'id',
    text: 'Product ID'
}, {
    dataField: 'name',
    text: 'Product Name'
}, {
    dataField: 'price',
    text: 'Product Price'
}];

interface Props {
    previousPage: any;
    isLoading: boolean;
}

export const UserInfoTable: React.FC<Props & InjectedFormProps<{}, Props>> = (props: any) => {
    const {isLoading, handleSubmit, previousPage, pristine, submitting} = props;

    const handleChange = (event: any) => {
        const birthYear = event.target.value.slice(0, 4);
        const currentYear: any = CurrentDate.slice(0, 4);
        const userAge = currentYear - birthYear;
        props.dispatch(change('user', 'userAge', userAge));
    }
    return (
        <div>

            <BootstrapTable keyField='id' data={products} columns={columns}/>
            <div style={{paddingBottom: 30}}>
                <Button
                    color="success"
                    onClick={previousPage}
                    disabled={isLoading}
                    style={{marginLeft: '20px', float: "left"}}
                >
                    <FaChevronLeft className="button-padding" size={18}/>
                    &nbsp; Add More
                </Button>
                <Button
                    color="success"
                    isLoading={isLoading}
                    type="submit"
                    style={{marginRight: '20px', float: "right"}}
                    disabled={pristine || submitting}
                >
                    {isLoading && <span>Saving</span>} &nbsp;
                    {isLoading && <FaSpinner className="icon-spin"/>}
                    {!isLoading && <span>Save</span>}
                    {!isLoading && <FaRegSave className="button-padding" size={18}/>}
                </Button>
            </div>
        </div>
    );
}

const form = reduxForm<{}, Props>({
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: false,
    form: 'user',
    validate,
})(UserInfoTable);

export default connect(null)(form);
