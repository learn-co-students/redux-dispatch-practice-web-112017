export let state;


export function managePets(state = {pets: []}, action){
  switch(action.type){
    case "ADD_PET":
      return {pets: [...state.pets, action.pet]}
    case "REMOVE_PET":
      let pet = state.pets.find(pet => pet.id === action.id)
      let petIndex = state.pets.indexOf(pet)
      let newPets = state.pets.slice()
      
      newPets.splice(petIndex, 1)
      
      return {pets: newPets}
    default:
    return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let pets = state.pets.slice().map(pet => `<li>${pet.name}</li>`)
  let target = document.querySelector('#container')
  target.innerHTML = `<ul>${pets}</ul>`
}
