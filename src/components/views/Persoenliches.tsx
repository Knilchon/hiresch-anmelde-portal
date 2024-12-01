import React from "react";
import { Field, FormUnitType, ILogginFormProps } from "../../types/types";
import FormUnit from "../units/FormUnit";

const fields: Field[] = [
    {
        label:'Vorname',
        formDataUnit: 'firstName',
        isRequired: true,
        type: FormUnitType.InputField,
    },
    {
        label:'Familienname',
        formDataUnit: 'lastName',
        isRequired: true,
        type: FormUnitType.InputField,
    },
    {
        label:'Geschlecht',
        formDataUnit: 'gender',
        isRequired: true,
        type: FormUnitType.OptionFields,
        checkOptions: 
        [
            'männlich',
            'weiblich',
            'divers',
        ]
    },
    {
        label:'Geboren am',
        formDataUnit: 'birthDate',
        isRequired: true,
        type: FormUnitType.InputField,
        descriptText: 'Bitte geben Sie Ihr Geburtdatum im Format TT.MM.JJJJ an. Zum Beispiel: 12.03.1991'
    },
    {
        label:'Geburtsort',
        formDataUnit: 'birthPlace',
        isRequired: true,
        type: FormUnitType.InputField,
    },
    {
        label:'Geburtsland',
        formDataUnit: 'birthCountry',
        isRequired: true,
        type: FormUnitType.InputField,
    },
    {
        label:'Staatsangehörigkeit',
        formDataUnit: 'nationality',
        isRequired: true,
        type: FormUnitType.InputField,
    },
    {
        label:'Handynummer',
        formDataUnit: 'smartPhoneNumber',
        isRequired: false,
        type: FormUnitType.InputField,
        descriptText: 'Bitte geben Sie in jedem Fall eine Handy- oder Telefonnummer an.'
    },
    {
        label:'Telefon',
        formDataUnit: 'phoneNumber',
        isRequired: false,
        type: FormUnitType.InputField,
        descriptText: 'Bitte geben Sie in jedem Fall eine Handy- oder Telefonnummer an.'
    },
    {
        label:'Ihre E-Mail',
        formDataUnit: 'emailAddress',
        isRequired: false,
        type: FormUnitType.InputField,
        descriptText: 'Wenn Sie eine eigene Mailadresse angeben, senden wir Ihnen eine Kopie der Anmeldung als E-Mail.'
    },
    {
        label:'Zustimmung zur Verwendung von Fotos',
        formDataUnit: 'photoPermision',
        isRequired: false,
        type: FormUnitType.CheckBox,
        descriptText: 'Ich erteile hiermit der Rahel-Hirsch-Schule die jederzeit widerruflihe Erlaubnis, für schulische Zwecke (z.B. auf der Webseite der Schule, in Schulbroschüren, etc.) Fotos oder Abbildungen, auf denen ich zu erkennen bin, zu verwenden.',
        checkboxDescript: 'Ja, die Rahel-Hirsch-Schule darf Fotos von mir verwenden.'
    },
]

const Persoenliches: React.FC<ILogginFormProps> = (props) => {
    return(<>
        {fields.map((field) => (<FormUnit {...props} {...field} />))}
        </>)
}
export default Persoenliches;