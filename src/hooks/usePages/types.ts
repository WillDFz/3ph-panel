interface IPage {
    id: string;
    title: string;
    subtitle: string;
    link: string;
    sections: ISection[];
}

interface ISection {
    id?: string;
    pageId: string;
    title?: string;
    description?: string;
    primary_button?: string;
    side_image?: string;
}