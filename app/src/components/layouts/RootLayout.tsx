import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../NavBar/Navbar";
import Sidebar from "../NavBar/Sidebar";

export const siteTitle = "RealCube";
export const siteUrl = "https://www.realcube.estate/";

export default function RootLayout({ children }: any) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="real estate management software, cloud-based real estate management software, integrated real estate solution, end-to-end real estate management software"
        />
        <meta name="app_url" content={siteUrl} />
        <meta
          name="description"
          content="RealCube Estate, an integrated software platform automating Property Management, Community Management, Sales and Leasing, Finance and Operations, &amp; Facilities Management."
        />
      </Head>
      <Grid templateColumns="repeat(6,1fr)">
        <GridItem
          as="aside"
          colSpan={{ base: 6, lg: 2, xl: 1 }}
          p="20px"
        >
          <Box 
            bg="white"
            color="#d5a85a"
            height='100%'
            color="#d5a85a"
            className="left-menu"
            borderRadius='lg'
          >
            <Sidebar />
          </Box>
        </GridItem>
        <GridItem
          as="main"
          colSpan={{ base: 6, lg: 4, xl: 5 }}
          className="content-wrapper"
          pr="20px"
        >
          <Box className="top-header">
            <Navbar />
          </Box>
          <Container px="0" maxWidth="container">
            <Box overflowY="auto" className="main-body-sec custom-scroll">
              {children}
            </Box>
          </Container>
        </GridItem>
      </Grid>
    </>
  );
}
