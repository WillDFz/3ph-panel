import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface SectionsSliderProps {
    selectType: (type: string) => void
}

const SectionsSlider: React.FC<SectionsSliderProps> = ({ selectType }) => {

    const sectionsTypes = [
        {
            name: 'Section 001',
            type: 'section_001',
            img: '/images/01.png'
        },
        {
            name: 'Section 002',
            type: 'section_002',
            img: '/images/02.png'
        },
        {
            name: 'Section 003',
            type: 'section_003',
            img: '/images/02.png'
        },
        {
            name: 'Section 003',
            type: 'section_003',
            img: '/images/02.png'
        }
    ]

    return (
        <div className='px-10'>
            <Swiper
                spaceBetween={50}
                slidesPerView={2.2}
            >
                {sectionsTypes.map((section, index) => (
                    <SwiperSlide key={index} className='border p-3'>
                        <div className='flex flex-col items-center'>
                            <img src={section.img} alt={section.name} className='h-40 mb-5' />
                            <span>{section.name}</span>
                            <button
                                onClick={() => selectType(section.type)}
                                className='bg-tertiary_brand text-white rounded-lg px-3 py-1 mt-2'>Select</button>
                        </div>
                    </SwiperSlide>
                )
                )}
            </Swiper>
        </div>
    )
}

export default SectionsSlider