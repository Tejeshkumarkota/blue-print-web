import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { ReactNode } from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";

const Logo = (props: any) => {
  return (
    <Image
      src="/images/realcube-white-logo.svg"
      alt="Picture of the author"
      width={168}
      height={45}
    />
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function FooterLink() {
  return (
    <>
      <Box
        as="footer"
        bg={useColorModeValue("blackAlpha.900", "blackAlpha.200")}
        color={useColorModeValue("White", "gray.900")}
      >
        <Container maxW={"6xl"} py={10} px={{ sm: "5", md: "5", lg: "0" }}>
          <Stack>
            <Box mb="6">
            <Link href={"/"}>
                <Logo color={useColorModeValue("gray.700", "white")} />
            </Link>
            </Box>
          </Stack>
          <SimpleGrid templateColumns={{ md: "1fr", lg: "1fr 1fr" }} spacing={6}>
            <Flex alignItems="center">
              <Link href={"/about"} pr="5" borderRight="1px" borderColor="white" fontSize="14px">About Us</Link>
              <Link href={"/contact"} px="5" borderRight="1px" borderColor="white" fontSize="14px">Contact Us</Link>
              <Link href={"/terms-condition"} px="5" borderRight="1px" borderColor="white" fontSize="14px">Terms & Conditions</Link>
              <Link href={"/privacy-policy"} px="5" fontSize="14px">Privacy Policy</Link>
            </Flex>
            <Box display={{ sm: 'inline-flex', lg: 'inline-flex'}} alignItems={"center"} justifyContent={"end"} gap={6}>
                <Flex>
                    <Link href={"#"}>
                        <Box display="inline-flex" alignItems="center" mr="3" justifyContent="center" bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.50")} color="blackAlpha.900" borderRadius="50%" h={35} w={35} fontSize={20}>
                            <FaFacebookF/>
                        </Box>
                    </Link>
                    <Link href={"#"}>
                        <Box display="inline-flex" alignItems="center" mr="3" justifyContent="center" bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.50")} color="blackAlpha.900" borderRadius="50%" h={35} w={35} fontSize={20}>
                            <AiOutlineInstagram/>
                        </Box>
                    </Link>
                    <Link href={"#"}>
                        <Box display="inline-flex" alignItems="center" mr="3" justifyContent="center" bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.50")} color="blackAlpha.900" borderRadius="50%" h={35} w={35} fontSize={20}>
                            <FaTwitter/>
                        </Box>
                    </Link>
                    <Link href={"#"}>
                        <Box display="inline-flex" alignItems="center" justifyContent="center" bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.50")} color="blackAlpha.900" borderRadius="50%" h={35} w={35} fontSize={20}>
                            <AiFillYoutube/>
                        </Box>
                    </Link>
                </Flex>
                <Flex gap={6}>
                    <Link href={"#"}>
                        <Image  src="/images/play-store.png" alt="play-store" height="33" width="112"/>
                    </Link>
                    <Link href={"#"}>
                        <Image  src="/images/app_store.svg" alt="play-store" height="33" width="112"/>
                    </Link>
                </Flex>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
