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
                bg: mode('#F2F2F2', '#F2F2F2')(props),
            },
            '.text-primary': {
                color: mode('primary !important', 'white')(props),
            },
            '.text-black': {
                color: mode('black !important', 'white')(props),
            },
            // Side Bar
            '.left-menu': {
                // position: 'fixed',
                // top: 0,
                // bottom: 0,
                // left: 0,
                // zIndex: 101,
                // overflow: 'hidden',
                width: '14rem !important',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 0 28px 0 rgba(82, 63, 105, 0.05)',
                background: mode('white', 'black')(props),
            },
            '.menu-list-sidemenu': {
                height: 'calc(100vh - 150px)',
                overflowY: 'auto',
                overflowX: 'hidden',
            },
            '.menu-list-sidemenu.custom-scrollbar::-webkit-scrollbar': {
                width: '4px',
                height: '5px'
            },
            '.menu-list-sidemenu.custom-scrollbar::-webkit-scrollbar-track': {
                background: '#ffffff',
                borderRadius: '0'
            },
            '.menu-list-sidemenu.custom-scrollbar::-webkit-scrollbar-thumb': {
                background: '#ffffff',
                borderRadius: '0'
            },
            '.menu-list-sidemenu.custom-scrollbar::-webkit-scrollbar-thumb:hover': {
                backgroundColor: '#49484c !important',
            },
            '.menu-list-sidemenu .nav-item': {
                display: 'block',
                padding: 0,
                marginBottom: '8px',
            },
            '.menu-list-sidemenu .nav-item a': {
                marginLeft: '15px',
                marginRight: '15px',
                paddingLeft: '25px',
                paddingRight: '25px',
                width: '195px',
                paddingTop: '15px',
                paddingBottom: '15px',
                color: '#9899ac',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'left',
                backgroundColor: 'transparent',
            },
            '.menu-list-sidemenu .nav-item a:hover,.menu-list-sidemenu .nav-item a.active': {
                backgroundColor: '#fff3de !important',
                borderRadius: '10px',
            },
            '.menu-list-sidemenu .nav-item a span': {
                color: '#9899ac',
                fontWeight: '600',
                fontSize: '14px',
                display: 'block',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
            },
            '.menu-list-sidemenu .nav-item a:hover span,.menu-list-sidemenu .nav-item a.active span': {
                color: '#49484c',
            },
            '.menu-list-sidemenu .nav-item a:hover .chakra-icon,.menu-list-sidemenu .nav-item a.active .chakra-icon': {
                color: '#FFA300',
            },
            '.content-wrapper': {
                width: '100%',
                overflowX: 'hidden',
                display: 'flex',
                flexDirection: 'column',
            },
            '.content-wrapper .top-header': {
                height: '100px',
                marginBottom: '10px',
                paddingTop: '20px',
            },
            '.content-wrapper .top-header nav': {
                border: '1px solid #f2f2f2',
                boxShadow:'0 10px 30px 0 rgba(82,63,105,.05)',
                height: '4.375rem',
                position: 'relative',
                padding: '.5rem 1rem'
            },
            '.main-body-sec': {
                height: 'calc(100vh - 203px)',
            },
            '.custom-scroll': {
                '&::-webkit-scrollbar': {
                    width: '4px',
                },
                '&::-webkit-scrollbar-track': {
                    width: '6px',
                },
                '&::-webkit-scrollbar-thumb': {
                    background: 'transparent',
                    borderRadius: '24px',
                },
                '&:hover::-webkit-scrollbar-thumb': {
                    background: 'grey',
                },
            },
            '.building-option': {
                backgroundColor: '#FAFAFA !important',
                borderColor: '#FAFAFA !important',
                color: '#000000',
                fontSize: '14px !important',
                fontWeight: 500,
                borderRadius: '5px !important',
                minWidth: '250px !important',
                maxWidth: '250px',
                whiteSpace: 'nowrap',
                overflow: 'hidden !important',
                textOverflow: 'ellipsis',
                boxShadow: 'none',
            },
            '.avatar-name': {
                color: '#858796',
                fontFamily: 'body',
                "@media (min-width: 992px)": {
                    marginLeft: '15px',
                    marginRight: '15px',
                },
            },
            'span.notif-icon p.chakra-text': {
                position: 'absolute',
                left: '13px',
                top: '-9px',
                backgroundColor: '#FE7C96',
                borderRadius: '50px',
                color: '#fff',
                fontSize: '10px',
                fontWeight: 500,
                height: '20px',
                width: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
            '.my-activity-card': {
                'p.chakra-text': {
                    fontWeight: '600',
                    fontSize: '15px',
                    color: mode('black', 'white')(props),
                },
                'h2.chakra-text': {
                    fontWeight: '700',
                    fontSize: '25px',
                    color: '#575050', 
                },
            },
            // '.top-header .chakra-menu__menu-button::before': {
            //     content: '""',
            //     position: 'absolute',
            //     borderLeft: '1px solid #DDDDDD',
            //     display: 'inline-block',
            //     height: '35px',
            //     left: '8px',
            //     top: '3px',
            // },
        }),
    },
});