'use client'
import CreatePage from "@/components/CreatePage";
import BaseModal from "@/components/UI/BaseModal";
import CustomTabPanel from "@/components/UI/TabContainer";
import { usePages } from "@/hooks/usePages";
import { Add } from "@mui/icons-material";
import { Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  // hooks
  const { getPages, pages, loading } = usePages();
  // states
  const [activeTab, setActiveTab] = useState(0);

  const [showCreatePageModal, setShowCreatePageModal] = useState(false);

  const loadPages = async () => {
    await getPages();
  }

  useEffect(() => {
    loadPages();
  }, []);

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
                  <h1>{page.title}</h1>
                </CustomTabPanel>
              ))}
            </>
          }
        </div>
      </div>
      <BaseModal open={showCreatePageModal} onClose={() => setShowCreatePageModal(false)} maxWidth={'sl'} title="New Page">
        <CreatePage />
      </BaseModal>
    </>
  );
}
