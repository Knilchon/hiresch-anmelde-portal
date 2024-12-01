import React from "react";
import { Field, FormUnitType, ILogginFormProps } from "../../types/types";
import FormUnit from "../units/FormUnit";

const fields: Field[] = [
    {
        label:'Schulabschluss',
        formDataUnit: 'educationLevel',
        isRequired: true,
        type: FormUnitType.OptionFields,
        descriptText: 'Wählen Sie hier nur Ihren zuletzt erreichten Schulabschluss aus. (Bitte nur ein Kreuz setzen!)',
        checkOptions:[
            'Berufsbildungsreife',
            'Erweiterte Berufsbildungsreife',
            'Mittlerer Schulabschluss',
            'Abitur',
            'Fachabitur',
            'Fachabitur schriftl. teil',
            'Ohne'
        ]
    },
    {
        label:'zuletzt besuchte Schule',
        formDataUnit: 'lastSchool',
        isRequired: false,
        type: FormUnitType.InputField,
    },
    {
        label:'Abschluss- / Abgangsjahr',
        formDataUnit: 'graduationYear',
        isRequired: true,
        type: FormUnitType.InputField,
    },
    {
        label:'Abgeschlossener Lehrgang',
        formDataUnit: 'finishedCourse',
        isRequired: false,
        type: FormUnitType.OptionFields,
        checkOptions:[
            'IBA',
            'BQL', 
            'BV',
            'Willkommensklasse',
            'Keinen'
        ]
    },
    {
        label:'Abgeschlossene Ausbildung',
        formDataUnit: 'workEducation',
        isRequired: false,
        type: FormUnitType.InputField,
        descriptText: 'Wenn sie bereits eine Ausbildung abgeschlossen haben, wie lautet Ihre Berufsbezeichnung?',
    },
    {
        label:'Neu an der Rahel-Hirsch-Schule? ',
        formDataUnit: 'schoolRelation',
        isRequired: true,
        type: FormUnitType.OptionFields,
        checkOptions:[
            'Ja, ich bin neu an der Rahel-Hirsch-Schule',
            'Ich war bereits Schüler*in der Rahel-Hirsch-Schule',
            'Ich bin aktuell Schüler*in der Rahel-Hirsch-Schule'
        ]
    },
]

const Schulbesuch: React.FC<ILogginFormProps> = (props) => {
    return(<>
        {fields.map((field) => (<FormUnit {...props} {...field} />))}
    </>)
}
export default Schulbesuch;