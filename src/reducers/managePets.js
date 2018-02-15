export let state;


export function managePets(state = { pets: [] }, action) {
  switch (action.type) {
    case 'ADD_PET':
      if (action.pet.name && action.pet.species && action.pet.id) {
        return { pets: [...state.pets, action.pet] }
      }  
    case 'REMOVE_PET':
      const pIndex = state.pets.findIndex(p => p.id === action.id);
      return { pets: [...state.pets.slice(0, pIndex),...state.pets.slice(pIndex + 1)]}
    default: 
      return state
  }
}

export function dispatch(action) {
  state = managePets(state, action)
  render()
}

export function render() {
  const p = document.getElementById('container')
  const pets = state.pets.slice().map(pet => `<li>${pet.name}</li>`)
  p.innerHTML = `<ul>${pets}</ul>`  
}
