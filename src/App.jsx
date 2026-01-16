import AppRoutes from "./AppRoutes";
import "./App.css";
import BookProvider from "./context/BookContext";

function App() {
  return (
    <BookProvider>
      <AppRoutes />
    </BookProvider>
  );
}

export default App;