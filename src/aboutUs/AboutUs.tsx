import React from 'react';
import style from './AboutUs.module.scss'

import charity from '../accets/images/charity.png'
import responsible from '../accets/images/responsible.png'
import technician from '../accets/images/technician.png'

import {Advantage} from "./Advantage/Advantage";


export const AboutUs = () => {
    return (
        <div className={style.aboutUsBlock} id="aboutUs">
            <div className={style.mainInfo}>
                <h2>О нас</h2>
                <p>Наши специалисты прошли обучение и имеют сертификаты подтверждающие квалификацию.</p>
            </div>
            <div className={style.advantagesContainer}>
                <div className={style.advantages}>
                    <Advantage
                        icon={charity}
                        title={'Мы заботимся о вас'}
                        description={'Мы знаем - у Вас мало времени, чтобы заниматься поиском OEM оригинальных запчастей по каталогам и мы ценим Ваше время. Поэтому берем эту работу на себя. Вы экономите массу времени на более важные дела и получаете всю необходимую информацию.'}
                    />

                    <Advantage
                        icon={technician}
                        title={'Мы специализируемся на подборе запчастей.'}
                        description={'Для того, чтобы  профессионально заниматься подбором запчастей и технических жидкостей - это , кстати наше любимое дело, мы прошли специальные курсы подготовки.'}
                    />
                    <Advantage
                        icon={responsible}
                        title={'Мы несем ответственность'}
                        description={'Также мы несем ответственность за свою работу, это тоже подтверждается необходимыми документами, которые Вы можете найти внизу страницы.'}
                    />
                </div>

            </div>
        </div>
    );
}

