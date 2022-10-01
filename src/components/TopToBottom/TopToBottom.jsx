import React from "react";
import { Button } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";

const TopToBottom = () => {
  return (
    <Button float={"left"} marginLeft={"6"} marginBottom={"3"}>
      <a href="#home">
        {" "}
        <ArrowUpIcon />
      </a>
    </Button>
  );
};

export default TopToBottom;
