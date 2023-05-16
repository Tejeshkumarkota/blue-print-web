import { CustomLoaderCompact } from "@/constants/helpers/customLoaderHelper";
import { Alert, AlertIcon } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'

export const LoadingErrorAlert = ({ loading, loadingError }: any) => {
    if (loading)
        return <>
            <CustomLoaderCompact />
        </>
    else if (loadingError)
        return <>
            <Stack spacing={3}>
                <Alert status='error'>
                    {loadingError}
                </Alert>
            </Stack>
        </>
    else
        return <></>
};

export const LoadingSubmitAlert = ({ submitStatus }: any) => {
    if (!submitStatus.loading && submitStatus?.error)
        return <>
            <Stack spacing={3}>
                <Alert status='error'>
                    <AlertIcon />
                    {submitStatus?.message}
                </Alert>
            </Stack>
        </>
    return <></>
};