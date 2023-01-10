import { createSlice } from '@reduxjs/toolkit';

const notebookSlice = createSlice({
  name: 'notebook',
  initialState: {
    notebooks: [],
    sortByDateAsc: true,
    sortByTitleAsc: true,
    sortByBodyAsc: true,
  },
  reducers: {
    setNotebooks(state, action) {
      const notebooks = action.payload;
      state.notebooks = notebooks;
    },
    sortNotebooks(state, action) {
      const sort = action.payload;

      if (sort === 'date') {
        state.notebooks.sort((a, b) => {
          if (state.sortByDateAsc)
            return new Date(a.createdAt) - new Date(b.createdAt);

          return new Date(b.createdAt) - new Date(a.createdAt);
        });
        state.sortByDateAsc = !state.sortByDateAsc;
      }

      if (sort === 'title') {
        state.notebooks.sort((a, b) => {
          if (state.sortByTitleAsc)
            return String(a.title).localeCompare(b.title);

          return String(b.title).localeCompare(a.title);
        });
        state.sortByTitleAsc = !state.sortByTitleAsc;
      }

      if (sort === 'body') {
        state.notebooks.sort((a, b) => {
          if (state.sortByBodyAsc) return String(a.body).localeCompare(b.body);

          return String(b.body).localeCompare(a.sortByBodyAsc);
        });
        state.sortByBodyAsc = !state.sortByBodyAsc;
      }
    },
    deleteNotebook(state, action) {
      state.notebooks = state.notebooks.filter(
        (notebook) => notebook._id !== action.payload
      );
    },
    getNotebook(state, action) {
      return state.notebooks.find((notebook) => notebook._id === action.id);
    },
  },
});

export const notebookActions = notebookSlice.actions;
export default notebookSlice;
