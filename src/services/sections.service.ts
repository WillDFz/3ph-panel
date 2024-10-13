import axios, { AxiosInstance } from 'axios';

class SectionsService {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'http://localhost:3001',
            timeout: 1000,
        });
    }

    async getSections(pageId: string) {
        try {
            const response = await this.axiosInstance.get(`/sections?pageId=${pageId}`);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    async createSection(section: any) {
        try {
            const response = await this.axiosInstance.post('/sections', section);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    async deleteSection(id: string) {
        try {
            const response = await this.axiosInstance.delete(`/sections/${id}`);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}

export default SectionsService;