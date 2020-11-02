import React from 'react'
import style from './leftSetup.module.css'
export default class leftSetup extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            display: 'show'
        }
    }

    render = () => {
            return (
                <div style={{ width: this.props.display }} className={style.box}>
                </div>
            )

    }
}
