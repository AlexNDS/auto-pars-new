import React from 'react';
import style from './Location.module.scss'
import { YMaps, Map } from '@pbe/react-yandex-maps';

export const Location = () => {
    return (
        <div className={style.locationBlock}>
            <div className={style.columnTwo}>
                <h3>Мы находимся в <b>г.Братске</b> Иркутской области</h3>
                <p className={style.description}>В Братске мы также предоставляем услуги по закупке и доставки запчастей, подбор по ценам и срокам.</p>
            </div>
            <div className={style.mapContainer}>
                <YMaps>
                        <Map defaultState={{ center: [56.151682, 101.633505], zoom: 10 }} width={'100%'} height={'100%'}/>
                </YMaps>
            </div>
        </div>
    );
}

