import { Box, BoxProps } from "@chakra-ui/react";
import { FC, Fragment } from "react";

const Paper: FC<BoxProps> = (props) => {
  return (
    <Fragment>
      <Box {...props} w="100%" p={3} borderWidth="1px" borderRadius="md">
        {props.children}
      </Box>
    </Fragment>
  );
};

export default Paper;
