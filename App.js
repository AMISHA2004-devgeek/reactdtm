import React from 'react';
import Layout from './components/layout'; // Import Layout component
import Button from './components/ui/button';
import Sheet from './components/ui/sheet';
import logo from './logo.svg';
import './App.css';

function App() {
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <Layout> {/* Wrap your content with the Layout component */}
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <div style={{ padding: '20px' }}>
          <Button label="Click Me" onClick={handleButtonClick} />
          <Sheet>
            <p>This is some content inside the sheet.</p>
          </Sheet>
        </div>
      </div>
    </Layout>
  );
}

export default App;
