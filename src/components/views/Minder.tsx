import React from "react";
import { Field, FormUnitType, ILogginFormProps } from "../../types/types";
import FormUnit from "../units/FormUnit";

const fields: Field[] = [
    {
        label:'Vorname Mutter',
        formDataUnit: 'motherfirstName',
        isRequired: false,
        type: FormUnitType.InputField,
    },
    {
        label:'Nachname Mutter',
        formDataUnit: 'motherlastName',
        isRequired: false,
        type: FormUnitType.InputField,
    },
    {
        label:'Telefon Mutter',
        formDataUnit: 'motherPhoneNumber',
        isRequired: false,
        type: FormUnitType.InputField,
        descriptText: 'Die Kontaktdaten Ihrer Mutter.',
    },
    {
        label:'Vorname Vater',
        formDataUnit: 'fatherfirstName',
        isRequired: false,
        type: FormUnitType.InputField,
    },
    {
        label:'Nachname Vater',
        formDataUnit: 'fatherlastName',
        isRequired: false,
        type: FormUnitType.InputField,
    },
    {
        label:'Telefon Vater',
        formDataUnit: 'fatherPhoneNumber',
        isRequired: false,
        type: FormUnitType.InputField,
        descriptText: 'Die Kontaktdaten Ihres Vaters.',
    },
    {
        label:'Adresse Muter-Vater',
        formDataUnit: 'parentsAddress',
        isRequired: false,
        type: FormUnitType.InputField,
        descriptText: 'Falls Ihre Mutter oder Ihr Vater eine abweichende Adresse hat, diese bitte hier angeben.',
    },
    {
        label:'Vorname Erziehungsberechtigter',
        formDataUnit: 'guardianfirstName',
        isRequired: false,
        type: FormUnitType.InputField,
        descriptText: 'Wenn nicht die Eltern.',
    },
    {
        label:'Nachname Erziehungsberechtigter',
        formDataUnit: 'guardianlastName',
        isRequired: false,
        type: FormUnitType.InputField,
        descriptText: 'Wenn nicht die Eltern.',
    },
    {
        label:'Telefon Erziehungsberechtigter',
        formDataUnit: 'guardianPhoneNumber',
        isRequired: false,
        type: FormUnitType.InputField,
        descriptText: 'Wenn nicht die Eltern.',
    },
]

const Minder: React.FC<ILogginFormProps> = (props) => {
    return(<>
        {fields.map((field) => (<FormUnit {...props} {...field} />))}
    </>)
}
export default Minder;