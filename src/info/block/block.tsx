import React from 'react';
import style from './InfoBlock.module.scss'


type BlockType = {
    title: string
    description: string
    icon: string
}
export const Block = ({icon, title, description}: BlockType) => {
    return (
        <div className={style.infoBlock}>
            <img src={icon} className={style.icon}/>
            <h3>{title}</h3>
            <p className={style.description}>{description}</p>
        </div>
    );
}

