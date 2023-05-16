import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

const CommonBreadcrumb = () => {
  return (
    <>
      <Box pb="3" className="breadcrumb">
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
              Residential
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
    </>
  );
};

export default CommonBreadcrumb;
