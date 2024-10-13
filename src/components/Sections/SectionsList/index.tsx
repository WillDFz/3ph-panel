'use client'
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import SectionItem from './SectionItem';
import { useSection } from '@/hooks/useSection';
import { useEffect } from 'react';

interface ISectionListProps {
    pageId: string
    refreshSections: boolean
}

const SectionsList: React.FC<ISectionListProps> = ({ pageId, refreshSections }) => {

    const { sections, getSections, deleteSection } = useSection();

    const loadSections = async () => {
        await getSections(pageId);
    }

    const onDragEnd = (result: any) => {
        if (!result.destination) return;

        // const items = Array.from(sections);
        // const [reorderedItem] = items.splice(result.source.index, 1);
        // items.splice(result.destination.index, 0, reorderedItem);
        // console.log(items);
    }

    const handleDeleteSection = async (id: string) => {
        await deleteSection(id);
        await loadSections();
    }

    useEffect(() => {
        loadSections();
    }, [pageId, refreshSections])

    return (
        <div className='bg-white rounded-lg border'>
            <div className='bg-slate-100 font-bold ps-10 p-3'>
                Name
            </div>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId='sections' direction='vertical'>
                    {(provided) => (
                        <div ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {sections?.map((section, index) => (
                                <SectionItem key={section.id} section={section} index={index} handleDeleteSection={handleDeleteSection} />
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}

export default SectionsList