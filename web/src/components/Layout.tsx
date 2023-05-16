import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/navbar";

export const siteTitle = 'RealCube';
export const siteUrl = 'https://www.realcube.estate/';

export default function Layout({ children }: any) {
    return (
        <>
            <Head>
                <title>{siteTitle}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="keywords"
                    content="real estate management software, cloud-based real estate management software, integrated real estate solution, end-to-end real estate management software"
                />
                <meta name="app_url"
                    content={siteUrl}
                />
                <meta name="description"
                    content="RealCube Estate, an integrated software platform automating Property Management, Community Management, Sales and Leasing, Finance and Operations, &amp; Facilities Management."
                />
            </Head>
            <Box m="auto">
                <header className="top-bar">
                    <Navbar />
                </header>
                <main>{children}</main>
                <footer>
                    <Footer />
                </footer>
            </Box>
            {/* <Footer /> */}
        </>
    );
}
