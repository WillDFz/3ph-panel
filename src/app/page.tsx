'use client'
import CustomTabPanel from "@/components/UI/TabContainer";
import { usePages } from "@/hooks/usePages";
import { Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  const { getPages, pages, loading } = usePages();
  const [activeTab, setActiveTab] = useState(0);

  const loadPages = async () => {
    await getPages();
  }

  useEffect(() => {
    loadPages();
  }, []);

  return (
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
  );
}
