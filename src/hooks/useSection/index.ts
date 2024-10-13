import SectionsService from "@/services/sections.service"
import { toast } from "react-toastify";
import { useState } from "react";

export const useSection = () => {
    const sectionsService = new SectionsService();

    const [sections, setSections] = useState<ISection[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const getSections = async (pageId: string) => {
        setLoading(true);
        try {
            const sections = await sectionsService.getSections(pageId);
            setSections(sections);
            return sections;
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    const createSection = async (section: ISection) => {
        setLoading(true);
        try {
            await sectionsService.createSection(section);
            await getSections(section.pageId);
            toast.success('Section created successfully');
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }


    const deleteSection = async (id: string) => {
        setLoading(true);
        try {
            await sectionsService.deleteSection(id);
            toast.success('Section deleted successfully');
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return { createSection, getSections, sections, loading, deleteSection };
}