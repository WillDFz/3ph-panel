'use client'
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import SectionItem from './SectionItem';

interface ISectionListProps {
    sections: ISection[];
}

const SectionsList: React.FC<ISectionListProps> = ({ sections }) => {


    const onDragEnd = (result: any) => {
        if (!result.destination) return;

        const items = Array.from(sections);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        console.log(items);
    }

    return (
        <div>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId='sections' direction='vertical'>
                    {(provided) => (
                        <div ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {sections?.map((section, index) => (
                                <SectionItem key={section.id} section={section} index={index} />
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