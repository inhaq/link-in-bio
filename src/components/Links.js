import React, {useState} from 'react';
import {Box, Flex, Link, Image, useDisclosure, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton, Button, Text} from "@chakra-ui/react";
import {BsChevronRight, BsFacebook, BsLink, BsTwitter, BsWhatsapp} from "react-icons/bs";


const Links = ({userData}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedItem, setSelectedItem] = useState({})

    return (
        <Flex>
            {userData && (
                <Flex flexDir={"column"} mt={7}>
                    {userData.map((leafItem, leafIndex) => (
                        <Flex key={leafIndex}  justify={"center"} alignItems={"center"} bg={"white"} borderRadius={"50px"} h={"55px"} mb={4} _hover={{ boxShadow: "4px 5px 15px #b3b38f"}} >
                            <Box key={leafIndex}>
                                <Link href={leafItem.url} w={"640px"} target={"_blank"} display={"flex"} _hover={{textDecoration: "none"}}  alignItems={"center"} flexDir={"row-reverse"} justifyContent={"flex-end"}>
                                    <Box as={"h3"} w={"100%"} textAlign={"center"} fontWeight={"500"}>{leafItem.title}</Box>
                                    {leafItem.img && <Image src={leafItem.img} alt={leafItem.title} m={"5px 10px"} maxW={"40px"} maxH={"40px"} borderRadius={"50px"} />}
                                </Link>
                            </Box>

                            <Box key={leafItem.url} onClick={() => {
                                setSelectedItem(leafItem)
                                onOpen()
                            }} >
                                <Box borderRadius={"50%"} padding={"8px"} opacity={"0.5"} cursor={"pointer"} mt={"-10px"} mr={"10px"} mb={"-10px"} _hover={{ background: "gray.200", opacity: "0.75"}}>
                                    <BsLink fontSize={"25px"} background={"#edf2f6"} fontWeight={400} />
                                </Box>
                            </Box>

                            <Modal isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay opacity={"0.5 !important"} />
                                <ModalContent>
                                    <ModalHeader m={"0 auto"} fontWeight={600} fontSize={18}>Share this link</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody p={"0 10px"}>
                                        <Link display={"flex"} as={"a"} href={`https://www.facebook.com/sharer.php?u=${selectedItem.url}`} target={"_blank"} justifyContent={"space-between"} alignItems={"center"} borderRadius={"10px"}  mt={2} pr={2} _hover={{background: "#d3d3d37d", cursor: "pointer"}}>
                                            <Flex alignItems={"center"} p={15} >
                                                <BsFacebook size={30} color={"#3b5998"} />
                                                <Text as={"p"} fontSize={16} fontWeight={500} ml={5}>
                                                    Share on Facebook
                                                </Text>
                                            </Flex>
                                            <BsChevronRight size={20} />
                                        </Link>
                                        <Link display={"flex"} as={"a"} href={`https://twitter.com/intent/tweet?text=Check out this! - ${selectedItem.url}`} target={"_blank"} justifyContent={"space-between"} alignItems={"center"} mt={2} borderRadius={"10px"}  mt={2} pr={2} _hover={{background: "#d3d3d37d", cursor: "pointer"}}>
                                            <Flex alignItems={"center"} p={15}>
                                                <BsTwitter size={30} color={"#26a7de"} />
                                                <Text as={"p"} fontSize={16} fontWeight={500} ml={5}>
                                                    Share on Twitter
                                                </Text>
                                            </Flex>
                                            <BsChevronRight size={20} />
                                        </Link>
                                        <Link display={"flex"} as={"a"} justifyContent={"space-between"} href={`https://api.whatsapp.com/send/?text=${selectedItem.title} - ${selectedItem.url}`} target={"_blank"} alignItems={"center"} mt={2} mb={5} borderRadius={"10px"}  mt={2} pr={2} _hover={{background: "#d3d3d37d", cursor: "pointer"}}>
                                            <Flex alignItems={"center"} p={15}>
                                                <BsWhatsapp size={30} color={"#25D366"}  />
                                                <Text as={"p"} fontSize={16} fontWeight={500} ml={5}>
                                                    Share on WhatsApp
                                                </Text>
                                            </Flex>

                                            <BsChevronRight size={20} />
                                        </Link>
                                    </ModalBody>
                                </ModalContent>
                            </Modal>
                        </Flex>
                    ))}
                </Flex>
            )}
        </Flex>
    );
};

export default Links;