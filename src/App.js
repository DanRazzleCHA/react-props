import React from 'react';
import './App.css';
import { Button } from './components/Button/Button';
import { TextField } from './components/TextField/TextField';
import { H2 } from './components/H2/H2';
import { Avatar } from './components/Avatar/Avatar';
function App() {
  return (
  <>
    <div className="App">
      <H2>Individual Activity: Part 2</H2>
      <div className="text-fields">
        <TextField variant="rounded" />
        <TextField variant="rounded" />
        <TextField variant="green" />
        <TextField variant="green" />
      </div>
      <div className="buttons">
        <Button color="blue">Submit</Button>
        <Button color="red">Cancel</Button>
      </div>
      <div className="image-container">
        <div className="image-row">
          <Avatar src="cite.png" width={100} height={100} variant="circular" />
          <Avatar src="cite.png" width={100} height={100} variant="circular" />
        </div>
        <div className="image-row">
          <Avatar src="img1.jpg" width={200} height={200} variant="square-image" />
          <Avatar src="img2.jpg" width={200} height={200} variant="square-image" />
        </div>
      </div>
    </div>
  </>
  );
}

export default App;