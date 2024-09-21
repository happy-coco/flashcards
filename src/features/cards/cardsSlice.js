import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: {}
  },
  reducers: {
    // Define the addTopic action
    addCard: (state, action) => {
      const { id } = action.payload;
      state.cards[id] = action.payload;
    }
  }
});

// Export the action creator and reducer
export const { addCard } = cardsSlice.actions;
// Selector to select topics from the state
export const selectCardById = (id) => (state) => state.cards.cards[id];
export default cardsSlice.reducer;
