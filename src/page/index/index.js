import React from 'react';
import style from './index.module.css';
import LeftSetup from '../../components/leftSetup/leftSetup';
import Time from '../../components/time/time'
export default class index extends React.Component {

    constructor() {
        super()
        this.state = {
            ifShows:'show',
            display:'220px',
            date: new Date()
        };
         this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(prevState=>({
            isToggleOn:!prevState.isToggleOn,
            display:prevState.isToggleOn?'220px':'0px'
        }))
    }
    componentDidMount() {
        this.timeID = setInterval(() => this.tick(), 1000);
      }

      componentWillUnmount() {
        clearInterval(this.timeID);
      }

      tick() {
        this.setState({
          date: new Date(),
        });
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
                        </div>
                        <ul className={style.headUl}>
                            <li className={style.li}><a>基础设置</a></li>
                            <li className={style.li}><a>系统设置</a></li>
                        </ul>
                        <ul className={style.headerRight}>
                            <Time date={this.state.date}></Time>
                            <li className={style.xx}><i className='iconfont icon-xinxi'></i></li>
                            <li className={style.userItem}>
                                <img src='img/logo.png'></img>
                            </li>
                            <li className={style.admin}>
                                <a>
                                    admin
                                </a>
                                <i className='iconfont icon-shang-copy'></i>
                            </li>
                            <li className={style.padding}>
                                <a>前台首页</a>
                            </li>
                        </ul>
                    </div>
                </header>
                <div className={style.content}>
                    <LeftSetup display={this.state.display}>
                        <div className>
                            跳转的组件
                        </div>
                    </LeftSetup>
                    <div className={style.right}>1234654897894652132165465154321</div>
                </div>
            </div>
        )
    }
}