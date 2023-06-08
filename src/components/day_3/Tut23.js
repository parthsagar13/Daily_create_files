import React, { Component } from 'react'

export default class Tut23 extends Component {
    constructor()
    {
      super();
      this.state={
        name:"Anil sidhu"
      }
      console.warn("constructor")
    }
    render()
    {
      console.warn("render")
      return<div>
        <h1>Hello World {this.state.name}</h1>
      </div>
    
    }
  }

