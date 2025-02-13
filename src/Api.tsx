import axios from "axios";
import Form, { Weekday } from "./types/types";

export class Api {
    private static instance: Api;
    private domain: string

    private constructor() {
        this.domain = "http://localhost:8080/"
    }

    private initHeaders() {
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'; // Allow all origins
        axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'; // Allowed methods
        axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'; // Allowed headers
    }

    public static getInstance(): Api {
        if (!Api.instance) {
            Api.instance = new Api();
        }
        return Api.instance;
    }

    public async submitStudentForm (form: Form) {
        const url = `${this.domain}student/submit`
        this.initHeaders()

        const path = await this.submitFile(form.apprenticeshipContract)
        form.apprenticeshipContract = path

        axios.post(url,form)
    }

    public getStudentById (id: number): void {
        this.initHeaders()
        const url = `${this.domain}student/${id}`
        axios.get(url)
    }

    public getAllNewStudents (): void {
        this.initHeaders()
        const url = `${this.domain}student/new`
        axios.get(url)
    }

    public async getWeekendCombos () {
        this.initHeaders()
        const url = `${this.domain}weekday-combo/active-weekdaycombos`
        const response = await axios.get(url)
        const weekdays: Weekday[] = response.data.map((element: any) => element?.weekdayCombo)
        return weekdays
    }

    private async submitFile (file?: File | string) {
        if(!(file instanceof File)){
            return ''
        }
        axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type, multipart/form-data'; // Allowed headers

        const formData = new FormData();
        formData.append('file', file);

        const url = `${this.domain}files/upload`
        const response = await axios.post(url,formData)
        
        const path: string = response.data?.filePath
        return path
    }
}
