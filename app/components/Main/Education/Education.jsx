import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton';
import Timeline from './TimelIne/Timeline';
import CertificationSet from './Certifications/CertificationSet';

function Education() {


  const [tab, setTab] = useState("edu");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
        <div className="w-full pl-[40px] flex flex-col items-start justify-start">
            <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("edu")}
              active={tab === "edu"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("cet")}
              active={tab === "cet"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            </div>

            {tab === "edu" ? <Timeline></Timeline>: <CertificationSet></CertificationSet>}
            
        </div>
  )
}

export default Education