import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {}
  },
  reducers: {
    // Define the addTopic action
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id: id,
        name: name,
        icon,
        quizIds: []
      };
    }
  },
  extraReducers: {
    "quizzes/addQuiz": (state, action) => {
      const { topicId, id } = action.payload;
      state.topics[topicId].quizIds.push(id);
    }
  }
});

// Selector to select topics from the state
export const selectTopics = (state) => state.topics.topics;
// Export the action creators and reducer
export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;
