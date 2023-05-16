import { Helmet } from "react-helmet";
import { useRouter } from 'next/router'

export default function MetaTags(props) {

    let location = useRouter();
    let currentUrl = location.pathname;
    let quote = props.quote ? props.quote : "";
    let title = props.title ? props.title : "Real Cube - Explore properties in your area";
    let image = props.image ? props.image : "/images/banner-template2.png";
    let description = props.description ? props.description : "Real Cube - Explore properties in your area";
    let hashtag = props.hashtag ? props.hashtag : "#RealCube";
    return (
        <Helmet>

            <title>{title}</title>
            <meta name="title" content={title} />
            <meta property="og:title" content={title} />
            <meta name="description" content={description} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta
                property="og:url"
                content={currentUrl}
            />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image:alt" content={title} />


        </Helmet>
    );
}