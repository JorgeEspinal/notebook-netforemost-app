import { VStack } from '@chakra-ui/react';

const MainLayout = ({ children }) => {
  return <VStack p={4}>{children}</VStack>;
};

export default MainLayout;
