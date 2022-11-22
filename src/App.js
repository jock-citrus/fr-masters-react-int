import { render } from "react-dom";
import { StrictMode, useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ThemeContext from "./ThemeContext";

const Details = lazy(() => import('./Details'))
const SearchParams = lazy(() => import('./SearchParams'))

const App = () => {
  const theme = useState("darkblue");
  return (
    <StrictMode>
      {/* <!-- Suspense is what will be rendered when a lazy loaded
          route is visited and waiting for it to load --> */}
      <Suspense fallback={<h2>Loading...</h2>}>
        <ThemeContext.Provider value={theme}>
          <BrowserRouter>
            <header>
              <Link to="/">Adopt Me!</Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </BrowserRouter>
        </ThemeContext.Provider>
      </Suspense>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
