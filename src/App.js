import { createBrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import ReactIndex from "./ReactIndex";
import TrafficLight from "./Traffic_Light/TrafficLight.js";
import Windowconfirm from "./Window_confirm/WindowConfirm.js";
import CustomAccordian from "./Custom_Accordian/CustomAccordian";
import ImageSlider from "./Image_Slider/ImageSlider";
import Commentbox from "./Commentbox_re/Commentbox";
import TodoList from "./Todo_List/Todolist";
import FoodOrdering from "./Food_Ordering/FoodOrdering";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="p-5">
        <Outlet />
      </div>
    </div>
  );
}

const App_router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ReactIndex />,
      },
      {
        path: "trafficlight",
        element: <TrafficLight />,
      },
      {
        path: "windowconfirm",
        element: <Windowconfirm />,
      },
      {
        path: "customaccordian",
        element: <CustomAccordian />,
      },
      {
        path: "imageslider",
        element: <ImageSlider />,
      },
      {
        path: "commentbox",
        element: <Commentbox />,
      },
      {
        path: "todolist",
        element: <TodoList />,
      },
      {
        path: "foodordering",
        element: <FoodOrdering />,
      },
    ],
  },
]);

export default App_router;
