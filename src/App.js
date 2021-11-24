import './App.css';
import { Tab, TabsBlock } from './Shared';

function App() {
  return (
    <div className="App">
      <TabsBlock>
        <Tab title="First">
          <h2>First</h2>
        </Tab>
        <Tab title="Second">
          <h2>Second</h2>
        </Tab>
        <Tab title="Third">
          <h2>Third</h2>
        </Tab>
      </TabsBlock>
    </div>
  );
}

export default App;
