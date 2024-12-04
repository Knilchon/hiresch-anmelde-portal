import React from "react";
import { Field, FormUnitType } from "./types"

export interface ViewInterface{
    preText?: JSX.Element,
    formSection: string,
    legendTitle: string,
    underLabel: string,
    fields: Field[]
}

const formConstruct: ViewInterface[] = [
    {
        formSection: 'Datenschutz',
        legendTitle: 'Datenschutz',
        underLabel: 'Datenschutz',
        fields: [
            {
                label:'Datenspeicherung',
                formDataUnit: 'dataSaving',
                isRequired: true,
                type: FormUnitType.CheckBox,
                checkboxDescript: <p>Ich nehme die <a href="https://www.rahel-hirsch-schule.de/app/download/10138120750/Datenschutzerkl%C3%A4rung+Online+Anmeldung.pdf?t=1609853075">Datenschutzerklärung</a> zur Kenntnis und willige in die elektronische Datenvera</p>
            },
        ]
    },
    {
        formSection: 'Persönliches',
        legendTitle: 'Persönliches',
        underLabel: 'Persönliche Daten',
        fields: [
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
    },
    {
        formSection: 'Wohnort',
        legendTitle: 'Wohnort',
        underLabel: 'Ihre Adresse',
        fields: [
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
    },
    {
        formSection: 'Unter 18?',
        legendTitle: 'Unter 18?',
        underLabel: 'Nur ausfüllen, wenn Sie unter 18 Jahre sind!',
        fields: [
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
    },
    {
        formSection: 'Ausbildung',
        legendTitle: 'Ausbildung',
        underLabel: 'Angaben zu ihrem Ausbildungsbetrieb',
        fields: [
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
    },
    {
        formSection: 'Schulbesuch',
        legendTitle: 'Schulbesuch',
        underLabel: 'Bisherige Schulbesuche',
        fields: [
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
    },
    {
        formSection: 'Geschafft!',
        legendTitle: 'Bestätigung',
        underLabel: '',
        fields: []
    },
]
export default formConstruct;