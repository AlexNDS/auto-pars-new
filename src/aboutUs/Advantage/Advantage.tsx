import React, {useState} from 'react';
import style from './Advantage.module.scss'
import {Button} from "../../common/components/button/Button";

type AdvantageType = {
    icon: string
    title: string
    description: string
}
export const Advantage = (props: AdvantageType) => {
    const [show, setShow] = useState(false)
    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    return (
        <div className={style.advantage}
             onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave}
        >

            {
                show ? (
                    <div className={style.show}>
                        <img src={props.icon} />
                        <p>{props.title}</p>
                        <span className={style.description}>{props.description}</span>
                    </div>
                ) : (
                    <div className={style.text}>
                        <img src={props.icon} />
                        <p>{props.title}</p>
                    </div>
                )}

        </div>


    )
        ;
}

