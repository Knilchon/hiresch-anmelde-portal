interface Form {
    dataSaving: boolean,
    firstName: string,
    lastName: string,
    gender?: Gender,
    birthDate: string,
    birthPlace: string,
    birthCountry: string,
    nationality: string,
    nativeLanguageParents: string,
    smartPhoneNumber: string,
    phoneNumber: string,
    emailAddress: string,
    photoPermision: boolean,
    postalCode: string,
    place: string,
    street: string,
    houseNumber: string,
    addressExtension: string,
    emergancyContact: string,
    emergancyContactNumber: string,
    motherfirstName: string,
    motherlastName: string,
    motherPhoneNumber: string,
    fatherfirstName: string,
    fatherlastName: string,
    fatherPhoneNumber: string,
    parentsAddress: string,
    guardianfirstName: string,
    guardianlastName: string,
    guardianPhoneNumber: string,
    apprenticship?: Apprenticship
    firmName: string,
    firmStreet: string,
    firmHouseNumber: string,
    firmContact: string,
    firmPhoneNumber: string,
    firmFax: string,
    firmEmailAddress: string,
    schoolDaysFirst: Weekday[],
    schoolDaysSecond: Weekday[],
    educationLevel?: EducationLevel,
    lastSchool: string,
    graduationYear: string,
    finishedCourse?: Course,
    workEducation: string,
    schoolRelation?: Relation,
    apprenticeshipContract?: File
} 
export default Form;

export type Gender = 'männlich' | 'weiblich' | 'divers'

export type Weekday = 'Montag' | 'Dienstag' | 'Mittwoch' | 'Donnerstag' | 'Freitag'

export type EducationLevel = 'Berufsbildungsreife' | 'Erweiterte Berufsbildungsreife' | 'Mittlerer Schulabschluss' | 'Abitur' | 'Fachabitur' | 'Fachabitur schriftl. teil' | 'Ohne'

export type Course = 'IBA' | 'BQL' | 'BV' | 'Willkommensklasse' | 'Keinen'

export type Relation = 'Ja, ich bin neu an der Rahel-Hirsch-Schule' | 'Ich war bereits Schüler*in der Rahel-Hirsch-Schule' | 'Ich bin aktuell Schüler*in der Rahel-Hirsch-Schule'

export type Apprenticship = 'Zahnmedizinische/r Fachangestellte/r (ZFA)' | 'Medizinische/r Fachangestellte/r (ZFA)'

export const defaultForm: Form = {
    dataSaving: false,
    firstName: '',
    lastName: '',
    gender: undefined, 
    birthDate: '',
    birthPlace: '',
    birthCountry: '',
    nationality: '',
    nativeLanguageParents: '',
    smartPhoneNumber: '',
    phoneNumber: '',
    emailAddress: '',
    photoPermision: false,
    postalCode: '',
    place: '',
    street: '',
    houseNumber: '',
    addressExtension: '',
    emergancyContact: '',
    emergancyContactNumber: '',
    motherfirstName: '',
    motherlastName: '',
    motherPhoneNumber: '',
    fatherfirstName: '',
    fatherlastName: '',
    fatherPhoneNumber: '',
    parentsAddress: '',
    guardianfirstName: '',
    guardianlastName: '',
    guardianPhoneNumber: '',
    apprenticship: undefined,
    firmName: '',
    firmStreet: '',
    firmHouseNumber: '',
    firmContact: '',
    firmPhoneNumber: '',
    firmFax: '',
    firmEmailAddress: '',
    schoolDaysFirst: [],
    schoolDaysSecond: [],
    educationLevel: undefined, 
    lastSchool: '',
    graduationYear: '',
    finishedCourse: undefined, 
    workEducation: '',
    schoolRelation: undefined,
    apprenticeshipContract: undefined
};
  
export enum FormUnitType {
    'CheckBox',
    'InputField',
    'OptionFields',
    'ArraySelect',
    'FileUpload',
}

export interface Field{
    label: string
    formDataUnit: keyof Form
    isRequired: boolean,
    descriptText?: string,
    type: FormUnitType,
    checkOptions?: Enum
    checkboxDescript?: string | JSX.Element,
}

export type Enum = Apprenticship[] | Relation[] | Course[] | EducationLevel[] | Weekday[] | Gender[]