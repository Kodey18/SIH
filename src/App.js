
import { Route, Routes } from 'react-router-dom';
import ProtectRoutes from './components/PortectRoutes/ProtectRoutes';
import Layout from './components/layout/Layout';
import Home from './pages/Home/HomePage';
import LoginPage from './pages/login Page/LoginPage';
import NgoLogin from './pages/Ngo login/NgoLogin';
import NgoRegister from './pages/Ngo Register/NgoRegister';
import MissingPage from './components/Missing Page/MissingPage';
import RequireUser from './components/PortectRoutes/RequireUser';
import RequireNgo from './components/PortectRoutes/RequireNgo';
import NgoProfile from './pages/Ngo Profile/NgoProfile';
import Blogs from './pages/Blogs/Blogs';
import Courses from './components/Courses/Courses';
import Event from './pages/Event Page/Event';
import RegisterPage from './pages/login Page/RegsiterPage';
import CreateBlog from './pages/Create Blog/CreateBlog';
import ProfilePage from './pages/Profile/ProfilePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index exact element={<Home />} />
        <Route exact path="/blogs" element={<Blogs />} />

        {/* login protect rooutes */}
        <Route element={<ProtectRoutes />}>
          <Route exact path="/userregister" element={<RegisterPage />} />
          <Route exact path="/userlogin" element={<LoginPage />} />
          <Route exact path="/ngoregister" element={<NgoRegister />} />
          <Route exact path="/ngoLogin" element={<NgoLogin />} />
        </Route>

        {/* Ngo protect routes */}
        <Route element={<RequireNgo />}>
          <Route exact path="/ngoprofile" element={<NgoProfile />} />
          <Route exact path='/createblog' element={<CreateBlog />} />
        </Route>

        {/* User protect routes */}
        <Route element={<RequireUser />}>
          <Route exact path="/userprofile" element={<ProfilePage />} />
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path="/events" element={<Event />} />
        </Route>

        {/* catch all other undefined routes */}
        <Route exact path="*" element={<MissingPage />} />
      </Route>
    </Routes>
  );
}

export default App;
