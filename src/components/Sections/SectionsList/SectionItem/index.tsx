import React from 'react'
import { Draggable } from '@hello-pangea/dnd';

interface ISectionItemProps {
    section: ISection;
    index: number;
}


const SectionItem: React.FC<ISectionItemProps> = ({ section, index }) => {
    return (
        <Draggable draggableId={section.id} index={index}>
            {(provided) => (
                <div ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <div className="p-3 bg-white rounded-lg shadow-lg mb-3">
                        <h3 className="text-lg font-bold text-tertiary_brand">{section.title}</h3>
                    </div>
                </div>

            )}
        </Draggable>
    )
}

export default SectionItem