import { authState } from "@/atmos/authModalAdon";
import AuthModal from "@/components/Modal/Auth/AuthModal";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import AuthButtons from "../AuthButtons";
import UserMenu from "./UserMenu";

type RightcontentProps = {};

const Rightcontent: React.FC<RightcontentProps> = () => {
    const authStateStatus = useRecoilValue(authState);
    return (
        <>
            <AuthModal />
            <Flex justify="center" align="center">
                <AuthButtons />
            </Flex>
            {authStateStatus?.loggedIn && (
                <Flex justify="center" align="center">
                    {/* <Icons /> */}
                    <UserMenu />
                </Flex>
            )}
        </>
    );
};
export default Rightcontent;
