import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

const Breadcrumbs = ({ data }) => {
  return (
    <>
      <Box pb="5" className="breadcrumb">
        <Breadcrumb fontSize={{ sm: "12px", md: "14px", lg: "16px" }}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" color="gray.500">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/listing/propertylisitng" color="gray.500">
              Properties in UAE
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#" fontWeight="500" color="black">
              {data?.propretyName}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
    </>
  );
};

export default Breadcrumbs;
