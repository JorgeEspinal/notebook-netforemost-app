import { configureStore } from '@reduxjs/toolkit';
import notebookSlice from './notebook-slice';
import uiSlice from './ui-slice';

export default configureStore({
  reducer: {
    notebook: notebookSlice.reducer,
    ui: uiSlice.reducer,
  },
});
