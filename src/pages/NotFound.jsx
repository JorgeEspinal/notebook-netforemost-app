import { Button, Heading, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleToHome = () => {
    navigate('/');
  };

  return (
    <VStack p={5}>
      <Heading>404 | Page Not found</Heading>
      <Text>You just hit a route that doesn't exist... the sadness.😢</Text>
      <Button colorScheme="blue" onClick={handleToHome}>
        Back to Home
      </Button>
    </VStack>
  );
};

export default NotFound;
