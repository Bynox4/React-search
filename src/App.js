import { useState } from "react";
import SearchBar from "./components/searchBar";

import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: white;
  border: solid 2px #ccc;
  cursor: pointer;
  &:hover {
    background-color: #efefef;
  }
  .activated{
    background-color: #00366
    color: white;
    border: solid 2px #26aeff;
  }
`;

const people = [
  {
    id: 'peaple-01',
    title: 'Juan Perez',
  },
  {
    id: 'peaple-02',
    title: 'Nelson Sanchez',
  },
  {
    id: 'peaple-03',
    title: 'Breyner Santiago',
  },
  {
    id: 'peaple-04',
    title: 'Monsalve',
  },
  {
    id: 'peaple-05',
    title: 'Neider Sanchez',
  },
];

const calendar = [
  {
    id: 'calendar-01',
    title: 'Sesión de seguimiento',
  },
  {
    id: 'calendar-02',
    title: 'Revisión de propuestas',
  },
  {
    id: 'calendar-03',
    title: 'Evento para donar juguetes',
  },
  {
    id: 'calendar-04',
    title: 'Junta semanal de equipo',
  },
  {
    id: 'calendar-05',
    title: 'Revisión de pendientes con clientes',
  },
];

const email = [
  {
    id: 'email-01',
    title: 'Reporte de resultados',
  },
  {
    id: 'email-02',
    title: 'Reporte para cambio',
  },
  {
    id: 'email-03',
    title: 'Estatus de funcionalidad',
  },
  {
    id: 'email-04',
    title: 'Próximos eventos',
  },
  {
    id: 'email-05',
    title: 'Participa en la encuesta',
  },
];

function App() {

  const [data, setData] = useState([...people, ...calendar, ...email]);

  const [selection, setSelection] = useState(null);
  const [currentOption, setCurrentOption] = useState('all');

  function handleClick(e){
    const op = e.target.name;

    switch (op) {
      case 'all':
        setData([...people, ...calendar, ...email]);
        setCurrentOption('all');
        break;
      case 'people':
        setData([...people]);
        setCurrentOption('people');
        break;
      case 'calendar':
        setData([...calendar]);
        setCurrentOption('calendar');
        break;
      case 'emails':
        setData([...email]);
        setCurrentOption('email');
        break;


      default:
        break;
    }
  }
  function handleOnItemSelected(item) {
    setSelection(item);
  }

  return (
    <div className="App">
      <StyledButton onClick={handleClick} name='all'>All</StyledButton>
      <StyledButton onClick={handleClick} name='people'>People</StyledButton>
      <StyledButton onClick={handleClick} name='calendar'>Calendar</StyledButton>
      <StyledButton onClick={handleClick} name='emails'>Email</StyledButton>
      {selection ? <div>You selected: {selection.title}</div> : ''}
      <SearchBar items={data} onItemSelected={handleOnItemSelected} />
    </div>
  );
}

export default App;
