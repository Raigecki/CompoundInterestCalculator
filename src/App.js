import './App.css';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import FinalPrincipal from './Components/Forms/FinalPrincipal';
import TimeRequired from './Components/Forms/TimeRequired';

function App() {
  return (
    <div className="App">
        <h2>Compound Interest Calculator</h2>

        <Tabs defaultActiveKey="finalPrincipalTab" id="calculators">
          <Tab eventKey="finalPrincipalTab" title="Final Principal">
            <FinalPrincipal />
          </Tab>
          <Tab eventKey="timeRequiredTab" title="Time Required">
            <TimeRequired />
          </Tab>
        </Tabs>
    </div>
  );
}

export default App;
