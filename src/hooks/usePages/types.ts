interface IPage {
    id: string;
    title: string;
    subtitle: string;
    link: string;
    sections: ISection[];
}

interface ISection {
    id: string;
    name: string;
    title: string;
    subtitle: string;
    text: string;
    buttonInitialText: string;
    buttonHoverText: string;
    buttonLink: string;
    image: string;
}