import { authModalState } from "@/atmos/authModalAdon";
import {
    Flex,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalHeader,
    ModalOverlay
} from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import { useRecoilState } from "recoil";
import AuthInputs from "./AuthInputs";

const AuthModal = () => {
    const { t } = useTranslation();
    const [modalState, setModalState] = useRecoilState(authModalState);
    const handleClose = () => {
        setModalState((prev) => ({
            ...prev,
            open: false,
        }));
    };
    return (
        <>
            <Modal isOpen={modalState.open} onClose={handleClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign="center">
                        {modalState.view === "Login" && t("common:login")}
                        {modalState.view === "Sign Up" && t("common:signup")}
                        {modalState.view === "resetPassword" &&
                            "Reset Password"}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        pb={6}
                    >
                        <Flex
                            direction="column"
                            align="center"
                            justify="center"
                            width="70%"
                        >
                            <AuthInputs />
                        </Flex>
                    </ModalBody>

                    {/* <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="ghost">Secondary Action</Button>
                    </ModalFooter> */}
                </ModalContent>
            </Modal>
        </>
    );
};
export default AuthModal;
