import React, {useState, useEffect} from 'react';
import clickIcon from './clickIcon.svg';
import Card from './Card';
import getData from './getData';
import ChipsBlock from './ChipsBlock';
import { createTheme } from '@mui/material/styles';

/**
 * @component
 * The main component
 */
function App() {
  const [data, setData] = useState({});
  let pokemonNames = ['bulbasaur', 'ivysaur','venusaur', 'charmander', 'charizard', 'weedle'];

  const theme = createTheme({
    palette: {
      primary: {
        main: '#1986EC',
      },
    },
  });

  function selectPokemon(name) {
    const axios = require('axios').default;
    axios.get( 'https://pokeapi.co/api/v2/pokemon/' + name ).then((response)=>{
      let result = getData(response);
      setData(result);
    });
  }

  useEffect( ()=> {
    selectPokemon('bulbasaur');
  }, []);

  return (
    <div className='container'>
      <header className='header'>
        <div className='title'>
          <span> покемоны api </span>
        </div>
        <div className='additionalInfo'>
          <img 
            src={clickIcon} 
            width='24,25.px' 
            height='30,66.px' 
            alt='Click icon' />
          <span>
            Нажмите на нужного Покемона
          </span>
        </div>
      </header>
      <div className='body'>
          { <ChipsBlock names={pokemonNames} onClick={(name) => selectPokemon(name)} theme={theme} /> }
          { <Card data={data} name={data.name} /> }
      </div>
    </div>
  )
}

export default App;
