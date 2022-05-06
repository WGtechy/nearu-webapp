import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";
import { getAllCategory } from "./redux/actions";
import { LightTheme, DarkTheme, OrangeTheme, GlobalStyles } from "./themes.js";
import PrivateRoute from "./comp-files/hoc/PrivateRoute";
import { PageLoading } from "./comp-files/hoc/Loading";

const App = () => {
  const [theme, setTheme] = useState("light");
  const dispatch = useDispatch();

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const Home = React.lazy(() => import("./Display/general/all-screens/Home"));
  const ProductListPage = React.lazy(() =>
    import("./Display/general/all-screens/ProductListPage")
  );

  const GlobalStoreItem = React.lazy(() =>
    import("./Display/general/all-screens/GlobalStoreProductInfo")
  );

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  return (
    <BrowserRouter>
     <React.Suspense fallback={PageLoading}>
        <ThemeProvider
          theme={
            theme === "light"
              ? LightTheme
              : theme === "orange"
              ? OrangeTheme
              : DarkTheme
          }
        >
          <GlobalStyles />
        <Routes>
          <Route path="/" name="Home" element={<Home />} />
          <Route
              path="/:slug"
              name="Product page"
              element={<ProductListPage/>}
            />
            <Route
              path="/store/:slug"
              name="Global store"
              component={<GlobalStoreItem/>}
            />
        </Routes>
        </ThemeProvider>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;
