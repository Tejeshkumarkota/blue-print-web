import NoDataFoundImage from '../../../public/images/no-data-found.svg';
import NoDataFoundImageBuilding from "../../../public/images/no-data-found_building.svg";
import Image from 'next/image'
import { Text, Center, Box } from '@chakra-ui/react'

export const NoDataFound = () => {
    return <>
        <Center>
            <Image
                src={NoDataFoundImage} alt="No Data Found" />
        </Center>
    </>;
}

export const NoDataFoundWithBuildingName = (props: any) => {
    return <>
        <Center>
            <Box>
                <Image src={NoDataFoundImageBuilding} alt="No Data Found" />
                <Center>
                    <Text fontSize='xl' color=' #68676b' as='b'> No Data Found {" "} {props?.name} </Text>
                </Center>
            </Box>
        </Center>
    </>;
}

export const NoDataFoundCompact = (props: any) => {
    return <>
        <Center>
            <Image src={NoDataFoundImage} alt="No Data Found" style={{ height: `${props.height}px` }} />
        </Center>
    </>;
}