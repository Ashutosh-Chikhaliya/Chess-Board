import React from 'react';
import ChessBoard from './components/ChessBoard';

function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-zinc-700">
      <h1 className="text-white text-4xl mb-10">Chess Board with Redux</h1>
      <ChessBoard />
      <h1 className='text-white'>~ Ashutosh Chikhaliya</h1>
    </div>
  );
}

export default App;
