import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/navbar";
import Head from 'next/head';

export const siteTitle = 'RealCube';
export const siteUrl = 'https://www.realcube.estate/';

export default function Layout({ children }) {
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
            {/* TODO - header */}
            <Navbar />
            <main>{children}</main>
            {/* TODO - footer */}
            <Footer />
        </>
    );
}