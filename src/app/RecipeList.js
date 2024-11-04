import { recipes } from './recipes.js';

const listaRecetas = [{
  id: 1,
  nombre: 'Pasta al pesto',
  ingredientes: [
    '200 g de pasta',
    '100 g de albahaca fresca',
    '50 g de queso parmesano',
    '2 dientes de ajo',
    '50 ml de aceite de oliva'
  ],
}, {
  id: 2,
  nombre: 'Ensalada caprese',
  ingredientes: [
    '2 tomates grandes',
    '200 g de mozzarella fresca',
    'Hojas de albahaca',
    'Aceite de oliva',
    'Sal al gusto'
  ],
}, {
  id: 3,
  nombre: 'Pollo al limón',
  ingredientes: [
    '2 pechugas de pollo',
    'Jugo de 1 limón',
    '2 dientes de ajo',
    '2 cucharadas de miel',
    'Sal y pimienta al gusto'
  ],
}, {
  id: 4,
  nombre: 'Tostadas con aguacate y huevo',
  ingredientes: [
    '2 rebanadas de pan integral',
    '1 aguacate maduro',
    '2 huevos',
    'Sal al gusto',
    'Pizca de pimentón o chile en polvo'
  ],
}];

export default function RecipeList() {

  const listItems = listaRecetas.map(receta => (
    <li key={receta.id}>
      <h2>{receta.nombre}</h2>
      <ul>
        {receta.ingredientes.map((ingrediente, index) => (
          <li key={index}>{ingrediente}</li>
        ))}
      </ul>
    </li>
  ));
  return (
    <div>
      {listItems}
    </div>
  );
}
