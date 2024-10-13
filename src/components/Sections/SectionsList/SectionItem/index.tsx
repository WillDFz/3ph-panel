import React from 'react'
import { Draggable } from '@hello-pangea/dnd';
import { EditOutlined, DeleteOutline, DragHandle } from '@mui/icons-material';
import { useSection } from '@/hooks/useSection';

interface ISectionItemProps {
    section: ISection;
    index: number;
    handleDeleteSection: (id: string) => void;
}


const SectionItem: React.FC<ISectionItemProps> = ({ section, index, handleDeleteSection }) => {

    return (
        <Draggable draggableId={section.id!} index={index}>
            {(provided) => (
                <div ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <div className="flex justify-between items-center border-b p-3">
                        <div className='flex items-center'>
                            <DragHandle />
                            <h3 className="text-lg font-bold text-tertiary_brand ms-3">{section.title}</h3>
                        </div>
                        <div>
                            <button>
                                <EditOutlined />
                            </button>
                            <button
                                onClick={e => handleDeleteSection(section.id!)}
                                className=''>
                                <DeleteOutline />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    )
}

export default SectionItem