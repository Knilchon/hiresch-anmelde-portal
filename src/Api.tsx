import axios from "axios";
import Form from "./types/types";

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'; // Allow all origins
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'; // Allowed methods
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'; // Allowed headers

export class Api {
    private static instance: Api;
    private domain: string

    private constructor() {
        this.domain = "http://localhost:8080/"
    }

    public static getInstance(): Api {
        if (!Api.instance) {
            Api.instance = new Api();
        }
        return Api.instance;
    }

    public submitStudentForm (form: Form): void {
        const url = `${this.domain}student/submit`
        axios.post(url,form)
    }

    public getStudentById (id: number): void {
        const url = `${this.domain}student/${id}`
        axios.get(url)
    }

    public getAllNewStudents (): void {
        const url = `${this.domain}student/new`
        axios.get(url)
    }

    public async getWeekendCombos () {
        const url = `${this.domain}weekday-combo/active-weekdaycombos`
        const response = await axios.get(url)
        console.log(response.data)
        return response.data
    }
}
