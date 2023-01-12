import { Heading, IconButton } from '@chakra-ui/react';
import { FaSun } from 'react-icons/fa';

const HeaderApp = ({ children }) => {
  return (
    <>
      <IconButton icon={<FaSun />} isRound size="lg" alignSelf="flex-end" />
      <Heading
        mb="8"
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, black, blue.300, blue.500)"
        bgClip="text"
      >
        {children}
      </Heading>
    </>
  );
};

export default HeaderApp;
