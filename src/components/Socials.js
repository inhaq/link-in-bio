import React from 'react';
import {Box, Flex} from "@chakra-ui/react";
import {BsLinkedin, BsTwitter, BsGithub} from "react-icons/bs";

const Socials = ({userData}) => {
    return (
        <Flex justifyContent={"center"} maxW={"200px"} m={"0 auto"}>
            {userData.socials && (
                <Flex flexDir={"row"} width={"150px"} justify={"space-around"}>
                    {Object.keys(userData.socials).map((key) => (
                        <Flex key={key}>
                            { key && key == "github" && <a href={userData.socials[key]}><BsGithub fontSize={"30px"}  /></a>}
                            { key && key == "twitter" && <a href={userData.socials[key]}><BsTwitter fontSize={"30px"} color={"#26a7de"} /></a>}
                            { key && key == "linkedin" && <a href={userData.socials[key]}><BsLinkedin fontSize={"30px"} color={"#0077b5"} /></a>}
                        </Flex>
                    ))}
                </Flex>
            )}
        </Flex>
    );
};

export default Socials;