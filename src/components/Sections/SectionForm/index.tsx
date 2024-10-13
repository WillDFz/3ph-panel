import { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useSection } from '@/hooks/useSection'
import { get } from 'http';

interface SectionFormProps {
    pageId: string,
    type: string,
    close: () => void,
}

const SectionForm: React.FC<SectionFormProps> = ({ type, pageId, close }) => {

    const { createSection, getSections } = useSection();

    const [value, setValue] = useState('');

    const [section, setSection] = useState<ISection>({
        pageId
    })

    const fields = {
        title: type === 'section_001',
        description: type === 'section_001',
        primary_button: type === 'section_001',
        side_image: type === 'section_001',
    }

    const handleCreateSection = async () => {
        await createSection(section);
        close();
    }

    useEffect(() => {
        console.log('section', section)
    }, [section])

    return (
        <div>
            {fields.title &&
                <div className='mb-5'>
                    <label className='mb-2'>Title</label>
                    <input
                        onChange={(e) => setSection({ ...section, title: e.target.value })}
                        type="text" className='w-full border border-gray-300 rounded-lg p-2' />
                </div>
            }
            {fields.description &&
                <div className='mb-5'>
                    <label className='mb-2'>Description</label>
                    <ReactQuill theme="snow" value={section.description}
                        onChange={(value) => setSection({ ...section, description: value })}
                    />
                </div>
            }
            {fields.primary_button &&
                <div className='mb-5'>
                    <label className='mb-2'>Primary Button</label>
                    <input
                        onChange={(e) => setSection({ ...section, primary_button: e.target.value })}
                        type="text" className='w-full border border-gray-300 rounded-lg p-2' />
                </div>
            }
            {fields.side_image &&
                <div className='mb-5'>
                    <label className='mb-2'>Side Image</label>
                    <input
                        onChange={(e) => setSection({ ...section, side_image: e.target.value })}
                        type="file" className='w-full border border-gray-300 rounded-lg p-2' />
                </div>
            }
            <button
                onClick={handleCreateSection}
                className='w-full bg-tertiary_brand text-white rounded-lg px-3 py-1'>Save</button>
        </div>
    )
}

export default SectionForm