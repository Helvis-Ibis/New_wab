// App.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Search from './pages/Search';
import Recruitment from './pages/Recruitment';
import Training from './pages/Training';
import Recruiters from './pages/Recruiters';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';

// Imports des pages dashboard
import DashboardLayout from './components/dashboard/DashboardLayout';
import DashboardHome from './pages/dashboard/DashboardHome';
import Profile from './pages/dashboard/Profile';
import SearchJobs from './pages/dashboard/SearchJobs';
import DashboardTrainings from './pages/dashboard/Trainings';
import CV from './pages/dashboard/CV';
import DashboardRecruiters from './pages/dashboard/Recruiters';
import Applications from './pages/dashboard/Applications';
import Settings from './pages/dashboard/Settings';

function App() {
  return (
    <Routes>
      {/* Routes publiques avec Layout principal */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/training" element={<Training />} />
        <Route path="/recruiters" element={<Recruiters />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Routes du dashboard */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="profile" element={<Profile />} />
        <Route path="search-jobs" element={<SearchJobs />} />
        <Route path="trainings" element={<DashboardTrainings />} />
        <Route path="cv" element={<CV />} />
        <Route path="recruiters" element={<DashboardRecruiters />} />
        <Route path="applications" element={<Applications />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;