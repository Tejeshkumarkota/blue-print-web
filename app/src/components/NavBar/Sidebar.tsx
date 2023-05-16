import { AtSignIcon } from "@chakra-ui/icons";
import { Box, Flex, List, ListIcon, ListItem } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdOutlineDashboard, MdOutlineListAlt } from "react-icons/md";

export default function Sidebar() {
  const { pathname } = useRouter();

  return (
    <>
      <Flex
        as="nav"
        py="0"
        px={"25px"}
        mt="5"
        mb="3"
        height={"65px"}
        justifyContent="center"
        alignItems="center"
      >
        <Link href="/">
          <Image
            src="/images/logo-alt.svg"
            alt="Picture of the author"
            width={135}
            height={35}
          />{" "}
        </Link>
      </Flex>
      <List
        spacing={0}
        p="0"
        m="0"
        className="menu-list-sidemenu custom-scrollbar"
      >
        <ListItem className="nav-item">
          <Link href="/" className={pathname === "/" ? "active" : ""}>
            <ListIcon as={MdOutlineDashboard} color={"black"} boxSize={5} />
            <Box as="span"> Dashboard </Box>
          </Link>
        </ListItem>
        <ListItem className="nav-item">
          <Link
            href="/myactivity"
            className={pathname === "/myactivity" ? "active" : ""}
          >
            <ListIcon as={MdOutlineListAlt} color={"black"} boxSize={5} />
            <Box as="span"> My Activity </Box>
          </Link>
        </ListItem>
        <ListItem className="nav-item">
          <Link
            href="/profile"
            className={pathname === "/profile" ? "active" : ""}
          >
            <ListIcon as={AtSignIcon} color={"black"} boxSize={5} />
            <Box as="span"> Profile </Box>
          </Link>
        </ListItem>
      </List>
    </>
  );
}
