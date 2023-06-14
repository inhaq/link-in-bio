import { useRouter } from 'next/router'
import React from 'react'
import { Box, Flex } from "@chakra-ui/react"

import UserProfile from "@/components/UserProfile";
import ShareTree from "@/components/ShareTree";
import Socials from "@/components/Socials";
import Links from "@/components/Links";

export default function Page({ userData }) {

    return (
        <Flex h={"100%"} minH={"100vh"} justify={"center"} bgGradient={userData.bgImg}>
            <Box>
                <Flex maxW={"600px"} justify={"center"} m={"0 auto"}>
                    <Box>
                        <ShareTree />
                        <UserProfile userData={userData} />
                        <Socials userData={userData} />
                        <Links userData={userData.leaf} />
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
}

export async function getStaticPaths() {
    const response = await fetch('http://localhost:3000/api/data');
    let links = await response.json();
    links = JSON.parse(links);
    const paths = links.map((link) => ({
        params: { slug: link.userName },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({params}) {
    const response = await fetch(`http://localhost:3000/api/data`);

    let links = await response.json();
    links = JSON.parse(links);
    const userData = links.find((link) => link.userName == params.slug);
    return {
        props: {
            userData,
        },
    };
}