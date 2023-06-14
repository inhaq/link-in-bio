import React from 'react'
import {Box, Flex} from "@chakra-ui/react"

import UserProfile from "@/components/UserProfile";
import ShareTree from "@/components/ShareTree";
import Socials from "@/components/Socials";
import Links from "@/components/Links";

export default function Page({userData}) {

    return (
        <Flex h={"100%"} minH={"100vh"} justify={"center"} bgGradient={userData.bgImg}>
            <Box>
                <Flex maxW={"600px"} justify={"center"} m={"0 auto"}>
                    <Box>
                        <ShareTree/>
                        <UserProfile userData={userData}/>
                        <Socials userData={userData}/>
                        <Links userData={userData.leaf}/>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
}

export async function getStaticPaths() {
    const apiUrl = process.env.NODE_ENV === 'production'
        ? process.env.NEXT_PUBLIC_API_URL_PROD
        : process.env.NEXT_PUBLIC_API_URL_DEV;
    const response = await fetch(  `${apiUrl}`);
    let links = await response.json();
    links = process.env.NODE_ENV === 'development' ? JSON.parse(links): links;
    const paths = links.map((link) => ({
        params: {slug: link.userName},
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({params}) {
    const apiUrl = process.env.NODE_ENV === 'production'
        ? process.env.NEXT_PUBLIC_API_URL_PROD
        : process.env.NEXT_PUBLIC_API_URL_DEV;
    const response = await fetch(  `${apiUrl}`);
    let links = await response.json();
    links = process.env.NODE_ENV === 'development' ? JSON.parse(links): links;
    const userData = links.find((link) => link.userName == params.slug);
    return {
        props: {
            userData,
        },
    };
}