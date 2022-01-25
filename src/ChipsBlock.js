import React from 'react';
import ChipPokemon from './ChipPokemon';

/**
 * @component ChipsBlock renders block of chips for all props.names of pokemons
 */
function ChipsBlock(props) {
    let names = props.names;
    let chips = [];
    for (let name of names) {
        chips.push(
                <ChipPokemon name={name} onClick={(name)=>{props.onClick(name)}} theme={props.theme} key={name} />
        )
    }
    return (
        <div className='chipsContainer' role='presentation'>
           {chips}
        </div>
    );
}

export default ChipsBlock;