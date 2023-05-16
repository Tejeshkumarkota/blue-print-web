import { authState } from '@/atmos/authModalAdon';
import { Box, Flex, Table, TableContainer, Tbody, Td, Text, Tr } from '@chakra-ui/react';
import React from 'react';
import { useRecoilValue } from 'recoil';

type profileProps = {

};

const profile: React.FC<profileProps> = () => {

    const authStateStatus = useRecoilValue(authState);
    const userData = authStateStatus?.data?.userProfile
    return (
        <>
            <Flex alignItems={'center'}>
                <Box>
                    { authStateStatus?.loggedIn &&
                        <TableContainer>
                            <Table variant='simple'>
                                <Tbody>
                                    <Tr>
                                        <Td>First Name:</Td>
                                        <Td>{userData?.first_name}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Last Name:</Td>
                                        <Td>{userData?.last_name}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Emirates Id:</Td>
                                        <Td>{userData?.emirates_id}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Mobile Number:</Td>
                                        <Td>{userData?.phone?.includes('+') ? userData?.phone : (userData?.phone_code ? userData?.phone_code : '') + userData?.phone}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Email Address:</Td>
                                        <Td>{userData?.email}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Alternate Contact No.:</Td>
                                        <Td>{userData?.alternate_no}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Emergency Contact Name:</Td>
                                        <Td>{userData?.emergency_contact_name}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Emergency Contact No.:</Td>
                                        <Td>{userData?.emergency_contact_no}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Preferred Language:</Td>
                                        <Td>{userData?.preferred_language === 1 ? 'English' : 'العربية'}</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    }
                </Box>
            </Flex>
        </>
    )
}
export default profile;