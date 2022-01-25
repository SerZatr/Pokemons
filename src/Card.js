import React from 'react';

/**
 * @component Card renders card with information about pokemon and illustrartion
 */
function Card(props) {
    let data = props.data;
    if (props.data.name && props.data.imgUrl && props.data.moves && props.data.id && props.data.attack && props.data.height) {
        return (
            <main className='card'>
                <span lang='en' className='pokemonName'>
                    {data.name}
                </span>
                <div className='photoFrame'>
                    <img src={data.imgUrl} alt={data.name}></img>
                </div>
                <ul className='description'>
                    <li>
                        {'Снялся в ' + data.moves + ' сериях'}
                    </li>
                    <li>
                        {'id ' + data.id}
                    </li>
                    <li>
                        {'height ' + data.height}
                    </li>
                    <li>
                        {'attack ' + data.attack}
                    </li>
                </ul>
            </main>
        )
    } else 
    return (<main className='card'></main>)
}

export default Card;