import {
  Box,
  SimpleGrid,
  Image,
  Text,
  Heading,
  AspectRatio,
} from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import VideoSliderModal from "../VideoSliderModal/VideoSliderModal";

const VideosDescription = () => {
  const videocontent = [
    {
      mar: "25",
      title: "Introducing The Integreted Community Management Platform",
      date: "Mar 20 2022",
      src: "https://exalogic-store.s3.us-east-2.amazonaws.com/realcube-property/video-thumbnail/video-thumbnail1.jpg",
    },
    {
      mar: "25",
      title:
        "Webinar: Bringing Facility Management into the digital realm with RealCube Connect.",
      date: "Mar 20 2022",
      src: "https://exalogic-store.s3.us-east-2.amazonaws.com/realcube-property/video-thumbnail/video-thumbnail2.jpg",
    },
  ];

  const [isVideoSliderModalOpen, IsetisVideoSliderModalOpen] = useState(false);
  let handleVideoSliderModalOpen = () =>
    IsetisVideoSliderModalOpen(!isVideoSliderModalOpen);

  return (
    <>
      <SimpleGrid
        columns={{ md: "2", lg: "2" }}
        spacing={7}
        h="100%"
        w="100%"
        minH="250px"
      >
        {videocontent.map((item, index) => (
          <Box key={index}>
            <Box
              position="relative"
              mb="5"
              onClick={handleVideoSliderModalOpen}
            >
              <Image
                cursor="pointer"
                src={item.src}
                width="100%"
                height="320"
                objectFit="cover"
                borderRadius="10"
              />

              <Box position="absolute" top="45%" left="46%">
                <Image
                  cursor="pointer"
                  src="/images/play-icon.png"
                  width="60px"
                  height="60px"
                  objectFit="cover"
                  borderRadius="50%"
                />
              </Box>
            </Box>
            <Text fontSize="sm" color="gray.600" mb="3">
              {item.date}
            </Text>
            <Heading
              as="h4"
              fontSize="18px"
              mb="3"
              noOfLines={2}
              fontWeight="700"
            >
              {item.title}
            </Heading>
          </Box>
        ))}
      </SimpleGrid>

      <VideoSliderModal
        isVideoSliderModalOpen={isVideoSliderModalOpen}
        isVideoSliderModalOpenFun={handleVideoSliderModalOpen}
      />
    </>
  );
};

export default VideosDescription;
