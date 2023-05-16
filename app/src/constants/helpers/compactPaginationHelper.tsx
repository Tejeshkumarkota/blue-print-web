import React, { useState, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, MinusIcon } from '@chakra-ui/icons';
import { Stack, Button, Box } from "@chakra-ui/react";

type Props = {
    pageSize: number,
    totalCount: number
    defaultPage: number,
    onPageChange: any,
    loading: boolean
}

const CompactPagination: React.FC<Props> = ({ pageSize, totalCount, defaultPage, onPageChange, loading = false }) => {
    const [startVal, setStartVal] = useState<number>(0)
    const [endVal, setEndVal] = useState<number>(0)
    const [currentPage, setCurrentPage] = useState<number>(defaultPage)
    const [lastPage, setLastPage] = useState<number>(0)

    useEffect(() => {
        setCurrentPage(defaultPage)
    }, [defaultPage])

    useEffect(() => {
        if (totalCount > 0) {
            setStartVal(pageSize * (currentPage - 1) + 1)
            const temp = currentPage * pageSize
            setEndVal(temp > totalCount ? totalCount : temp)
            setLastPage(Math.ceil(totalCount / pageSize))
        }
    }, [totalCount, pageSize])

    useEffect(() => {
        setStartVal(pageSize * (currentPage - 1) + 1)
        const temp = currentPage * pageSize
        setEndVal(temp > totalCount ? totalCount : temp)
        onPageChange(currentPage)
    }, [currentPage])

    const handleBack = () => {
        if (currentPage > 1)
            setCurrentPage((oState) => oState - 1)
    }

    const handleNext = () => {
        if (currentPage < lastPage)
            setCurrentPage((oState) => oState + 1)
    }

    return (
        <>
            <Box className="text-end font-14 text-black py-5 pagination-sec-table">
                <Box>{startVal}</Box>
                <MinusIcon />
                <Box>{endVal}</Box>
                <Box px={1} >of</Box>
                <Box pe={5} >{totalCount}</Box>
                <Stack spacing={4} direction='row' align='center'>
                    {currentPage > 1 && !loading ?
                        <Button colorScheme='blue' border={0} me={5}
                            onClick={handleBack}
                        >
                            <ChevronLeftIcon />
                        </Button>
                        :
                        <Button colorScheme='gray' border={0} me={5} disabled >
                            <ChevronLeftIcon />
                        </Button>
                    }
                </Stack>
                <Box>
                    {currentPage < lastPage && !loading ?
                        <Button colorScheme='blue' border={0}
                            onClick={handleNext}
                        >
                            <ChevronRightIcon />
                        </Button>
                        :
                        <Button colorScheme='gray' border={0} me={5} disabled >
                            <ChevronRightIcon />
                        </Button>
                    }
                </Box>
            </Box>
        </>
    )
}

export { CompactPagination }
