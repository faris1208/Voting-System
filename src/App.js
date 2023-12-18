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
import '../src/assets/styles/home-screen-styles/welcome.css';
import '../src/assets/styles/home-screen-styles/poll.css';
import '../src/assets/styles/home-screen-styles/successfully.css';
import '../src/assets/styles/home-screen-styles/recent.css';
import '../src/assets/styles/home-screen-styles/nigeria.css';
import '../src/assets/styles/voting-screen-styles/ongoing.css';
import '../src/assets/styles/voting-screen-styles/peter.css';
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
        <Route path='/welcome' element={<Welcome />}/>
        <Route path='/poll' element={<Poll />}/>
        <Route path='/successfully' element={<Successfully />}/>
        <Route path='/recent' element={<Recent />}/>
        <Route path='/nigeria' element={<Nigeria />}/>
        <Route path='/ongoing' element={<Ongoing />}/>
        <Route path='/peter' element={<Peter />}/>
        <Route path='/olusegun' element={<Olusegun />}/>
        <Route path='/bola' element={<Bola />}/>
        <Route path='/atiku' element={<Atiku />}/>
        <Route path='/votes' element={<Votes />}/>
      </Routes>
    </div>
  );
}

export default App;
