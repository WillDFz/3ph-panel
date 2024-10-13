'use client'
import CreatePage from "@/components/CreatePage";
import CreateSection from "@/components/Sections/CreateSection";
import SectionsList from "@/components/Sections/SectionsList";
import BaseModal from "@/components/UI/BaseModal";
import CustomTabPanel from "@/components/UI/TabContainer";
import { usePages } from "@/hooks/usePages";
import { Add, Delete, DeleteOutline } from "@mui/icons-material";
import { Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  // hooks
  const { getPages, pages, loading, deletePage } = usePages();
  // states
  const [activeTab, setActiveTab] = useState(0);
  const [showCreatePageModal, setShowCreatePageModal] = useState(false);
  const [showCreateSectionModal, setCreateSectionModal] = useState(false);
  const [pageId, setPageId] = useState<string>();

  const loadPages = async () => {
    await getPages();
  }

  const handleDeletePage = async (id: string) => {
    await deletePage(id);
    await loadPages();
  }

  const handleCreateSection = (id: string) => {
    if (id) {
      setPageId(id);
      setCreateSectionModal(true);
    }

  }

  useEffect(() => {
    loadPages();
  }, [showCreatePageModal]);

  return (
    <>
      <div className="p-10">
        <div className="bg-custom_gray rounded-lg p-3">
          <Tabs
            value={activeTab}
            onChange={(e, newValue) => setActiveTab(newValue)}
            variant="scrollable"
            className="font-bold"
          >
            {pages?.map((page, index) => (
              <Tab key={page.id} label={page.title} className="capitalize font-bold" />
            ))}
            <button onClick={e => setShowCreatePageModal(true)}>
              <Add />
            </button>
          </Tabs>
          {pages &&
            <>
              {pages?.map((page, index) => (
                <CustomTabPanel key={page.id} value={activeTab} index={index}>
                  {page.title !== 'Home' && (
                    <div className="flex justify-end">
                      <button onClick={e => handleDeletePage(page.id)}>
                        <DeleteOutline className="text-red-600" />
                        <span className="text-sm">
                          Delete
                        </span>
                      </button>
                    </div>
                  )
                  }
                  {/* list */}
                  <SectionsList pageId={page.id}  refreshSections={showCreateSectionModal}/>
                  <div className='bg-white flex justify-center rounded-lg p-3'>
                    <button onClick={e => handleCreateSection(page.id)}>
                      <Add className='text-tertiary_brand' />
                    </button>
                  </div>
                </CustomTabPanel>
              ))}
            </>
          }
        </div>
      </div>
      <BaseModal open={showCreatePageModal} onClose={() => setShowCreatePageModal(false)} maxWidth={'sl'} title="New Page">
        <CreatePage close={() => setShowCreatePageModal(false)} />
      </BaseModal>
      <BaseModal open={showCreateSectionModal} onClose={() => setCreateSectionModal(false)} maxWidth={'ssl'} title="New Section">
        <CreateSection pageId={pageId!} close={()=> setCreateSectionModal(false)}  />
      </BaseModal>
    </>
  );
}
