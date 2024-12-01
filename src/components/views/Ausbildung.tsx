import React from "react";
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
        type: FormUnitType.OptionFields,
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
        type: FormUnitType.OptionFields,
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
    return(<>
        {fields.map((field) => (<FormUnit {...props} {...field} />))}
    </>)
}
export default Ausbildung;