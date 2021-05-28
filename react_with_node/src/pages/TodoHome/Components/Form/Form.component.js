import React, { Component } from 'react'
import InputField from '../../../../component/InputField/InputField.component'

export class Form extends Component {
    
    render() {
        
        return (
            <div>
                <form>
                    <InputField title="username : " onChangeInput={ (a)=>{console.log(a)}}/>
                    <InputField title="password : " />
                </form>
            </div>
        )
    }
}

export default Form
