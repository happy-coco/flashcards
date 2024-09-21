import { createSlice } from "@reduxjs/toolkit";

export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    // Define the addQuiz action
    addQuiz: (state, action) => {
      const { id } = action.payload;
      state.quizzes[id] = action.payload;
    }
  }
});

// Selector to select topics from the state
export const selectQuizzes = (state) => state.quizzes.quizzes;
// Export the action creator and reducer
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
