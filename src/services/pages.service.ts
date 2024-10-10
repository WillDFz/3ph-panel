import axios, { AxiosInstance } from 'axios';

class PagesService {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'http://localhost:3001',
            timeout: 1000,
        });
    }

    async getPages() {
        try {
            const response = await this.axiosInstance.get('/pages');
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

}

export default PagesService;