import React from 'react'
import style from './index.module.css'
import BreadCrumb from '../../components/BreadCrumb/index'
import Xcolok from '../../components/Xcolok/index'
import List from '../../components/list/index'
export default class ColumnList extends React.Component {
    state = {

    }

    render = () => {
        return (
            <div className={style.box}>
                <div className={style.cnav}>
                    <BreadCrumb />
                </div>
                <div className={style.cbody}>
                    <Xcolok />
                    <List />
                </div>
            </div>
        )
    }
}

