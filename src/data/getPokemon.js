const getPokemon = async (pokemonName) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    if(!response.ok){
      const errorMessage = `${response.status} (${response.statusText})`
      const error = new Error(errorMessage)
      throw(error)
    }
    const pokemonBody = await response.json()
    return pokemonBody
  } catch (error) {
    console.error("error in fetch")
    console.error(error)
  }
}

export default getPokemon;
