export let state;
import React from 'react'
import ReactDOM from 'react-dom'

export function managePets(state = {pets: []}, action){
  switch (action.type) {
    case 'ADD_PET':
      return {pets: [...state.pets, action.pet]}
    case 'REMOVE_PET':
      let removeIndex = state.pets.findIndex((pet) => {return pet.id === action.id})
      return {pets: [...state.pets.slice(0, removeIndex), ...state.pets.slice(removeIndex + 1)]}
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state,action)
  render()
}

export function render(){
  // let body = document.getElementsByTagName('body')
  // let div = document.createElement('div');
  // body.appendChild(div)
  // div.id = 'container'
  // let ul = document.createElement('ul')
  // div.appendChild(ul)
  // let lis = state.pets.map((pet) => {return `<li>${pet.name}</li>`}).join(' ')
  // ul.appendChild(lis)
  let container = document.getElementById('container');
    let petsList = state.pets.map((pet) => {
      return `<li>${pet.name}</li>`;
    }).join(' ');
    container.innerHTML = `<ul>${petsList}</ul>`;
}
