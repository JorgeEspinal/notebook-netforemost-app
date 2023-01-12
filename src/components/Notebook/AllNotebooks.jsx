import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotebookData } from '../../store/notebook-actions';
import NotebookTable from './NotebookTable';
import SearchNotebook from './SearchNotebook';

const AllNotebooks = () => {
  const dispatch = useDispatch();
  const notebooks = useSelector((state) => state.notebook.notebooks);

  useEffect(() => {
    dispatch(fetchNotebookData());
  }, [dispatch]);

  return (
    <>
      <SearchNotebook />
      <NotebookTable notebooks={notebooks} />
    </>
  );
};

export default AllNotebooks;
