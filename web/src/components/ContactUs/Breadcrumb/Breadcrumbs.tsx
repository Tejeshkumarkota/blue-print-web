import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

const Breadcrumbs = () => {
  return (
    <>
      <Box pb="3" className="breadcrumb">
        <Breadcrumb
          fontSize={{ sm: "12px", md: "16px", lg: "18px" }}
          cursor={"pointer"}
          color={"white"}
        >
          <BreadcrumbItem>
            <BreadcrumbLink fontWeight="600" href="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink
              href="#"
              fontWeight="600"
              _hover={{ color: "#f6a41c" }}
            >
              Contact Us
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
    </>
  );
};

export default Breadcrumbs;
