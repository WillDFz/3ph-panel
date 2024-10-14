'use client'
import { useState } from 'react'
import SectionsSlider from '../SectionsSlider'
import BaseModal from '@/components/UI/BaseModal'
import SectionForm from '../SectionForm'

interface CreateSectionProps {
  pageId: string
  close: () => void
}

const CreateSection: React.FC<CreateSectionProps> = ({ pageId, close }) => {
  // states
  const [showSectionForm, setShowSectionForm] = useState<boolean>(false)
  const [sectionType, setSectionType] = useState<string>('')

  const handleSelectType = (type: string) => {

    setSectionType(type)
    setShowSectionForm(true)
  }

  return (
    <div className='mt-8'>
      <div className='flex items-center mb-10'>
        <label className='me-3'>Name:</label>
        <input type="text" placeholder='Define section name' className='w-full border-custom_gray_2 border rounded-lg ps-5 p-2' />
      </div>
      <SectionsSlider selectType={handleSelectType} />

      <BaseModal open={showSectionForm} onClose={() => setShowSectionForm(false)} title='Create Section' maxWidth='ssl'>
        <SectionForm type={sectionType} pageId={pageId} close={close} />
      </BaseModal>
    </div>
  )
}

export default CreateSection