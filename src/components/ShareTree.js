import React from 'react';
import {
    Button,
    Flex,
    Link,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import {BsChevronRight, BsFacebook, BsTwitter, BsWhatsapp} from "react-icons/bs";
import {useRouter} from "next/router";

const ShareTree = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const router = useRouter();
    let fullUrl;
    if (typeof window !== 'undefined') {
        fullUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
    }
    return (
        <Flex mt={5} justifyContent={"end"}>
            <Button onClick={onOpen} borderRadius={"50%"} pb={"8px"} h={"40px"} w={"20px"} mr={"-50px"}>...</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader m={"0 auto"} fontWeight={600} fontSize={18}>Share this Linktree</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody p={"0 10px"}>
                        <Link display={"flex"} justifyContent={"space-between"} alignItems={"center"}
                              href={`https://www.facebook.com/sharer.php?u=${fullUrl}`} target={"_blank"}
                              borderRadius={"10px"} mt={2} pr={2} _hover={{background: "#d3d3d37d", cursor: "pointer"}}>
                            <Flex alignItems={"center"} p={15}>
                                <BsFacebook size={30} color={"#3b5998"}/>
                                <Text as={"p"} fontSize={16} fontWeight={500} ml={5}>
                                    Share on Facebook
                                </Text>
                            </Flex>
                            <BsChevronRight size={20}/>
                        </Link>
                        <Link display={"flex"} justifyContent={"space-between"} alignItems={"center"}
                              href={`https://twitter.com/intent/tweet?text=Check out this! - ${fullUrl}`}
                              target={"_blank"} mt={2} borderRadius={"10px"} mt={2} pr={2}
                              _hover={{background: "#d3d3d37d", cursor: "pointer"}}>
                            <Flex alignItems={"center"} p={15}>
                                <BsTwitter size={30} color={"#26a7de"}/>
                                <Text as={"p"} fontSize={16} fontWeight={500} ml={5}>
                                    Share on Twitter
                                </Text>
                            </Flex>
                            <BsChevronRight size={20}/>
                        </Link>
                        <Link display={"flex"} justifyContent={"space-between"} alignItems={"center"}
                              href={`https://api.whatsapp.com/send/?text=Check out this! - ${fullUrl}`}
                              target={"_blank"} mt={2} mb={5} borderRadius={"10px"} mt={2} pr={2}
                              _hover={{background: "#d3d3d37d", cursor: "pointer"}}>
                            <Flex alignItems={"center"} p={15}>
                                <BsWhatsapp size={30} color={"#25D366"}/>
                                <Text as={"p"} fontSize={16} fontWeight={500} ml={5}>
                                    Share on WhatsApp
                                </Text>
                            </Flex>
                            <BsChevronRight size={20}/>
                        </Link>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Flex>
    );
};

export default ShareTree;