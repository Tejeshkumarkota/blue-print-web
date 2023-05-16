import { Box, Flex, Icon } from "@chakra-ui/react";
import Image from "next/image";
import { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItems="center" marginRight="0">
            <Icon
                as={FaArrowAltCircleLeft}
                onClick={() => scrollPrev()}
                fontSize="2xl"
                cursor="pointer"
                position="absolute"
                zIndex="99"
                left="5px"
                d={["none", "none", "none", "block"]}
            />
        </Flex>
    );
};

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItems="center" marginLeft="0">
            <Icon
                as={FaArrowAltCircleRight}
                onClick={() => scrollNext()}
                fontSize="2xl"
                cursor="pointer"
                position="absolute"
                zIndex="99"
                right="5px"
                d={["none", "none", "none", "block"]}
            />
        </Flex>
    );
};
export default function ImageSrollbar({ data }: any) {
    return (
        <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            style={{ overflow: "hidden", margin:"0" }}
        >
            {data.map((item: any, index: any) => (
                <Box maxWidth="100%" width="100%" minWidth="60%" height="600px" overflow="hidden"
                    key={index}>
                    <Image
                        placeholder="blur"
                        blurDataURL={item.propertyImage}
                        src={item.propertyImage}
                        alt="name"
                        width={755}
                        height={600}
                        objectFit="cover"
 />
                </Box>
            ))}
        </ScrollMenu>
    );
}
