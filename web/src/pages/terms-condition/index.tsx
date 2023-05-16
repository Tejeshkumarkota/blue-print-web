import TermsContent from "@/components/TermsCondition/TermsContent/TermsContent";
import Breadcrumbs from "@/components/TermsCondition/Breadcrumb/Breadcrumbs";
import React from "react";

type indexProps = {};

const TermsConditionIndexPage: React.FC<indexProps> = () => {
  return (
   
   <>
    <Breadcrumbs />
      <TermsContent />
        </>
  );
};
export default TermsConditionIndexPage;
