import { VStack } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import HeadApp from '../layouts/HeaderApp';

function App() {
  return (
    <VStack p={4}>
      <HeadApp />
      <Outlet />
    </VStack>
  );
}

export default App;
