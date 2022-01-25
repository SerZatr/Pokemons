import React from 'react';
import Chip from '@mui/material/Chip';

/**
 * @component ChipPokemon renders chip with prop.name and prop.onClick function
 */
function ChipPokemon(props) {
  return( 
    <>
      <Chip
      disableRipple={true}
      size={'small'}
        sx={{
          p: 1.5,
          height: '60px',
          fontFamily: 'Raleway',
          fontSize: 20,
          fontWeight: 500,
          borderRadius: 30,
          boxSizing: 'border-box',
        }}
        theme={props.theme}
        label={props.name}
        variant='filled'
        color = 'primary'
        onClick={()=>props.onClick(props.name)}
      />
    </>
  )}

export default ChipPokemon;
