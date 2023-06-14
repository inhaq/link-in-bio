import React from 'react';
import {Flex, Image, Text} from '@chakra-ui/react'
import {Box} from "@chakra-ui/react";

const UserProfile = ({userData}) => {
    return (
        <Flex flexDir={"column"} alignItems={"center"}>
            <Box maxW={"100px"}>
                <Image src={userData.userImg} borderRadius={"50%"} alt={userData.userName} width={"100%"}
                       height={"100%"}/>
            </Box>
            <Text mt={3} mb={4} as={"p"} fontWeight={700} fontSize={"20px"} lineHeight={1.5}
                  letterSpacing={3}>@{userData.userName}</Text>
        </Flex>
    );
};

export default UserProfile;