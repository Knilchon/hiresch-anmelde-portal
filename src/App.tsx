import React from 'react';
import LogginWindow from './components/LogginWindow';
import { Box, styled } from '@mui/material';

const App: React.FC = () => {
  return (
    <AppBox className="App">
      <LogginWindow/>
    </AppBox>
  );
}
export default App;

const AppBox = styled(Box)({
  height: '100vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '50px',
  alignItems: 'self-start'
});