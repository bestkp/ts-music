import React from 'react'
import {useSelector, useDispatch, connect} from 'react-redux'
import {Button} from 'antd'
import {increment, decrement, getList} from '@/redux/action'

function About({counter, getlist, increment, decrement, getList}: any) {
    return (
        <>
            <h1>Hello, {counter}</h1>
            <Button onClick={increment}>+</Button>
            <Button onClick={decrement}>-</Button>

            <hr/>
            <h1>名单：</h1>
            {getlist.map((gl:any) => {
                return (
                    <h3 key={gl.name}>姓名：{gl.name} -- 年龄：{gl.age}</h3>
                )
            })}
            <Button onClick={getList}>获取数据</Button>
        </>
    )
}

const mapStateToProps = (state: any) => {
    const {counter, getlist} = state;
    return {counter, getlist }
}

const mapDispatchToProps = {
    increment,
    decrement,
    getList
}

export default connect(mapStateToProps, mapDispatchToProps)(About)