import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Signin from "./pages/Signin";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error"

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/book:id" element={<Detail />} />
        <Route path="/edit:id" element={<Edit />} />
        <Route element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  )
}

export default App;
