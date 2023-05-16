import AboutBanner from "@/components/AboutUs/AboutBanner/AboutBanner";
import Breadcrumbs from "@/components/AboutUs/Breadcrumb/Breadcrumbs";
import AboutTabs from "@/components/AboutUs/AboutTabs/AboutTabs";
import AboutTabsContent from "@/components/AboutUs/AboutTabsContent/AboutTabsContent";
import React from "react";

type indexProps = {};

const AboutIndexPage: React.FC<indexProps> = () => {
  return (
   
   <>
    <Breadcrumbs />
      <AboutBanner />
      <AboutTabs/>
      <AboutTabsContent/>
        </>
  );
};
export default AboutIndexPage;
