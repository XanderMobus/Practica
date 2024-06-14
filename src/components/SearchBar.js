import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

function SearchBar() {
  return (
    <Form inline>
      <FormControl type="text" placeholder="Nombre de la receta" className="mr-sm-2" />
    </Form>
  );
}

export default SearchBar;
