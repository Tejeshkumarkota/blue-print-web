import { Spinner } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

export const CustomLoader = () => {
    return <>
        <Box
            mb={7}
            display='flex'
            justifyContent='center'
            alignItems='center'
            h='100vh'
        >
            <Spinner label='Loading...' size="xl" thickness="4px" emptyColor="#68676b" color="#f6a41c"/>
        </Box>
    </>;
};


export const CustomLoaderCompact = () => {
    return <>
        <Box
            mb={7}
            display='flex'
            justifyContent='center'
            alignItems='center'
            h='100vh'
        >
            <Spinner label='Loading...' thickness="4px" emptyColor="#68676b" color="#f6a41c" size="md" />
        </Box>
    </>;
};
