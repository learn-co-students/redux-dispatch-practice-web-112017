export let state;


export function render(){
  let container = document.getElementById('container');
  let petsList = state.pets.map((pet) => {
    return `<li>${pet.name}</li>`;
  }).join(' ');
  container.innerHTML = `<ul>${petsList}</ul>`;
}

export function dispatch(action){
  state = managePets(state,action)
  render()
}

export function managePets(state = {pets: []}, action){
  switch (action.type){
    case "ADD_PET":
      const newPetsArr = state.pets
      newPetsArr.push(action.pet)
      return { pets: newPetsArr }
    case "REMOVE_PET":
      const filteredPetsArr = state.pets.filter(pet => pet.id !== action.id)
      return { pets: filteredPetsArr}
    default:
      return state
  }

}
