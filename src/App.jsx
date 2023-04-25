import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/index";
import "./App.css";
import Home from "./components/Home/index";
import ProtectedRoute from "./components/ProtectedRoute/index";
import Writer from "./components/Writers/index";
import Blogs from "./components/Blogs/index";
import Query from "./components/Query/index";
import SingleBlog from "./components/Blogs/SingleBlog";

const App = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          >
            <Route index element={<Writer />} />
            <Route path="blog" element={<Blogs />} />
            <Route path="query" element={<Query />} />
            <Route path="blog/:blogId" element={<SingleBlog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
