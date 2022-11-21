import { createSlice, configureStore } from "@reduxjs/toolkit";
import dataPizzas from "../data/dataPizzas";

const pizzasSlice = createSlice({
  name: "pizzas",
  initialState: dataPizzas,
  reducers: {
    addPizza: (state, action) => {
      const pizza = state.find((element) => element.id === action.payload);
      pizza.numberOfPizza++;
      pizza.currentPrice = pizza.numberOfPizza * pizza.price;
      const totalNumberOfPizza = state.map((el) => {
        return el.numberOfPizza;
      });
      const totalPizzas = totalNumberOfPizza.reduce((acc, x) => {
        return acc + x;
      }, 0);
    },
    deletePizza: (state, action) => {
      const remove = state.find((element) => element.id == action.payload);
      remove.numberOfPizza = 0;
      remove.currentPrice = 0;
      return state;
    },
  },
});

export const { addPizza, deletePizza } = pizzasSlice.actions;

export const store = configureStore({
  reducer: {
    pizzas: pizzasSlice.reducer,
  },
});

// Action creator
// export const pizzaAdd = (id) => {
//   return {
//     type: "pizzas/addPizza",
//     payload: id,
//   };
// };

// export const removePizza = (id) => {
//   return {
//     type: "pizzas/deletePizza",
//     payload: id,
//   };
// };
