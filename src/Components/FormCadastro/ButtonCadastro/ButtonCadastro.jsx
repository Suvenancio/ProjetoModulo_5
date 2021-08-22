import React, { Component } from 'react'
import {ButtonForm} from './style'

export default class ButtonCadastro extends Component {
    render() {
        return (<>
            <ButtonForm type={this.props.type} 
            onClick={this.props.onClick}
            className={this.props.className}
            >{this.props.children}</ButtonForm>
        </>)
    }
}
