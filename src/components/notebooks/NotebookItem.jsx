import { HStack, IconButton, Td, Tr } from '@chakra-ui/react';
import { FaTrash, FaPen } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const NotebookItem = (props) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    props.onDelete(props.id);
  };

  const handleToEdit = () => {
    navigate(`/notebook?action=edit&id=${props.id}`);
  };

  return (
    <>
      <Tr>
        <Td>{props.date}</Td>
        <Td>
          {props.title.length > 20
            ? props.title.substring(0, 20) + '...'
            : props.title}
        </Td>
        <Td>
          {props.body.length > 30
            ? props.body.substring(0, 30) + '...'
            : props.body}
        </Td>
        <Td alignSelf="stretch">
          <HStack>
            <IconButton
              colorScheme="blue"
              icon={<FaPen />}
              isRound
              onClick={handleToEdit}
            />
            <IconButton
              colorScheme="blue"
              icon={<FaTrash />}
              isRound
              onClick={handleDelete}
            />
          </HStack>
        </Td>
      </Tr>
    </>
  );
};

export default NotebookItem;
