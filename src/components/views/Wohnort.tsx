import React from "react";
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
    return(<>
        {fields.map((field) => (<FormUnit {...props} {...field} />))}
    </>)
}
export default Wohnort;