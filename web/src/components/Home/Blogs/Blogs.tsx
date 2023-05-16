import { Box, Container, Flex, Image,
  Card,
  Heading,
  SimpleGrid,
  Text, } from "@chakra-ui/react";
import BlogsDescription from "./BlogsDescription/BlogsDescription";
import SimilarBlogs from "./SimilarBlogs/SimilarBlogs";

const Blogs = () => {
  return (
    <>
    <Box
        minH="400px"
        py={10}
        borderBottom="1px"
        borderBottomColor="gray.400"
      >
        <Container maxW={"6xl"} px={{sm:'5', md:'5', lg: '0'}} py={5}>
          <Box>
            <Heading as="h6" fontSize="18px" fontWeight="700" mb="5">
              Blogs
            </Heading>
            <Heading as="h1" fontSize="32px" mb="8" fontWeight="700">
              Articles Related to Aesthetic Home Design
            </Heading>
            {/* <Text fontSize="sm" color="gray.700">
              Our record-breaking deals and global reach has combined forces
              on a strong marketing and technology platform to create the most
              influential luxury real estate firm in the region is supported
              by the world's largest global realty brand.
            </Text> */}
          </Box>
          <SimpleGrid
              columns={{ md: "1", lg: "2" }}
              spacing={7}
              h="100%"
              w="100%"
              minH="250px"
            >
              <Box>
                <BlogsDescription />
              </Box>
              <Box>
                <SimilarBlogs />
              </Box>

            </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};

export default Blogs;
