import React from 'react'
import { Breadcrumb } from 'antd';
import { Button } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import style from './index.module.css'
export default class BreadCrumb extends React.Component {
    state = {

    }

    render = () => {
        return (
            <div className={style.box}>
                <div className={style.left}>
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a>栏目管理</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a>栏目列表</a>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="right">
                <Button type="primary" style={{backgroundColor:"#2fb9d4" ,width:"36px",height:"30px",border:"none"}} icon={<SyncOutlined />} size="middle" />
                </div>
            </div>
        )
    }
}

