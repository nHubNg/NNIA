import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import CurrentPartners from "./pages/currentPartners";
import Contact from "./pages/contact";
import Members from "./pages/members";
import JoinUs from "./pages/joinUs";
import Register from "./pages/register";
import Footer from "./components/Footer";
import PartnerDetails from "./pages/partnerDetails";
import BlogDetails from "./pages/blogDetails";
import Events from "./pages/events";
import Partner from './pages/partner';
import RedirectUrl from './pages/redirect';
import Hubs from "./pages/hubs";
// import Links from "./pages/links";
import Admin from "./pages/admin";
import { ActiveProvider } from "./contexts/ActiveContext";
import { AdminLogin } from "./pages/adminLogin";
import Overview from "./pages/admin/overview";
import Blogs from "./pages/admin/blogs";
import Links from "./pages/admin/links";
import Create from "./pages/admin/links/Create";
import AllLinks from "./pages/admin/links/AllLinks";
import EditLink from "./pages/admin/links/EditLink";
// import Header from './components/Header';

function App() {
  return (
    <div className="bg-background">
      <BrowserRouter>
        <ActiveProvider>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blogDetails" element={<BlogDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/members" element={<Members />} />
            <Route path="/register" element={<Register />} />
            <Route path="/joinUs" element={<JoinUs />} />
            <Route path="/currentPartners" element={<CurrentPartners />} />
            <Route path="/partnerDetails" element={<PartnerDetails />} />
            <Route path="/events" element={<Events />} />
            <Route path="/partner" element={<Partner />} />
            {/* <Route path='/links' element={<Links />} /> */}
            <Route path='/:plateau/:startups' element={<RedirectUrl />} />
            <Route path='/plateau/hubs' element={<Hubs url="https://forms.gle/yxWUCoZKUft27D2J7" />} />

            <Route path="/admin" element={<Admin />}>
              <Route path='overview' element={<Overview />} />
              <Route path='blogs' element={<Blogs />} />
              <Route path='links' element={<Links />}>
                <Route path='allLinks' element={<AllLinks />} />
                <Route path='create' element={<Create />} />
                <Route path='editLink' element={<EditLink />} />
              </Route>
            </Route>
            <Route path='/admin/login' element={<AdminLogin />} />
          </Routes>
        </ActiveProvider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
