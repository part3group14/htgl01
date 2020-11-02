import React from 'react';
import style from './index.module.css';
import LeftSetup from '../../components/leftSetup/leftSetup'
export default class index extends React.Component {

    constructor() {
        super()
        this.state = {
            ifShows:'show',
            display:'220px'
        };
         this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(prevState=>({
            isToggleOn:!prevState.isToggleOn,
            display:prevState.isToggleOn?'220px':'0px'
        }))
    }
    render = () => {
        return (
            <div className='k'>
                <header>
                    <div className={style.header}>
                        <div className={style.logoBox}>
                            <a className={style.logo} href='index' title="logo">后台管理系统</a>
                            <div className={style.larrySideMenu} onClick={this.handleClick}>
                                <i className='iconfont icon-menu'></i>
                            </div>
                            {/* <button className={style.larrySideMenu} onClick={this.handleClick}>
                                {this.state.isToggleOn?'On':'Off'}
                            </button> */}
                        </div>
                        {/* <ul className></ul> */}
                    </div>
                </header>
                <div className={style.content}>
                    <LeftSetup display={this.state.display}></LeftSetup>
                    <div className={style.right}>123</div>
                </div>
            </div>
        )
    }
}