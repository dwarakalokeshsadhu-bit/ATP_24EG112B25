import './App.css';
import Navibar from './components/Navibar'; 
import UserList from './components/UserList';
import Footer from './components/Footer'; 
import Counter  from './components/Counters'; 
import TestedTypes from './components/TestedTypes';
import APIDemo from './components/APIDemo';
import FormDemo from './components/FormDemo';
import Form from './components/Form'


function App() {
  //state 
  

  return(
    <div>
      {/* <Navibar/>
      <div className='m-16 min-h-screen'>
        <UserList/>
      </div>
      <Footer/>
      <TestedTypes/>
      <APIDemo/>
      <Counter/> */}
      {/* <FormDemo/> */}
      <Form/>

    </div>

  );
}
export default App;