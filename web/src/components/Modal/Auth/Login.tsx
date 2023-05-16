import { authModalState, authState } from "@/atmos/authModalAdon";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState, useRecoilState } from "recoil";
import useTranslation from "next-translate/useTranslation";
import { login } from "../../../constants/axios/apis";
type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
    const { t } = useTranslation();
    const setAuthModalState = useSetRecoilState(authModalState);
    const [authStateStatus, setAuthStateStatus] = useRecoilState(authState);
    const [modalState, setModalState] = useRecoilState(authModalState);
    const [LoginForm, setLoginForm] = useState({
        username: "",
        password: "",
    });
    const [formError, setFormError] = useState("");
    const [error, setError] = useState("");
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        setError("");
        event.preventDefault();
        if (formError) setFormError("");
        if (!LoginForm.username.includes("@")) {
            return setFormError("Please enter a valid username");
        }
        login(LoginForm).then((response: any) => {
            if (response?.status == 200 && response?.data?.errorCode == 0) {
                setModalState((prev) => ({
                    ...prev,
                    open: false,
                }));
                setAuthStateStatus({
                    loggedIn: true,
                    username: response?.data?.data?.userProfile?.first_name,
                    data: response?.data?.data,
                });
            } else if (
                response?.status == 200 &&
                response?.data?.errorCode == 1
            ) {
                setError(response?.data?.errorDescription);
            } else {
                setError("Some thing went wrong, Please try again.");
            }
        });
    };

    const onChange = ({
        target: { name, value },
    }: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <form onSubmit={onSubmit}>
            <Input
                required
                name="username"
                placeholder="Email"
                type="username"
                onChange={onChange}
                mb={2}
                fontSize="10pt"
                _placeholder={{ color: "gray.500" }}
                _hover={{
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500",
                }}
                _focus={{
                    outline: "none",
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500",
                }}
                bg="gray.50"
            />
            <Input
                required
                name="password"
                placeholder="Password"
                type="password"
                onChange={onChange}
                fontSize="10pt"
                _placeholder={{ color: "gray.500" }}
                _hover={{
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500",
                }}
                _focus={{
                    outline: "none",
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500",
                }}
                bg="gray.50"
            />
            <Button type="submit" width="100%" height="36px" mt={2} mb={2} variant="primary">
                {t("login")}
            </Button>
            {error && <Text color="red">{error}</Text>}
            <Flex fontSize="9pt" justifyContent="center">
                <Text mr={1}>{t("New user ?")}</Text>
                <Text
                    color="blue.500"
                    fontWeight={700}
                    cursor="pointer"
                    onClick={() =>
                        setAuthModalState((prev) => ({
                            ...prev,
                            view: "Sign Up",
                        }))
                    }
                >
                    {t("common:signup")}
                </Text>
            </Flex>
        </form>
    );
};
export default Login;
