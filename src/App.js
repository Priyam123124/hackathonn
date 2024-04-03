import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landingpage from './Components/Landingpage';
import Login from './Components/login_page/Login';
import SignUp from './Components/signup_page/SignUp';
import Forgot from './Components/forgot_pass_page/Forgot';
import Overview from './Components/overview/Overview';
import Profile from './Components/profile/Profile';
import Pp from './Components/pp/Pp';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path = "/" element={<Landingpage/>}/>
      <Route exact path = "/login" element={<Login/>}/>
      <Route exact path = "/signup" element={<SignUp/>}/>
      <Route exact path = "/forgot_password" element={<Forgot/>}/>
      <Route exact path = "/explore" element={<Overview/>}/>
      <Route exact path = "/profile" element={<Profile/>}/>
      <Route exact path = "/privacy_policy" element={<Pp/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
