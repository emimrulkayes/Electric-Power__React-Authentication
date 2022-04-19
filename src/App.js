import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import BlogDetail from './Pages/BlogDetail/BlogDetail';
import Blogs from './Pages/Home/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import Register from './Pages/Login/Register/Register';
import BookService from './Pages/BookService/BookService';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Faq from './Pages/Faq/Faq';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/booking/:serviceId' element={
            <RequireAuth>
              <BookService></BookService>
            </RequireAuth>
          }>
        </Route>
        <Route path='/blog/:blogId' element={<BlogDetail></BlogDetail>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/faq' element={<Faq></Faq>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>


        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

    </>
  );
}

export default App;
