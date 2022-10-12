import { Link, Icon, Text, HStack, Tooltip, Box, Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { Instance } from '../types/proxyResponse';


interface Props {
    instance: Instance,
    addUrl?: boolean,
    isBig?: boolean,
}

const ICONS: Record<string, React.FunctionComponent<React.SVGAttributes<SVGElement>>> = {
  'xdai/mainnet': require('icons/networks/icons/xdai.mainnet.svg'),
  'eth/mainnet': require('icons/networks/icons/eth.mainnet.svg'),
  'poa/core': require('icons/networks/icons/poa.core.svg'),
  'poa/local': require('icons/networks/icons/poa.core.svg'),
  'poa/sokol': require('icons/networks/icons/poa.sokol.svg'),
  'optimism/bedrock-alpha': require('icons/networks/icons/optimism.bedrock-alpha.svg'),
  'optimism/goerli': require('icons/networks/icons/optimism.goerli.svg'),
};
const DEFAULT_ICON = require('icons/networks/icons/placeholder.svg')


const LOGOS: Record<string, React.FunctionComponent<React.SVGAttributes<SVGElement>>> = {
  'xdai/mainnet': require('icons/networks/logos/xdai.mainnet.svg'),
  'eth/mainnet': require('icons/networks/logos/eth.mainnet.svg'),
  'poa/core': require('icons/networks/logos/poa.core.svg'),
  'poa/local': require('icons/networks/logos/poa.core.svg'),
  'poa/sokol': require('icons/networks/logos/poa.sokol.svg'),
  'lukso/l14': require('icons/networks/logos/lukso.l14.svg'),
  'shibuya/mainnet': require('icons/networks/logos/shibuya.mainnet.svg'),
  'astar/mainnet': require('icons/networks/logos/astar.mainnet.svg'),
  'rsk/mainnet': require('icons/networks/logos/rsk.mainnet.svg'),
  'shiden/mainnet': require('icons/networks/logos/shiden.mainnet.svg'),  
}

const DEFAULT_LOGO = require('icons/networks/logos/blockscout.svg')

export const Network = ({instance, addUrl = false, isBig = false}: Props) => {
    let network_icon = ICONS[instance.id] || DEFAULT_ICON;
    let network_logo = LOGOS[instance.id] || DEFAULT_LOGO;
    let network = null;
    if (isBig) {
        network = <Flex width="350px" flexDirection="column" justifyContent="center" alignItems="center" background="#edf2f7" borderRadius="20px" padding="5px 15px">
            <HStack> 
                <Icon as={network_logo} boxSize={16}/> <Text color="gray.500">{instance.title}</Text>
            </HStack>
        </Flex>
    } else {
        network = <Flex height="75px" width="200px" flexDirection="column" justifyContent="center" alignItems="center" justifyItems="center">
        <HStack> <Icon as={network_icon} boxSize={8}/> <Text>{instance.title}</Text></HStack>
        </Flex>
    }
    
    if (addUrl) {
        return <Link href={addUrl ? instance.url : ""}>{network}</Link>
    } else {
        return network
    }
}