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
    smartphoneNumber: string,
    phoneNumber: string,
    emailAddress: string,

    photoPermission: boolean,
    postalCode: string,
    place: string,
    street: string,
    houseNumber: string,
    addressExtension: string,

    emergencyContact: string,
    emergencyContactNumber: string,

    motherFirstName: string,
    motherLastName: string,
    motherPhoneNumber: string,

    fatherFirstName: string,
    fatherLastName: string,
    fatherPhoneNumber: string,

    parentsAddress: string,

    guardianFirstName: string,
    guardianLastName: string,
    guardianPhoneNumber: string,

    apprenticeship?: Apprenticship
    firmName: string,
    firmStreet: string,
    firmHouseNumber: string,
    firmContact: string,
    firmPhoneNumber: string,
    firmFax: string,
    firmEmailAddress: string,

    schoolDaysFirst?: Weekday,
    schoolDaysSecond?: Weekday,
    educationLevel?: EducationLevel,
    lastSchool: string,
    finishedCourse?: Course,
    graduationYear: string,
    
    workEducation: string,
    schoolRelation?: Relation,
    apprenticeshipContract?: File | string
} 
export default Form;

export type Gender = 'männlich' | 'weiblich' | 'divers'

export type Weekday = 'Mo/Di' | 'Mo/Mi' | 'Mo/Do' | 'Mo/Fr' | 'Di/Mi' | 'Di/Do' | 'Di/Fr' | 'Mi/Do' | 'Mi/Fr' | 'Do/Fr'

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
    smartphoneNumber: '',
    phoneNumber: '',
    emailAddress: '',
    photoPermission: false,
    postalCode: '',
    place: '',
    street: '',
    houseNumber: '',
    addressExtension: '',
    emergencyContact: '',
    emergencyContactNumber: '',
    motherFirstName: '',
    motherLastName: '',
    motherPhoneNumber: '',
    fatherFirstName: '',
    fatherLastName: '',
    fatherPhoneNumber: '',
    parentsAddress: '',
    guardianFirstName: '',
    guardianLastName: '',
    guardianPhoneNumber: '',
    apprenticeship: undefined,
    firmName: '',
    firmStreet: '',
    firmHouseNumber: '',
    firmContact: '',
    firmPhoneNumber: '',
    firmFax: '',
    firmEmailAddress: '',
    schoolDaysFirst: undefined,
    schoolDaysSecond: undefined,
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