import React from 'react';
import {Flex, Link} from "@chakra-ui/react";

const Links = ({userData}) => {
    return (
        <Flex>
            {userData && (
                <Flex flexDir={"column"}>
                    {userData.map((leafItem, leafIndex) => (
                        <Flex key={leafIndex} background={"white"} p={3} borderRadius={"50px"} boxShadow={"4px 6px 8px black"} mt={5} mb={3} _hover={{transform: "skewY(-1deg)"}}>
                            <Link href={leafItem.url} w={"500px"} display={"flex"} _hover={{textDecoration: "none"}}  alignItems={"center"}>
                                {leafItem.title}
                                {leafItem.img && <img src={leafItem.img} alt={leafItem.title} />}
                            </Link>
                        </Flex>
                    ))}
                </Flex>
            )}
        </Flex>
    );
};

export default Links;