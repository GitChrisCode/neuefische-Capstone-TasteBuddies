import React from 'react';
import './App.css';
import RegisterForm from "./components/RegisterForm"
import useUser from "./components/UserHooks"
import {Route, Routes} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RecipeSearch from "./components/RecipeSearch";
import ProtectedRoutes from "./components/Protected Routes";
import Test from "./components/Test";
import Homepage from "./components/Homepage";

function App() {

    const {login, user} = useUser();

    async function handleLogin(username: string, password: string) {
        await login(username, password);
    }

  return (
      <div>
          <header>
              <h1>TasteBuddies</h1>
          </header>
          <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/login" element={<LoginPage login={handleLogin}/>}/>
              <Route path="/test" element={<Test/>}/>
              <Route path="/register" element={<RegisterForm/>}/>
              <Route element={<ProtectedRoutes user={user}/>}>
                <Route path="/recipesearch" element={<RecipeSearch/>}/>
              </Route>
          </Routes>
      </div>
  );
}

export default App;
