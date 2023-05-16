import Breadcrumbs from "@/components/PrivacyPolicy/Breadcrumb/Breadcrumbs";
import PolicyContent from "@/components/PrivacyPolicy/PolicyContent/PolicyContent";
import React from "react";

type indexProps = {};

const PrivacyPolicyIndexPage: React.FC<indexProps> = () => {
  return (
   
   <>
    <Breadcrumbs />
      <PolicyContent />
        </>
  );
};
export default PrivacyPolicyIndexPage;
