import React from "react";
import { Button } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";

const TopToBottom = () => {
  return (
    <a href="#home">
      <Button float={"left"} marginLeft={"6"} marginBottom={"3"}>
        {" "}
        <ArrowUpIcon />
      </Button>
    </a>
  );
};

export default TopToBottom;
