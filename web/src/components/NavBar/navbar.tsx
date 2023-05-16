import { NavItem } from "@/interfaces/interfaces";
import NAV_ITEMS from "@/setup/config/menu_config";
import {
    ChevronDownIcon,
    ChevronRightIcon,
    CloseIcon,
    HamburgerIcon
} from "@chakra-ui/icons";
import {
    Box,
    Collapse,
    Container,
    Flex,
    Icon,
    IconButton,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Stack,
    Text,
    useColorModeValue,
    useDisclosure
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Rightcontent from "./Rightcontent/rightcontents";

export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box
            bg={useColorModeValue("gray.50", "gray.900")}
            color={useColorModeValue("gray.700", "gray.200")}
            // position="fixed"
            as="header"
            w="100%"
            zIndex="999"
        >
            <Flex
                bg={useColorModeValue("white", "gray.800")}
                color={useColorModeValue("gray.600", "white")}
                minH={"60px"}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={"solid"}
                borderColor={useColorModeValue("gray.200", "gray.900")}
                align={"center"}
            >
                <Container as={Stack} maxW={"6xl"} py={1} px={0}>
                    <Flex align={"center"}>
                        <Flex
                            flex={{ base: 1, md: "auto" }}
                            ml={{ base: -2 }}
                            display={{ base: "flex", md: "none" }}
                        >
                            <IconButton
                                onClick={onToggle}
                                icon={
                                    isOpen ? (
                                        <CloseIcon w={3} h={3} />
                                    ) : (
                                        <HamburgerIcon w={5} h={5} />
                                    )
                                }
                                variant={"ghost"}
                                aria-label={"Toggle Navigation"}
                            />
                        </Flex>
                        <Flex
                            flex={{ base: 1 }}
                            justify={{ base: "center", md: "start" }}
                        >
                            {/* <Text
                                textAlign={useBreakpointValue({
                                    base: "center",
                                    md: "left",
                                })}
                                fontFamily={"heading"}
                                color={useColorModeValue("gray.800", "white")}
                            >
                                Logo
                            </Text> */}
                            <Box>
                                <Link href="/">
                                    <Image
                                        src="/images/logo-alt.svg"
                                        alt="Picture of the author"
                                        width={104}
                                        height={45}
                                    />{" "}
                                </Link>
                            </Box>
                            <Flex className="menubar" display={{ base: "none", md: "flex" }} ml={10}>
                                <DesktopNav />
                            </Flex>
                        </Flex>

                        <Stack
                            flex={{ base: 1, md: 0 }}
                            justify={"flex-end"}
                            direction={"row"}
                            spacing={6}
                        >
                            {/* <Button
                                as={"a"}
                                fontSize={"sm"}
                                fontWeight={400}
                                variant={"link"}
                                href={"#"}
                            >
                                Sign In
                            </Button>
                            <Button
                                as={"a"}
                                display={{ base: "none", md: "inline-flex" }}
                                fontSize={"sm"}
                                fontWeight={600}
                                color={"white"}
                                bg={"pink.400"}
                                href={"#"}
                                _hover={{
                                    bg: "pink.300",
                                }}
                            >
                                Sign Up
                            </Button> */}
                            <Rightcontent />
                        </Stack>
                    </Flex>
                </Container>
            </Flex>
            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue("#292A2D", "gray.200");
    const linkHoverColor = useColorModeValue("#F3B625", "white");
    const popoverContentBgColor = useColorModeValue("white", "gray.200");

    return (
        <Stack direction={"row"} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={"hover"} placement={"bottom-start"}>
                        <PopoverTrigger>
                            <Link
                                // href={router.asPath}
                                // locale={navItem.href}
                                href={navItem.href ?? "#"}
                                color={linkColor}
                            >
                                {navItem.label}
                            </Link> 
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={"xl"}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={"xl"}
                                minW={"sm"}
                            >
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav
                                            key={child.label}
                                            {...child}
                                        />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
        <Link
            href={href}
            role={"group"}
        // display={"block"}
        // p={2}
        // rounded={"md"}
        // _hover={{ bg: useColorModeValue("#F6A41C", "gray.900") }}
        >
            <Stack direction={"row"} align={"center"}>
                <Box>
                    <Text
                        transition={"all .3s ease"}
                        _groupHover={{ color: "#F6A41C" }}
                        fontWeight={500}
                    >
                        {label}
                    </Text>
                    <Text fontSize={"sm"}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={"all .3s ease"}
                    transform={"translateX(-10px)"}
                    opacity={0}
                    _groupHover={{
                        opacity: "100%",
                        transform: "translateX(0)",
                    }}
                    justify={"flex-end"}
                    align={"center"}
                    flex={1}
                >
                    <Icon
                        color={"#F6A41C"}
                        w={5}
                        h={5}
                        as={ChevronRightIcon}
                    />
                </Flex>
            </Stack>
        </Link>
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue("white", "gray.800")}
            p={4}
            display={{ md: "none" }}
        >
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? "#"}
                justify={"space-between"}
                align={"center"}
                _hover={{
                    textDecoration: "none",
                }}
            >
                <Text
                    fontWeight={600}
                    color={useColorModeValue("#292A2D", "gray.200")}
                >
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={"all .25s ease-in-out"}
                        transform={isOpen ? "rotate(180deg)" : ""}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse
                in={isOpen}
                animateOpacity
                style={{ marginTop: "0!important" }}
            >
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={"solid"}
                    borderColor={useColorModeValue("gray.200", "gray.700")}
                    align={"start"}
                >
                    {children &&
                        children.map((child) => (
                            <Link key={child.label}
                                //  py={2}
                                href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};
