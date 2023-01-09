import './app.scss'
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from "./pages/home/Home";
import Watch from './pages/watch/Watch';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const App = () => {
  const user = true;
  return (
    // <BrowserRouter>
    // <Switch>
    //       <Route exact path="/">
    //         <Home />
    //       </Route>
    //       <Route path="/movies">
    //         <Home type="movies" />
    //       </Route>
    //       <Route path="/series">
    //         <Home type="series" />
    //       </Route>
    //     </Switch>
    //     </BrowserRouter>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Register/> } />
        <Route path="/register" element={!user ? <Register /> : <Home/> } />
        <Route path="/login" element={!user ? <Login /> : <Home/> } />
        {user && (
          <>
          <Route path="/movies" element={<Home type="movies" />} />
        <Route path="/series" element={<Home type="series" />} />
        <Route path="/watch" element={<Watch/>} />
        </>
        )}
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;