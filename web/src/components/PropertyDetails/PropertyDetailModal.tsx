import {
  Box,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const PropertyDetailModal = ({
  isPropertyDetailModalOpen,
  isPropertyDetailModalOpenFun,
}) => {
  return (
    <>
      <Modal
        isOpen={isPropertyDetailModalOpen}
        onClose={isPropertyDetailModalOpenFun}
      >
        <ModalOverlay className="overlay" />
        <ModalContent
          className="slide-modal"
          m="0"
          bg="transparent"
          shadow="none"
          maxWidth="100%"
          borderRadius="12px"
        >
          <ModalCloseButton top="30px" right="50px" zIndex="99" color="white" fontSize="16px"/>
          <ModalBody
            maxW="100%"
            mx="auto"
            bg="transparent"
            minH="100px"
            borderRadius="5px"
            p="0"
            mt="5"
            className="modal_check"
          >
            <Carousel bg="none" showThumbs={false}>
              <Box h="100%" pt={{ sm: "10px", md: "30px" }}>
                <Image
                  src="https://exalogic-store.s3.us-east-2.amazonaws.com/realcube-property/property/4.jpg"
                  height="100%"
                  borderRadius="5px"
                  objectFit="cover"
                  maxW={{ sm: "100%", md: "80%", lg: "70%" }}
                  maxH="calc(100vh - 100px)"
                />
              </Box>
              <Box h="100%" pt={{ sm: "10px", md: "30px" }}>
                <Image
                  src="https://exalogic-store.s3.us-east-2.amazonaws.com/realcube-property/property/1.jpg"
                  height="100%"
                  borderRadius="5px"
                  objectFit="cover"
                  maxW={{ sm: "100%", md: "80%", lg: "70%" }}
                  maxH="calc(100vh - 100px)"
                />
              </Box>
              <Box h="100%" pt={{ sm: "10px", md: "30px" }}>
                <Image
                  src="https://exalogic-store.s3.us-east-2.amazonaws.com/realcube-property/property/2.jpg"
                  height="100%"
                  borderRadius="5px"
                  objectFit="cover"
                  maxW={{ sm: "100%", md: "80%", lg: "70%" }}
                  maxH="calc(100vh - 100px)"
                />
              </Box>
            </Carousel>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PropertyDetailModal;
