import { Image } from "@chakra-ui/react";

const AboutBannerImg = () => {
  return (
    <>
      <Image
        ml="auto"
        alt="img"
        src="/images/about-banner-img.png"
        width="100%"
        borderRadius={10}
        height={510}
        objectFit="contain"
      />
    </>
  );
};

export default AboutBannerImg;
