import React, { useEffect } from "react";
import { Field, FormUnitType, ILogginFormProps } from "../../types/types";
import FormUnit from "../units/FormUnit";

const fields: Field[] = [
    {
        label:'Postleitzahl',
        formDataUnit: 'postalCode',
        isRequired: true,
        type: FormUnitType.InputField,
    },
    {
        label:'Wohnort',
        formDataUnit: 'place',
        isRequired: true,
        type: FormUnitType.InputField,
    },
    {
        label:'Straße',
        formDataUnit: 'street',
        isRequired: true,
        type: FormUnitType.InputField,
    },
    {
        label:'Hausnummer',
        formDataUnit: 'houseNumber',
        isRequired: true,
        type: FormUnitType.InputField,
    },
    {
        label:'Ich wohne bei',
        formDataUnit: 'addressExtension',
        isRequired: false,
        type: FormUnitType.InputField,
        descriptText: 'Falls Ihr Nachname nicht "am Klingelschild steht", geben Sie bitte den Namen des Wohnungseigentümers an.',
    },
    {
        label:'Wer soll im Notfall verständigt Werden?',
        formDataUnit: 'emergancyContact',
        isRequired: false,
        type: FormUnitType.InputField,
    },
    {
        label:'Telefon von Notfallkontakt',
        formDataUnit: 'emergancyContactNumber',
        isRequired: false,
        type: FormUnitType.InputField,
    },
]

const Wohnort: React.FC<ILogginFormProps> = (props) => {

    const emptyRequiredFields: Field[] = fields
    .filter((field) => field.isRequired && 
    (props.form[field.formDataUnit] === '' && field.type === FormUnitType.InputField ||
    props.form[field.formDataUnit] === false && field.type === FormUnitType.CheckBox ||
    props.form[field.formDataUnit] === undefined && field.type === FormUnitType.OptionFields)
    )

    useEffect(()=>{
        props.setAreRequiredChecked(emptyRequiredFields.length === 0)
    },[emptyRequiredFields])
    
    return(<>
        {fields.map((field) => (<FormUnit key={field.formDataUnit} {...props} {...field} />))}
    </>)
}
export default Wohnort;