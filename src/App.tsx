import { Provider } from "react-redux";
import store from "./store/store";
import { Container, Typography } from "@mui/material";
import AddHabitForm from "./components/add-habit-form";
import HabitList from "./components/habit-list";
import HabitStats from "./components/habits-stats";

function App() {
  return (
    <>
      <Provider store={store}>
        <Container>
          <Typography component="h1" variant="h2" align="center">
            Habit Tracker
          </Typography>
          <AddHabitForm/>
          <HabitList/>
          <HabitStats/>
        </Container>
       
      </Provider>
    </>
  );
}

export default App;