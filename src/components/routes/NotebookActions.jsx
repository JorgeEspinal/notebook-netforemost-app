import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  createNotebookData,
  updateNotebookData,
} from '../../store/notebook-actions';
import NotebookActionsForm from '../notebooks/NotebookActionsForm';

const NotebookActions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const notebook = useSelector((state) =>
    state.notebook.notebooks.find(
      (notebook) => notebook._id === searchParams.get('id')
    )
  );

  const handleEdit = (data) => {
    dispatch(updateNotebookData({ id: notebook._id, notebook: data }));
    navigate('/');
  };

  const handleCreate = (data) => {
    dispatch(createNotebookData(data));
    navigate('/');
  };

  useEffect(() => {
    if (
      searchParams.get('action') !== 'edit' &&
      searchParams.get('action') !== 'new'
    )
      navigate('/');
  }, [searchParams, navigate]);

  return (
    <NotebookActionsForm
      action={searchParams.get('action')}
      notebook={notebook}
      onEdit={handleEdit}
      onCreate={handleCreate}
    />
  );
};

export default NotebookActions;
