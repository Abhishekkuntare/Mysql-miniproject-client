import { Box, Text } from "@chakra-ui/react";
import React from "react";
import "./Banner.css";
import GetStarted from "../GetStarted/GetStarted";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <Box>
          <Text className="banner_title" color={"gray.600"}>
            Employee Management{" "}
          </Text>
          <Text className="banner_title" color={"gray.600"}>
            System
          </Text>
          <div className="banner_font">
            <Text>since 2022</Text>
          </div>
        </Box>
      </div>
      <GetStarted />
    </>
  );
};

export default Banner;
