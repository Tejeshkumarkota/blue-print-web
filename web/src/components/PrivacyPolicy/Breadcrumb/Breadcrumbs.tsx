import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  useColorModeValue
} from "@chakra-ui/react";

const Breadcrumbs = () => {
  return (
    <>
      <Box
        bg={useColorModeValue("whiteAlpha.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.400")}
      >
        <Container maxW={"6xl"} pt="110" px={{ sm: "5", md: "5", lg: "0" }}>
          <Box pb="5" className="breadcrumb">
            <Breadcrumb fontSize={{ sm: "12px", md: "16px", lg: "18px" }} cursor={"pointer"}>
              <BreadcrumbItem>
                <BreadcrumbLink fontWeight="600" href="/" color="gray.500">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#" _hover={{color:'#f6a41c'}} fontWeight="600" color="black">
                   Privacy Policy
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Breadcrumbs;
