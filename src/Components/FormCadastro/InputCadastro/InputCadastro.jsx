import React, { Component } from 'react'
import {LabelForm, InputForm} from './style'

export default class InputCadastro extends Component {
    render() {
        return (<>
            <LabelForm>{this.props.children} <InputForm type={this.props.type} 
            name={this.props.name} 
            onChange={this.props.onChange} 
            className={this.props.className}
            style={this.props.style}
            placeholder={this.props.placeholder}/></LabelForm>
        </>)
    }
}