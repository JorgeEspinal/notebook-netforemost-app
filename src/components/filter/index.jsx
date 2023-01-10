import { IconButton } from '@chakra-ui/react';
import { FaSort } from 'react-icons/fa';

const Filter = (props) => {
  return (
    <IconButton
      icon={<FaSort />}
      aria-label={props.ariaLabel}
      size="xs"
      onClick={props.handleClick}
    />
  );
};

export default Filter;
