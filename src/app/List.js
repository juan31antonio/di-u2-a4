import { people } from './data.js';
import { getImageUrl } from './utils.js';

const chemists = people.filter(person =>
  person.profession === 'químico'
);

const demas = people.filter(person =>
  person.profession !=='químico'
)

export default function List() {
  const listItems = demas.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        conocido/a por {person.accomplishment}
      </p>
    </li>
  );

  const listItemsChemist = chemists.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        conocido/a por {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Científicos</h1>
      <ul>{listItems}</ul>
      <h1>Químicos</h1>
      <ul>{listItemsChemist}</ul>
    </article>
  );
}
