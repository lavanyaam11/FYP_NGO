import React,{ useState }  from 'react'
import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import NGOSignUp from './components/NGOSignUp'
import DonorSignUp from './components/DonorSignUp';
import Hero from './components/Hero';
import NGO from './pages/NGO';
import DonorHomePage from './pages/Donor/DonorHomePage';
import ApproveReject from './pages/Donor/ApproveReject';
import DonateFunds from './pages/Donor/DonateFunds';
import AvlNGO from './pages/Donor/AvlNGO';
import HistoryOfDonation from './pages/Donor/HistoryOfDonation';
import History from './pages/NGO/History';
import CreateRequest from './pages/NGO/CreateRequest';
import './App.css'
import { register,login,logout,checkIsUserLogged } from './utils/Auth'

function App() {
  // register()
  // login()
  // logout();
  // checkIsUserLogged();
  const [isNgo, setIsNgo] = useState();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero isNgo={isNgo} setIsNgo={setIsNgo} />}/>
          <Route path='/ngoRegistration' element={<NGOSignUp isNgo={isNgo} />}/>
          <Route path='/donorRegistration' element={<DonorSignUp isNgo={isNgo} />}/>
          <Route path='/ngo' element={<NGO />}/>
          <Route path='/createrequest' element={<CreateRequest />}/>
          <Route path='/ngohistory' element={<History />}/>
          <Route path='/donorHomePage' element={<DonorHomePage />}/>
          <Route path='/approveReject' element={<ApproveReject />}/>
          <Route path='/donateFunds' element={<DonateFunds />}/>
          <Route path='/avlngo' element={<AvlNGO />}/>
          <Route path='/historyofdonation' element={<HistoryOfDonation />}/>
        </Routes>
        <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
