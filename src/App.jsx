import React from 'react';
import ChessBoard from './components/ChessBoard';

function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-800">
      <h1 className="text-white text-4xl mb-10">Chess Game with Redux</h1>
      <ChessBoard />
    </div>
  );
}

export default App;
