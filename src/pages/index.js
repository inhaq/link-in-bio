import React from 'react';
import {Box, Flex, Link} from "@chakra-ui/react";

const HomePage = () => {
    return (
        <Flex alignItems={"center"} textAlign={"center"} flexDir={"column"} justifyContent={"center"} minH={"100vh"}
              background={"whatsapp.900"}>
            <Flex flexDir={"column"} mt={"-150px"}>
                <Box as={"h1"} fontSize={"60px"} fontWeight={"600"} color={"#44e660"}>LinkTree</Box>
                <Box as={"h3"} fontSize={"40px"} color={"khaki"}>Everything in one link</Box>
            </Flex>
            <Box as={"p"} fontSize={"26px"} mt={20} color={"khaki"}>Example profiles:</Box>
            <Link as={"a"} fontSize={"18px"} color={"teal.200"} href={"./inzi"}>Inzi 👨🏻‍💻</Link>
            <Link as={"a"} fontSize={"18px"} color={"teal.200"} href={"./dan"}>Dan 🔥</Link>
            <Box as={"p"} fontSize={"16px"} mt={8} color={"khaki"} maxW={"300px"}>Create your own account just by adding
                to data.json file in <Link as={"a"} color={"teal.200"}
                                           href={"https://github.com/inhaq/link-in-bio"}> Repo</Link></Box>
        </Flex>

    );
}
export default HomePage;