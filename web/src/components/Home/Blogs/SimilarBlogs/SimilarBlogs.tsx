import {
  Box,
  Container,
  Card,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

const SimilarBlogs = () => {
  const blogcontent =[
    {
      mar: "25",
       title: "The convenience of paying rent automatically through the Ejari Direct Debit Service",
       date: "10-01-2021",
       url: "https://res.cloudinary.com/realcube/image/upload/v1675865478/assets/img/Blogs/dubai-rent-payment-through-direct-debit.jpg"
    },
    {
      mar: "25",
       title: "Examining the Advantages and Disadvantages of Outsourcing Facilities Management",
       date: "10-01-2022",
       url: "https://res.cloudinary.com/realcube/image/upload/v1673015109/assets/img/Blogs/advantages-and-disadvantages-of-outsourcing-facilities-management.jpg"
    },
    {
      mar: "25",
       title: "5 Ways To Delivering Exceptional Satisfaction To Your Clients",
       date: "10-02-2020",
       url: "https://res.cloudinary.com/realcube/image/upload/v1602246320/assets/img/Blogs/customer-satisfaction.jpg"
    },
    {
      mar: "0",
       title: "Top 5 Rental Property Investment Tips",
       date: "23-04-2021",
       url: "https://res.cloudinary.com/realcube/image/upload/v1619168142/assets/img/Blogs/rental-property-investment.jpg"
    },
 ]
  return (
    <>
    

    {blogcontent.map((item, index) => (
      <Box key={index}>
        <Box gap={5} display={{ sm: "block", md: "flex" }} mb={item.mar} >
              <Box
                width={{ md: "35%" }}
                position="relative"
              >
                <Image
                  ml="auto"
                  alt="img"
                  src={item.url}
                  width="100%"
                  boxShadow="rgba(0, 0, 0, 0.15) 0px 0.5rem 0.5rem !important"
                  borderRadius={10}
                  height={135}
                  objectFit="cover"
                />
              </Box>
              <Box width={{ md: "65%" }} pr={{sm: "0", md: "40px" , lg: "80px" }}>
                <Text fontSize="sm" color="gray.600" mb="3">{item.date}</Text>
                <Heading as="h4" fontSize="18px" mb="3" noOfLines={2} fontWeight="700">{item.title}</Heading>
                
              </Box>
            </Box>
            </Box>
          ))}

    </>
  );
};

export default SimilarBlogs;
