import React from 'react'
import A from './A'

export default class B extends React.Component {

    constructor(props) {
        super()
        this.state = {
        }
    }
    render = () => {
        return (
            <div>
                <A name="b组件传的值" />
            </div>
        )
    }
}
