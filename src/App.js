import './style.css';
import './bodyphoto.css'; 
import './content.css'; 
import './footimage.css';
import './App.css';
import Navbar from './component/navbar';
import Content from './component/content';
import Footpannel from './component/foot-pannel';
import Bodyphoto from './component/bodyphoto';



function App() {
  return (
 <>
 <Navbar/>

 <Content/>

 <Bodyphoto/>

 <Footpannel/>
 </>
 
  );
}

export default App;
