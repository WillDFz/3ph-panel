import axios, { AxiosInstance } from 'axios';


class SectionsService{
    private axiosInstance: AxiosInstance;

    constructor(){
        this.axiosInstance = axios.create({
            baseURL: 'http://localhost:3001',
            timeout: 1000,
        });
    }

    async updateSectionsOrder (sections: ISection[]) {
        try {
            const response = await this.axiosInstance.put('/sections', sections);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}