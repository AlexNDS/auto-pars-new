import React from 'react';
import style from './Title.module.scss'

type TitleProps = {
    titlePartOne: string
    titlePartTwo: string
}
export const Title = (props: TitleProps) => {

    return (
        <div className={style.titleBlock}>
            <div className={style.title}>
                <h2>{props.titlePartOne}</h2>
                <h3>{props.titlePartTwo}</h3>
            </div>
        </div>
    )
}

