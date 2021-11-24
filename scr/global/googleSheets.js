import React, { Component } from 'react'
import axios from 'axios'
import { AppContext } from '../contexts/context';

export default class Sheet extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
    sheet = [{
       name: 'Bruna',
       price: 50,
       qty: 2,
    },
  ]

  }}

  // changeHandler = (e) => {
  //   this.setState({[e.target.name] : e.target.value})
  // }

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    axios.post('https://sheet.best/api/sheets/922fa014-73c7-430e-992a-d557d6fe5713', this.state)
    .then(response => {
      console.log(response);
    })
  }
  
  render() {
      
    // const { name, price, qty } = this.state; 
  return (
    <AppContext.Provider
      value={
        {
        sheet:this.state.sheet,
        submitHandler: this.submitHandler
        }
      }>
    </AppContext.Provider>
  )
  }
}