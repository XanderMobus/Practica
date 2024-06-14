import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RecipeCard from './RecipeCard';

const recipes = [
  { 
    title: 'Calabazas con Arrachera y Queso', 
    description: 'Prueba esta receta de CALABAZAS RELLENAS de ARRACHERA sazonadas con JUGO MAGGI® y Salsa Inglesa CROSSE & BLACKWELL®. Termina gratinando con queso manchego.',
    imageUrl: 'https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/2e736957c0337b8bdfd266b8aaa40cc6.webp?itok=2NIzPaq2'
  },
  { 
    title: 'Lasaña al Sartén', 
    description: 'prende a preparar esta versión PRÁCTICA de LASAÑA en SARTÉN sazonada con CONSOMATE® y JUGO MAGGI®. Rápido, fácil y delicioso. Te encantará.',
    imageUrl: 'https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/8197f4fc4073df7b0b440d53c137f06f.webp?itok=KO2kTXWn' 
  },
  { 
    title: 'Gelatina Tropical', 
    description: 'FRESA, MANGO y COCO. Son los ingredientes clave para esta receta de GELATINA TROPICAL preparada con LA LECHERA® y CARNATION® CLAVEL®. ¡Buenísima!',
    imageUrl: 'https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/9b3cdabe00c0dd459c9750eef7feabb0.webp?itok=FnlYTbIl' 
  },
  { 
    title: 'Gelatina de Durazno con Fresas', 
    description: 'Llega a la reunión familiar con el postre PERFECTO. Prepara esta GELATINA de DURAZNO con FRESAS con el SABOR de LA LECHERA® Sin Grasa. Sorprenderás a todos.',
    imageUrl: 'https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/b212dadc33d5f2137c9719f502c4aa2c.webp?itok=DfncXOAK' 
  }
];

function RecipeList() {
  return (
    <Row>
      {recipes.map((recipe, index) => (
        <Col key={index} sm={12} md={6} lg={4} xl={3}>
          <RecipeCard 
            title={recipe.title} 
            description={recipe.description} 
            imageUrl={recipe.imageUrl} 
          />
        </Col>
      ))}
    </Row>
  );
}

export default RecipeList;
