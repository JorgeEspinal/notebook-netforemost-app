import config from '../config';
import { notebookActions } from './notebook-slice';
import { uiActions } from './ui-slice';

export const fetchNotebookData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(config.api.url);

      if (!response.ok) throw new Error('Could not fetch notebooks data!');

      return response.json();
    };

    dispatch(uiActions.setLoading());
    try {
      const notebookData = await fetchData();

      dispatch(notebookActions.setNotebooks(notebookData.notebook || []));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: error.message,
        })
      );
    }
    dispatch(uiActions.setLoading());
  };
};

export const createNotebookData = (notebook) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(config.api.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(notebook),
      });

      if (!response.ok) throw new Error('Creating notebook failed.');
    };

    try {
      dispatch(uiActions.setLoading());
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Create notebook successfully!',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: error.message,
        })
      );
    }
    dispatch(uiActions.setLoading());
  };
};

export const updateNotebookData = (data) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(`${config.api.url}/${data.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data.notebook),
      });

      if (!response.ok) throw new Error('Updating notebook failed.');

      return response.json();
    };

    try {
      dispatch(uiActions.setLoading());
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Update notebook successfully!',
        })
      );
      dispatch(fetchNotebookData());
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: error.message,
        })
      );
    }
    dispatch(uiActions.setLoading());
  };
};

export const searchNoteBookData = (data) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `${config.api.url}/search/?${data.type}=${data.value}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          body: null,
        }
      );

      if (!response.ok) throw new Error('Searching notebook failed.');

      return response.json();
    };

    try {
      dispatch(uiActions.setLoading());
      const notebookData = await fetchData();

      dispatch(notebookActions.setNotebooks(notebookData.notebook || []));
    } catch (error) {
      console.log(error);
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: error.message,
        })
      );
    }
    dispatch(uiActions.setLoading());
  };
};

export const deleteNotebook = (id) => {
  return async (dispatch) => {
    const deleteData = async () => {
      const response = await fetch(`${config.api.url}/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Could not delete notebook!');

      return response.json();
    };

    try {
      await deleteData();
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: error.message,
        })
      );
    }
  };
};
