import {
  Box,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  AspectRatio,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const VideoSliderModal = ({
  isVideoSliderModalOpen,
  isVideoSliderModalOpenFun,
}) => {
  return (
    <>
      <Modal
        isOpen={isVideoSliderModalOpen}
        onClose={isVideoSliderModalOpenFun}
      >
        <ModalOverlay className="overlay" />
        <ModalContent
          className="slide-modal slide-video"
          m="0"
          bg="transparent"
          shadow="none"
          maxWidth="100%"
          borderRadius="12px"
        >
          <ModalCloseButton
            top="25px"
            right="50px"
            zIndex="99"
            color="white"
            fontSize="16px"
          />
          <ModalBody
            w="100%"
            bg="transparent"
            minH="100px"
            maxH="100vh"
            borderRadius="5px"
            p="0"
            mt="5"
            className="modal_check"
          >
            <Carousel bg="none" showThumbs={false}>
              <Box h="100%" pt={{ sm: "10px", md: "30px" }}>
                <AspectRatio w="100%"
                  maxW={{ sm: "100%", md: "80%", lg: "70%" }}
                  maxH="100vh" mx="auto" ratio={1.85/1}>
                  <iframe
                    title="Videos"
                    src="https://www.youtube.com/embed/jV399L6FDow"
                  />
                </AspectRatio>
              </Box>
              <Box h="100%" pt={{ sm: "10px", md: "30px" }}>
              <AspectRatio w="100%"
                  maxW={{ sm: "100%", md: "80%", lg: "70%" }}
                  maxH="100vh" mx="auto" ratio={1.85/1}>
                  <iframe
                    title="Videos"
                    src="https://www.youtube.com/embed/zX3Y33kGMx0"
                  />
                </AspectRatio>
              </Box>
            </Carousel>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default VideoSliderModal;
