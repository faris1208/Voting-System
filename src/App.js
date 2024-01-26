import './App.css';
import '../src/assets/styles/screen1.css';
import '../src/assets/styles/screen2.css';
import '../src/assets/styles/screen3.css';
import '../src/assets/styles/screen4.css';
import '../src/assets/styles/login.css';
import '../src/assets/styles/create.css';
import '../src/assets/styles/admin.css';
import '../src/assets/styles/verification.css';
import '../src/assets/styles/success.css';
import '../src/assets/styles/home-screen-styles/sidebar.css';
import '../src/assets/styles/home-screen-styles/welcome.css';
import '../src/assets/styles/home-screen-styles/poll.css';
import '../src/assets/styles/home-screen-styles/upload.css';
import '../src/assets/styles/home-screen-styles/uploading.css';
import '../src/assets/styles/home-screen-styles/successfully.css';
import '../src/assets/styles/home-screen-styles/recent.css';
import '../src/assets/styles/home-screen-styles/nigeria.css';
import '../src/assets/styles/home-screen-styles/settings.css';
import '../src/assets/styles/home-screen-styles/participated.css';
import '../src/assets/styles/voting-screen-styles/ongoing.css';
import '../src/assets/styles/voting-screen-styles/peter.css';
import '../src/assets/styles/voting-screen-styles/done.css';
import '../src/assets/styles/voting-screen-styles/presidential.css';
import '../src/assets/styles/voting-screen-styles/statistics.css';
import '../src/assets/styles/voting-screen-styles/ended.css';
import Screen1 from './assets/onboarding-screen/Screen1';
import Screen2 from './assets/onboarding-screen/Screen2';
import Screen3 from './assets/onboarding-screen/Screen3';
import Screen4 from './assets/onboarding-screen/Screen4';
import {Routes, Route, } from 'react-router-dom';
import Login from './assets/logins-screen/Login';
import Create from './assets/logins-screen/Create';
import Sign from './assets/logins-screen/Sign';
import Admin from './assets/logins-screen/Admin';
import Verification from './assets/logins-screen/Verification';
import Success from './assets/logins-screen/Success';
import Welcome from './assets/home-screen/Welcome';
import Poll from './assets/home-screen/Poll';
import Successfully from './assets/home-screen/Successfully';
import Recent from './assets/home-screen/Recent';
import Nigeria from './assets/home-screen/Nigeria';
import Ongoing from './assets/voting-screen/Ongoing';
import Peter from './assets/voting-screen/Peter';
import Olusegun from './assets/voting-screen/Olusegun';
import Bola from './assets/voting-screen/Bola';
import Atiku from './assets/voting-screen/Atiku';
import Votes from './assets/voting-screen/Votes';
import Sidebar from './assets/home-screen/Sidebar';
import Presidential from './assets/voting-screen/Presidential';
import Statistics from './assets/voting-screen/Statistics';
import Ended from './assets/voting-screen/Ended';
import Settings from './assets/home-screen/Settings';
import Done from './assets/voting-screen/Done';
import Participated from './assets/home-screen/Participated';
import Upload from './assets/home-screen/Upload';
import Uploading from './assets/home-screen/Uploading';


function App() {
  return (
    <div className="App">
      {/* <Screen1 /> */}

      <Routes>
        <Route exact path='/' element={<Screen1 />}/>
        <Route path='/screen2' element={<Screen2 />}/>
        <Route path='/screen3' element={<Screen3 />}/>
        <Route path='/screen4' element={<Screen4 />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/create' element={<Create />}/>
        <Route path='/sign' element={<Sign />}/>
        <Route path='/admin' element={<Admin />}/>
        <Route path='/verification' element={<Verification />}/>
        <Route path='/success' element={<Success />}/>
        <Route path='/welcome' element={<Sidebar><Welcome /></Sidebar>}/>
        <Route path='/poll' element={<Sidebar><Poll /></Sidebar>}/>
        <Route path='/upload' element={<Sidebar><Upload /></Sidebar>}/>
        <Route path='/uploading' element={<Sidebar><Uploading /></Sidebar>}/>
        <Route path='/Successfully' element={<Sidebar><Successfully /></Sidebar>}/>
        <Route path='/recent' element={<Sidebar><Recent /></Sidebar>}/>
        <Route path='/nigeria' element={<Sidebar><Nigeria /></Sidebar>}/>
        <Route path='/ongoing' element={<Sidebar><Ongoing /></Sidebar>}/>
        <Route path='/peter' element={<Sidebar><Peter /></Sidebar>}/>
        <Route path='/done' element={<Sidebar><Done /></Sidebar>}/>
        <Route path='/olusegun' element={<Sidebar><Olusegun /></Sidebar>}/>
        <Route path='/bola' element={<Sidebar><Bola /></Sidebar>}/>
        <Route path='/atiku' element={<Sidebar><Atiku /></Sidebar>}/>
        <Route path='/votes' element={<Sidebar><Votes /></Sidebar>}/>
        <Route path='/presidential' element={<Sidebar><Presidential /></Sidebar>}/>
        <Route path='/statistics' element={<Sidebar><Statistics /></Sidebar>}/>
        <Route path='/ended' element={<Sidebar><Ended /></Sidebar>}/>
        <Route path='/settings' element={<Sidebar><Settings /></Sidebar>}/>
        <Route path='/participated' element={<Sidebar><Participated /></Sidebar>}/>
      </Routes>
    </div>
  );
}

export default App;
