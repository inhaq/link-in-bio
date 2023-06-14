import React from 'react';
import {Flex, Link} from "@chakra-ui/react";
import {BsLinkedin, BsTwitter, BsGithub} from "react-icons/bs";

const Socials = ({userData}) => {
    return (
        <Flex justifyContent={"center"} maxW={"200px"} m={"0 auto"}>
            {userData.socials && (
                <Flex flexDir={"row"} width={"150px"} justify={"space-around"}>
                    {Object.keys(userData.socials).map((key) => (
                        <Flex key={key}>
                            { key && key == "github" && <Link href={userData.socials[key]} target={"_blank"} opacity={"0.33"} _hover={{opacity: "1"}}><BsGithub fontSize={"30px"} /></Link>}
                            { key && key == "twitter" && <Link href={userData.socials[key]} target={"_blank"} opacity={"0.33"} _hover={{color:"#26a7de", opacity: "1"}}><BsTwitter fontSize={"30px"} /></Link>}
                            { key && key == "linkedin" && <Link href={userData.socials[key]} target={"_blank"} opacity={"0.33"} _hover={{color:"#0077b5", opacity: "1"}}><BsLinkedin fontSize={"30px"}  /></Link>}
                        </Flex>
                    ))}
                </Flex>
            )}
        </Flex>
    );
};

export default Socials;