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

    async createPage(page: any) {
        try {
            const response = await this.axiosInstance.post('/pages', page);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    async deletePage(id: string) {
        try {
            const response = await this.axiosInstance.delete(`/pages/${id}`);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}

export default PagesService;