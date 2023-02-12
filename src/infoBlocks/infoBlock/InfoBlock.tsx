import React from 'react';
import style from './InfoBlock.module.scss'
import one from '../../accets/images/one.jpg'


type InfoBlock = {
    title: string
    description: string
    img: string
}
export const InfoBlock = ({img, title, description}: InfoBlock) => {
    return (
        <div className={style.infoBlock}>

            <img src={img} className={style.img}/>
            <div className={style.columnTwo}>
                <h3>{title}</h3>
                <p className={style.description}>{description}</p>
            </div>

        </div>
    );
}

