import React from "react";
import { Field, FormUnitType, ILogginFormProps } from "../../types/types";
import FormUnit from "../units/FormUnit";

const fields: Field[] = [
    {
        label:'Datenspeicherung',
        formDataUnit: 'dataSaving',
        isRequired: true,
        type: FormUnitType.CheckBox,
        checkboxDescript: 'Ich nehme die Datenschutzerklärung zur Kenntnis und willige in die elektronische Datenvera'
    },
]

const Datenschutz: React.FC<ILogginFormProps> = (props) => {
    return(<>
    {fields.map((field) => (<FormUnit {...props} {...field} />))}
    </>)
}
export default Datenschutz;