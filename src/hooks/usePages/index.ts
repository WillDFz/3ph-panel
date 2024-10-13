import PagesService from "@/services/pages.service"
import { useState } from "react";
import { toast } from "react-toastify";

export const usePages = () => {
    const pagesService = new PagesService();

    const [pages, setPages] = useState<IPage[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const getPages = async () => {
        setLoading(true);
        try {
            const pages = await pagesService.getPages();
            setPages(pages);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const createPage = async (page: any) => {
        setLoading(true);
        try {
            await pagesService.createPage(page);
            toast.success('Page created successfully');
            getPages();
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    const deletePage = async (id: string) => {
        setLoading(true);
        try {
            await pagesService.deletePage(id);
            toast.success('Page deleted successfully');
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }


    return { getPages, pages, loading, createPage, deletePage };
}
