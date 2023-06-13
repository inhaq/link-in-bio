import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton, Button, useDisclosure, Box, Flex, Text,
} from '@chakra-ui/react'
import {BsFacebook, BsTwitter, BsWhatsapp, BsChevronRight } from "react-icons/bs";
const ShareTree = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Flex mt={5} justifyContent={"end"} >
            <Button onClick={onOpen} borderRadius={"50%"} pb={"8px"} h={"35px"} w={"20px"} >...</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader m={"0 auto"} fontWeight={600} fontSize={18}>Share this Linktree</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody p={"0 30px"}>
                        <Flex justifyContent={"space-between"} alignItems={"center"} borderRadius={"10px"}  mt={2} pr={2} _hover={{background: "#d3d3d37d", cursor: "pointer"}}>
                            <Flex alignItems={"center"} p={15} >
                                <BsFacebook size={30} color={"#3b5998"} />
                                <Text as={"p"} fontSize={16} fontWeight={500} ml={5}>
                                    Share on Facebook
                                </Text>
                            </Flex>
                            <BsChevronRight size={20} />
                        </Flex>
                        <Flex justifyContent={"space-between"} alignItems={"center"} mt={2} borderRadius={"10px"}  mt={2} pr={2} _hover={{background: "#d3d3d37d", cursor: "pointer"}}>
                            <Flex alignItems={"center"} p={15}>
                                <BsTwitter size={30} color={"#26a7de"} />
                                <Text as={"p"} fontSize={16} fontWeight={500} ml={5}>
                                    Share on Twitter
                                </Text>
                            </Flex>
                            <BsChevronRight size={20} />
                        </Flex>
                        <Flex justifyContent={"space-between"} alignItems={"center"} mt={2} mb={5} borderRadius={"10px"}  mt={2} pr={2} _hover={{background: "#d3d3d37d", cursor: "pointer"}}>
                            <Flex alignItems={"center"} p={15}>
                                <BsWhatsapp size={30} color={"#25D366"}  />
                                <Text as={"p"} fontSize={16} fontWeight={500} ml={5}>
                                    Share on WhatsApp
                                </Text>
                            </Flex>

                            <BsChevronRight size={20} />
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Flex>
    );
};

export default ShareTree;