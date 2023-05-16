import { authModalState, authState } from "@/atmos/authModalAdon";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRecoilValue, useSetRecoilState } from "recoil";
// export async function getStaticProps({ locale }: any) {
//     return {
//         props: {
//             ...(await serverSideTranslations(locale)),
//             // Will be passed to the page component as props
//         },
//     };
// } 
const AuthButtons = (props: any) => {
    const { t } = useTranslation();
    let router = useRouter();
    const { locale, locales } = router;
    let currLang = locale;
    const setAuthModalState = useSetRecoilState(authModalState);
    const authStateStatus = useRecoilValue(authState);
    useEffect(() => {
        document.body.dir = locale === "ar" ? "rtl" : "ltr" || "ltr";
        // document.title = t('app_title')
    }, [locale]);
    return (
        <>
            <Button  className="arabic-btn" variant="primary" px={5} py={2} mr={4}>
                {" "}
                {router?.locales?.map((locale) => {
                    if (currLang != locale)
                        return (
                            <Link key={locale} href={router.asPath} locale={locale}>
                                {/* {locale} */}

                                {locale === "en" ? "English" : "عربی"}
                            </Link>
                        );
                })}
            </Button>
            {!authStateStatus?.loggedIn && (
                <Button
                    className="log-ar"
                    display={{ base: "none", sm: "flex" }}
                    mr={0}
                    px={5} py={2}
                    variant="primary"
                    onClick={() =>
                        setAuthModalState({ open: true, view: "Login" })
                    }
                >
                    {t("common:login")}
                </Button>
            )}
        </>
    );
};
export default AuthButtons;
