/**
 * @function getDate get data from response of pokeapi.co
 * @param {*} response from pokeapi.co
 * @returns object with all necessary data
 */
function getData(response) {
  let data = {};
  data.id = response.data.id;
  data.name = response.data.name;
  data.imgUrl = response.data.sprites.front_default;
  data.height = response.data.height;
  data.attack = response.data.stats[1].base_stat;
  data.moves = response.data.moves.length;
  return data;
}

export default getData;