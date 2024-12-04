import React, { useEffect } from "react";
import { Field, FormUnitType, ILogginFormProps } from "../../types/types";
import FormUnit from "../units/FormUnit";

const fields: Field[] = [
    {
        label:'Datenspeicherung',
        formDataUnit: 'dataSaving',
        isRequired: true,
        type: FormUnitType.CheckBox,
        checkboxDescript: <p>Ich nehme die <a href="https://www.rahel-hirsch-schule.de/app/download/10138120750/Datenschutzerkl%C3%A4rung+Online+Anmeldung.pdf?t=1609853075">Datenschutzerklärung</a> zur Kenntnis und willige in die elektronische Datenvera</p>
    },
]

const Datenschutz: React.FC<ILogginFormProps> = (props) => {

    const emptyRequiredFields: Field[] = fields
    .filter((field) => field.isRequired && 
    (props.form[field.formDataUnit] === '' && field.type === FormUnitType.InputField ||
    props.form[field.formDataUnit] === false && field.type === FormUnitType.CheckBox ||
    props.form[field.formDataUnit] === undefined && field.type === FormUnitType.OptionFields))
    
    useEffect(()=>{
        props.setAreRequiredChecked(emptyRequiredFields.length === 0)
    },[emptyRequiredFields])

    return(<>
    {fields.map((field) => (<FormUnit key={field.formDataUnit} {...props} {...field} />))}
    </>)
}
export default Datenschutz;