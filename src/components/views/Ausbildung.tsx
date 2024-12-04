import React, { useEffect } from "react";
import { Field, FormUnitType, ILogginFormProps } from "../../types/types";
import FormUnit from "../units/FormUnit";

const fields: Field[] = [
    {
        label:'Ich melde mich an zur Aubildung als',
        formDataUnit: 'apprenticship',
        isRequired: true,
        type: FormUnitType.OptionFields,
        checkOptions: 
        [
            'Zahnmedizinische/r Fachangestellte/r (ZFA)',
            'Medizinische/r Fachangestellte/r (ZFA)',
        ]
    },
    {
        label:'Name Ausbildungsbetrieb',
        formDataUnit: 'firmName',
        isRequired: true,
        type: FormUnitType.InputField,
    },
    {
        label:'Straße Ausbildungsbetrieb',
        formDataUnit: 'firmStreet',
        isRequired: true,
        type: FormUnitType.InputField,
    },
    {
        label:'Hausnummer Ausbildungsbetrieb',
        formDataUnit: 'firmHouseNumber',
        isRequired: true,
        type: FormUnitType.InputField,
    },
    {
        label:'Ansprechpartner im Ausbildungsbetrieb',
        formDataUnit: 'firmContact',
        isRequired: false,
        type: FormUnitType.InputField,
    },
    {
        label:'Telefon Ausbildungsbetrieb',
        formDataUnit: 'firmPhoneNumber',
        isRequired: true,
        type: FormUnitType.InputField,
    },
    {
        label:'Fax Ausbildungsbetrieb',
        formDataUnit: 'firmFax',
        isRequired: false,
        type: FormUnitType.InputField,
    },
    {
        label:'E-Mail Ausbildungsbetrieb',
        formDataUnit: 'firmEmailAddress',
        isRequired: false,
        type: FormUnitType.InputField,
    },
    {
        label:'Schultagewunsch 1.Wahl',
        formDataUnit: 'schoolDaysFirst',
        isRequired: false,
        type: FormUnitType.ArraySelect,
        descriptText: 'Wählen Sie bitte ZWEI TAGE aus, an denen die Praxis Sie für die Berufsschule bevorzugt freistellen möchte.',
        checkOptions: [
            'Montag',
            'Dienstag',
            'Mittwoch',
            'Donnerstag',
            'Freitag'
        ]
    },
    {
        label:'Schultagewunsch 2.Wahl',
        formDataUnit: 'schoolDaysSecond',
        isRequired: false,
        type: FormUnitType.ArraySelect,
        descriptText: 'Wählen Sie bitte ZWEI TAGE aus, an denen die Praxis Sie für die Berufsschule bevorzugt freistellen möchte.',
        checkOptions: [
            'Montag',
            'Dienstag',
            'Mittwoch',
            'Donnerstag',
            'Freitag'
        ]
    },
]

const Ausbildung: React.FC<ILogginFormProps> = (props) => {

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
export default Ausbildung;