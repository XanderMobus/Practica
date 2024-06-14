import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <Container>
      <Header />
      
      <RecipeList />
    </Container>
  );
}

export default App;
