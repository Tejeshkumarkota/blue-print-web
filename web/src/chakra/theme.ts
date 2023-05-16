import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';
import { Button } from "./buttons";

export const theme = extendTheme({
    colors: {
        brand: {
            100: "#FF3C00",
        },
        primary: '#F3B625',
        black: '#292A2D',
        blackHover: 'rgba(41, 42, 45, 0.9)',
        white: '#fff',
    },
    fonts: {
        heading: `'Roboto', sans-serif`,
        body: `'Roboto', sans-serif`,
    },
    components: {
        Button
    },
    styles: {
        global: (props: any) => ({
            body: {
                bg: "whiteAlpha.900",
            },
            '*::placeholder': {
                color: '#000',
            },
            '.text-primary': {
                color: mode('primary !important', 'white')(props),
            },
            '.text-black': {
                color: mode('black !important', 'white')(props),
            },
            /* Home Screen */
            '.page-title-home': {
                maxWidth: '640px',
                fontSize: '64px !important',
                lineHeight: '84px !important',
                color: '#fff'
            },
            '.banner-desc': {
                margin: '45px 0',
                textShadow: '2px 2px 5px #000',
                fontSize: '16px',
                color: '#ffffff',
                fontWeight: 400
            },
            '.custom-tab-search .chakra-tabs__tablist': {
                borderBottom: 0,
                marginBottom: '1px',
            },
            '.custom-tab-search .chakra-tabs__tablist .chakra-tabs__tab:first-of-type': {
                borderRadius: '8px 0 0 0',
            },
            '.custom-tab-search .chakra-tabs__tablist .chakra-tabs__tab:last-child': {
                borderRadius: '0 8px 0 0',
            },
            '.custom-tab-search .chakra-tabs__tablist .chakra-tabs__tab': {
                backgroundColor: '#292A2D',
                border: 0,
                fontWeight: 400,
                fontSize: '16px',
                color: '#fff',
                padding: '12px 35px',
            },
            '.custom-tab-search .chakra-tabs__tablist .chakra-tabs__tab[aria-selected=true]': {
                backgroundColor: '#FFFFFF',
                color: '#292A2E',
                position: 'relative',
            },
            '.custom-tab-search .chakra-tabs__tab-panels': {
                backgroundColor: '#FFFFFF',
                boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.14)',
                borderRadius: '0px 8px 8px 8px'
            },
            '.custom-tab-search .chakra-tabs__tablist .chakra-tabs__tab[aria-selected=true]::after': {
                position: 'absolute',
                content: '""',
                left: '0',
                right: '0',
                display: 'inline-block',
                border: '2px solid #F3B625',
                width: '40px',
                bottom: '0px',
                margin: '0 auto',
                borderRadius: '30px',
            },
            '.custom-tab-search .form-control': {
                borderRadius: '5px',
                height: '43px',
                border: '1px solid #d3d1da',
                boxShadow: 'none !important',
                fontSize: '15px',
                paddingLeft: '12px',
                backgroundColor: '#fff !important',
                width: '100%',
                textAlign: 'left',
                color: '#000',
            },
            '.custom-tab-search .rmsc.form-control': {
                paddingLeft: '0',
            },
            '.custom-tab-search .form-control .dropdown-container': {
                border: '0',
                borderRadius: '0',
                boxShadow: 'none !important',
                backgroundColor: 'transparent',
            },
            '.custom-tab-search .form-control .dropdown-heading': {
                height: '41px',
                outline: '0',
                paddingLeft: '12px',
                fontSize: '15px',
                color: '#000',
                cursor: 'pointer',
            },
            '.custom-tab-search .form-control .gray': {
                fontSize: '15px',
                color: '#000',
            },
            '.properties-service .service-tops p': {
                fontWeight: '400',
                fontSize: '14px',
                lineHeight: '16px',
                color: '#ffffff',
                margin: '0',
            },
            '.properties-service .service-tops h2': {
                fontWeight: '700',
                fontSize: '32px',
                lineHeight: '38px',
                color: '#ffffff',
                display: 'block'
            },
            '.residence-title': {
                fontWeight: 700,
                fontSize: '40px',
                lineHeight: '47px',
                color: '#000000',
            },
            '.residence-txt': {
                display: 'flex',
                fontWeight: 400,
                fontSize: '14px',
            },
            '.residence-tabs .chakra-tabs__tab[aria-selected=true], .chakra-tabs__tab[data-selected]': {
                borderColor: ' #f6a41c',
                color: '#000000',
            },
            '.residence-tabs .chakra-tabs__tab:active, .chakra-tabs__tab[data-active]': {
                backgroundColor: '#fff',
            },
            '.img-residence': {
                borderTopRightRadius: '0.375rem',
                borderTopLeftRadius: '0.375rem',
            },
            '.residence-tabs p': {
                fontSize: '14px',
                fontWeight: 500,
            },
            '.res-icon': {
                display: 'flex',
            },
            '.aed span': {
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '21px',
            },
            '.footer': {
                alignItemsCenter: 'center',
            },
            'footer a.chakra-link': {
                textDecoration: 'none !important',
            },
            '.residence-txt .chakra-icon': {
                width: '1.5em',
                height: '1.5em'
            },
            '.price-slider-filter h6': {
                fontSize: '14px',
                color: '#252525',
                fontWeight: '600',
            },
            '.price-slider-filter .chakra-slider__thumb': {
                border: '1px solid #292A2D',
            },
            '.price-slider-filter .chakra-slider__thumb:first-of-type': {
                left: '0 !important',
            },
            '.price-slider-filter .chakra-slider__filled-track': {
                background: '#F3B625',
            },
            '.price-slider-filter .chakra-slider__track': {
                background: '#f5f5f5',
            },
            '.price-slider-filter p.chakra-text': {
                fontSize: '13px',
                color: 'rgba(0,0,0,.85)',
                fontWeight: '400',
            },
            '.price-slider-filter input.chakra-input.primary': {
                color: "white",
                backgroundColor: "#292A2D",
                fontSize: "14px",
                height: "initial",
                fontWeight: 500,
                textTransform: "capitalize",
                borderRadius: "5px",
                _hover: {
                    bg: "rgba(41, 42, 45, 0.9)",
                },
            },
            '.price-slider-filter input.chakra-input.outline': {
                color: "rgba(0,0,0,.85)",
                border: "1px solid",
                backgroundColor: "white",
                borderColor: "#d9d9d9",
                height: "initial",
                fontSize: "14px",
                fontWeight: 500,
                textTransform: "capitalize",
                borderRadius: "5px",
                _hover: {
                    bg: "rgba(41, 42, 45, 1)",
                    color: "#fff",
                },
            },
            '.slider-button .chakra-button__icon': {
                position: 'absolute',
                top: '8px',
                right: '8px',
            },
            '.propImg': {
                maxHeight: '200px',
                height: '200px',
                width: '100%',
                maxWidth: '100%',
            },
            '.prop-icon': {
                display: 'flex',
                alignItems: 'center',
            },
            '.prop-icon img': {
                marginRight: '5px',
            },
            '.propDet_imgscroll .react-horizontal-scrolling-menu--item img': {
                height: '100%',
                borderRadius: '8',
            },
            '.propDet_imgscroll ::-webkit-scrollbar': {
                display: 'none',
            },
            '.modal_check .chakra-radio__control': {
                right: '5px',
                position: 'absolute',
                border: 'none',
                height: '10px',
                width: '10px',
                backgroundColor: 'transparent !important',
                boxShadow: 'none !important',
                outline: '0 !important',
            },
            '.modal_check .chakra-radio__control[data-checked]::before': {
                position: 'absolute',
                background: 'url(/images/radio-check.svg)',
                width: '22px',
                height: '22px',
                right: '15px',
                top: '-4px',
                backgroundColor: 'gray.50',
                border: 'none',
                backgroundRepeat: 'no-repeat',
            },
            '.modal_check .chakra-radio__label': {
                marginLeft: '0',
            },
            '.breadcrumb .chakra-breadcrumb ol': {
                flexWrap: 'wrap',
            },
            '.menubar .chakra-stack a:hover': {
                color: '#F3B625',
            },
            '.top-bar': {
                position: 'fixed',
                left: 0,
                right: 0,
                top: 0,
                zIndex: 100,
                backgroundColor: 'rgb(255, 255, 255)',
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 20px',
            },
            '.slide-modal .carousel.carousel-slider .control-arrow': {
                position: 'absolute',
                height: '40px',
                top: '50%',
                opacity: '1',
                display: 'inline-flex',
                alignItems: 'center',
            },
            '.slide-modal .carousel .control-next.control-arrow:before': {
                content: '""',
                background: 'url("/images/chevron-right-icon.svg") no-repeat',
                height: '18px',
                margin: '0',
                width: '15px',
                filter: 'invert(1)',
                border: '0',
                backgroundSize: '10px',
            },
            '.slide-modal .carousel .control-next.control-arrow': {
                right: '50px',
                padding: '5px 8px 5px 12px',
            },
            '.slide-modal .carousel .control-prev.control-arrow:before': {
                content: '""',
                background: 'url("/images/chevron-left-icon.svg") no-repeat',
                height: '18px',
                margin: '0',
                width: '15px',
                filter: 'invert(1)',
                border: '0',
                backgroundSize: '10px',
            },
            '.slide-modal .carousel .control-prev.control-arrow': {
                left: '30px',
                padding: '5px 8px 5px 12px',
            },
            '.home_slide  .carousel .carousel-status,.slide-modal .carousel .control-dots': {
                display: 'none',
            },
            '.slide-modal .carousel .carousel-status': {
                left: '30',
                width: '100px',
                fontSize: '14px',
            },

            '.home_slide .carousel .control-dots': {
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
            },
            '.home_slide .carousel .control-dots .dot': {
                background: 'transparent',
                border: '2px solid #fff',
                width: '14px',
                height: '14px',
            },
            '.home_slide .carousel .control-dots .dot.selected': {
                background: '#fff',
                border: '2px solid #fff',
                width: '20px',
                height: '20px',
            },

            '.home_slide .myVilla': {
                content: '""',
                right: '0',
                bottom: '10px',
                marginBottom: '80px',
                position: 'absolute',
                backgroundColor: '#FFC50D',
                height: '2px',
                width: '100%',
                maxWidth: '340px',
            },

            '.overlay': {
                background: 'blackAlpha.800 !important',
            },
            '.map-toggle-container': {
                position: 'relative',
                height: '500px',
            },
            '.map-toggle-container > div:not(.map-carousel)': {
                borderRadius: '10px',
                height: '500px !important',
            },
            '.map-carousel': {
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: mode('rgba(0,0,0,0.38)', 'rgba(0, 0, 0, 0.38)')(props),
                margin: 0,
                borderRadius: '10px',
                height: '135px',
                width: '100%',
            },
            '.map-carousel .chakra-card': {
                height: '115px',
                margin: '10px',
            },
            '.map-carousel .propImg': {
                borderRadius: '10px',
                width: '100%',
                height: '95px',
                objectFit: 'cover',
            },
            '.map-carousel .slick-slider .slick-next': {
                right: '-40px',
                top: '50%',
                background: 'url("/images/arrow-right-slick.png") no-repeat',
                display: 'block',
                height: '41px',
                width: '27px',
            },
            '.map-carousel .slick-slider .slick-prev': {
                left: '-40px',
                top: '50%',
                background: 'url("/images/arrow-left-slick.png") no-repeat',
                display: 'block',
                height: '41px',
                width: '27px',
            },
            '.map-carousel .slick-slider .slick-next::before, .map-carousel .slick-slider .slick-prev::before': {
                display: 'none',
            },
            'span.close-map-container': {
                color: mode('black', 'white')(props),
                cursor: 'pointer',
                position: 'absolute',
                right: 0,
                zIndex: 2,
                backgroundColor: mode('white', 'black')(props),
                borderRadius: '50px',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
                margin: '10px',
                boxShadow: 'rgba(0, 0, 0, 0.3) 0px 3px 6px',
            },
            'span.close-map-container:hover': {
                backgroundColor: mode('blackHover', 'white')(props),
                color: mode('white', 'black')(props),
            },

            '.similar-tabs .chakra-tabs__tab[aria-selected=true], .similar-tabs .chakra-tabs__tab[data-selected]': {
                borderColor: ' #f6a41c',
                color: '#fff',
            },
            '.similar-tabs .chakra-tabs__tab:active': {
                backgroundColor: 'transparent',
            },
            '.contact .chakra-tabs__tab[aria-selected=true], .contact .chakra-tabs__tab[data-selected]': {
                fontWeight: '700 !important',
                borderBottom: '2px solid #f6a41c',
            },

            '.abouttab:hover span': {
                padding: '0 25px 0 20px',
            },
            '.mob_no .form-control': {
                height: '50px',
                border: 'none',
                color: 'gray.600',
                width: '100%',
                paddingLeft: '50px',
                borderRadius: '.375rem',
            },
            '.mob_no .flag-dropdown ': {
                border: 'none',
                background: 'whiteAlpha.900',
                borderRadius: '.375rem',
                padding: '0 0 0 5px'
            },
            '.floorplan-toggle-container .container': {
                position: 'relative',
                overflow: 'auto',
                height: '100%',
            },
            '.floorplan-toggle-container .ss': {
                position: 'absolute',
                color: '#fff',
                padding: '3px',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: 'rgba(0, 0, 0, 0.8)',
                transform: 'translate3d(-50%, -50%, 0)',
                pointerEvents: 'none',
                zIndex: 1000,
            },

            //arabic
            'body[dir="rtl"]': {
                '.menubar': {
                    paddingRight: '40px',
                },
                '.arabic-btn': {
                    marginLeft: '8px',
                },
                '.custom-tab-search .chakra-tabs__tablist .chakra-tabs__tab:last-child': {
                    borderRadius: '8px 0 0 0',
                },
                '.custom-tab-search .chakra-tabs__tablist .chakra-tabs__tab:first-of-type': {
                    borderRadius: '0 8px 0 0',
                },
                '.custom-tab-search .chakra-tabs__tab-panels': {
                    borderRadius: '8px 0px  8px 8px',
                },
                '.custom-tab-search .chakra-tabs__tablist': {
                    borderBottom: '0',
                },
                '.custom-tab-search .ar-form-ctrl .form-control': {
                    paddingLeft: '35px',
                },
                '.custom-tab-search .form-control': {
                    textAlign: 'right',
                },
                '.ar-form-ctrl .slider-button .chakra-button__icon ': {
                    top: '7px',
                    left: '8px',
                    right: 'initial',
                },
                '.btn-ar-srh': {
                    marginLeft: '0',
                    marginRight: '.5rem',
                },
                '.res-icon img, img.loc-icn': {
                    marginLeft: '.5rem',
                    marginRight: '0',
                },
            }
        }),
    },
});