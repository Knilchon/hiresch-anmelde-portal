import React, { useEffect } from "react";
import Form, { Field, FormUnitType } from "../../types/types";
import FormUnit from "./FormUnit";
import { ViewInterface } from "../../types/views";

interface ILogginFormProps {
    form: Form,
    view: ViewInterface,
    isWarningOn: boolean,
    updateForm: (obj:object) => void,
    setAreRequiredChecked: React.Dispatch<React.SetStateAction<boolean>>
}

const View: React.FC<ILogginFormProps> = (props) => {

    const emptyRequiredFields: Field[] = props.view.fields
    .filter((field) => field.isRequired && 
    ((props.form[field.formDataUnit] === '' && field.type === FormUnitType.InputField) ||
    (props.form[field.formDataUnit] === false && field.type === FormUnitType.CheckBox) ||
    (props.form[field.formDataUnit] === undefined && field.type === FormUnitType.OptionFields)))
    
    useEffect(()=>{
        props.setAreRequiredChecked(emptyRequiredFields.length === 0)
    },[emptyRequiredFields,props])

    return(<>
    {props.view.fields.map((field) => (<FormUnit key={field.formDataUnit} {...props} {...field} />))}
    </>)
}
export default View;