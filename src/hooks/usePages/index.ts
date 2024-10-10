import PagesService from "@/services/pages.service"
import { useState } from "react";

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

    
    return { getPages, pages, loading };
}
