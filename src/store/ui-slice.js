import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { submitting: false, loading: false, notification: null },
  reducers: {
    setLoading(state) {
      state.loading = !state.loading;
    },
    setSubmitting(state) {
      state.submitting = !state.submitting;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
