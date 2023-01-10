import {
  Table,
  TableContainer,
  Tbody,
  Tfoot,
  Th,
  Thead,
  Tr,
  Stack,
  Skeleton,
  IconButton,
  TableCaption,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import NotebookItem from './NotebookItem';
import Filter from '../filter';
import { FaSyncAlt } from 'react-icons/fa';
import { notebookActions } from '../../store/notebook-slice';
import {
  deleteNotebook,
  fetchNotebookData,
} from '../../store/notebook-actions';

const NotebookTable = (props) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.ui.loading);

  const sortByDate = () => {
    dispatch(notebookActions.sortNotebooks('date'));
  };

  const sortByTitle = () => {
    dispatch(notebookActions.sortNotebooks('title'));
  };

  const sortByBody = () => {
    dispatch(notebookActions.sortNotebooks('body'));
  };

  const updateTable = () => {
    dispatch(fetchNotebookData());
  };

  const handleDelete = (id) => {
    dispatch(deleteNotebook(id));
    dispatch(fetchNotebookData());
  };

  const skeleton = (
    <Stack>
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
    </Stack>
  );

  const notebooks = props.notebooks.map((notebook) => (
    <NotebookItem
      key={notebook._id}
      id={notebook._id}
      date={new Intl.DateTimeFormat('en-US').format(
        new Date(notebook.createdAt)
      )}
      title={notebook.title}
      body={notebook.body}
      onDelete={handleDelete}
    />
  ));

  return (
    <>
      <TableContainer>
        <Table variant="striped" size={'md'}>
          {props.notebooks.length === 0 && <TableCaption>No data</TableCaption>}
          <Thead>
            <Tr>
              <Th>
                Date{' '}
                <Filter handleClick={sortByDate} ariaLabel="Sort by date" />
              </Th>
              <Th>
                Title{' '}
                <Filter handleClick={sortByTitle} ariaLabel="Sort by title" />
              </Th>
              <Th>
                Body{' '}
                <Filter handleClick={sortByBody} ariaLabel="Sort by body" />
              </Th>
              <Th>
                Actions{' '}
                <IconButton
                  icon={<FaSyncAlt />}
                  aria-label="Update table"
                  size="xs"
                  onClick={updateTable}
                />
              </Th>
            </Tr>
          </Thead>
          <Tbody>{!isLoading && notebooks}</Tbody>
          <Tfoot></Tfoot>
        </Table>
        {isLoading && skeleton}
      </TableContainer>
    </>
  );
};

export default NotebookTable;
