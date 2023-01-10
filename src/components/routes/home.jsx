import { Stack, Skeleton } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotebookData } from '../../store/notebook-actions';
import NotebookTable from '../notebooks/NotebookTable';
import SearchControl from '../notebooks/searchControl';

const Home = () => {
  const dispatch = useDispatch();
  const notebooks = useSelector((state) => state.notebook.notebooks);

  useEffect(() => {
    dispatch(fetchNotebookData());
  }, [dispatch]);

  return (
    <>
      <SearchControl />
      <NotebookTable notebooks={notebooks} />
    </>
  );
};

export default Home;
