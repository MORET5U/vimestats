import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  VStack,
} from "@chakra-ui/react";
import { FC, Fragment } from "react";
import { IUserStatsGroup } from "vime-types/models/Stats";
import Annihilation from "./PlayerStats/Annihilation";
import BedWars from "./PlayerStats/BedWars";

interface StatGroupProps {
  title: string;
}

const StatGroup: FC<StatGroupProps> = ({ title, children }) => (
  <AccordionItem>
    <AccordionButton>
      <Box flex="1" textAlign="left" fontWeight="bold">
        {title}
      </Box>
      <AccordionIcon />
    </AccordionButton>
    <AccordionPanel pb={4}>{children}</AccordionPanel>
  </AccordionItem>
);

const PlayerStats: FC<IUserStatsGroup> = ({ ANN, BW }) => {
  return (
    <Fragment>
      <Box w="100%" mb="8px">
        <VStack align="stretch" spacing={2}>
          <Accordion allowToggle allowMultiple>
            <StatGroup title="Annihilation">
              <Annihilation ANN={ANN} />
            </StatGroup>

            <StatGroup title="BedWars">
              <BedWars BW={BW} />
            </StatGroup>
          </Accordion>
        </VStack>
      </Box>
    </Fragment>
  );
};

export default PlayerStats;
