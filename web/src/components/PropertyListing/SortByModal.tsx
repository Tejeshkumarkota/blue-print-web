import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import React from "react";

const SortByModal = ({ isSortByOpen, isSortByOpenFun }) => {
  const [value, setValue] = React.useState("0");

  return (
    <>
      <Modal isOpen={isSortByOpen} onClose={isSortByOpenFun}>
        <ModalOverlay />
        <ModalContent borderRadius="12px">
          <ModalHeader px="6" borderRadius="12px 12px 0 0">
            Sort by{" "}
          </ModalHeader>
          <ModalCloseButton top="15px" right="15px" />
          <ModalBody
            bg="gray.50"
            borderRadius="0 0 12px 12px"
            p="0"
            className="modal_check"
          >
            <RadioGroup onChange={setValue} value={value}>
              <Box
                fontSize="15"
                color="gray.900"
                fontWeight="500"
                borderBottom="1px solid"
                borderBottomColor="gray.200"
              >
                <Radio value="0" px="6" py="4" w="100%">
                  All
                </Radio>
              </Box>
              <Box
                fontSize="15"
                color="gray.900"
                fontWeight="500"
                borderBottom="1px solid"
                borderBottomColor="gray.200"
              >
                <Radio value="1" px="6" py="4" w="100%">
                  Price : Low to High
                </Radio>
              </Box>
              <Box
                fontSize="15"
                color="gray.900"
                fontWeight="500"
                borderBottom="1px solid"
                borderBottomColor="gray.200"
              >
                <Radio value="2" px="6" py="4" w="100%">
                  Price : High to Low
                </Radio>
              </Box>
              <Box
                fontSize="15"
                color="gray.900"
                fontWeight="500"
                borderBottom="1px solid"
                borderBottomColor="gray.200"
              >
                <Radio value="3" px="6" py="4" w="100%">
                  Size : Low to High
                </Radio>
              </Box>
              <Box
                fontSize="15"
                color="gray.900"
                fontWeight="500"
                borderBottom="1px solid"
                borderBottomColor="gray.200"
              >
                <Radio value="4" px="6" py="4" w="100%">
                  Size : High to Low
                </Radio>
              </Box>
              <Box
                fontSize="15"
                color="gray.900"
                fontWeight="500"
                borderBottom="1px solid"
                borderBottomColor="gray.200"
              >
                <Radio value="5" px="6" py="4" w="100%">
                  Bedrooms : Many to Few
                </Radio>
              </Box>
              <Box fontSize="15" color="gray.900" fontWeight="500">
                <Radio value="6" px="6" py="4" w="100%">
                  Bedrooms : Few to Many
                </Radio>
              </Box>
            </RadioGroup>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SortByModal;
