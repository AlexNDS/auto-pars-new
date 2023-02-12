import React from 'react';
import style from './InfoBlocks.module.scss'

import {Title} from "../common/components/title/Title";
import car from "../accets/images/car.png"
import carParts from "../accets/images/carParts.png"
import document from "../accets/images/document.png"
import {Block} from "./block/block";


export const InfoBlocks = () => {

    return (
        <div className={style.infoBlocks} id="infoBlocks">
            <div className={style.infoBlocksContainer}>
                {/*<Title color={'#2c3e50'}*/}
                {/*       title={'Легко подберём любые запчасти и тех. жидкости именно на Ваш автомобиль'}*/}
                {/*/>*/}
                <div className={style.blocks}>
                    <Block
                        title={'Большой каталог запчастей'}
                        description={'Фильтра, кузовные части, запчасти подвески, ДВС,коробки передач, трансмиссии, электрооборудования, дополнительного оборудования и т.д., а также масел, жидкостей ГУР, охлаждающих жидкостей и многое другое.'}
                        icon={carParts} />
                    <Block
                        title={'На автомобили всех производителей'}
                        description={'Toyota, Honda,Subaru, Nissan, Suzuki, Mazda, Mitsubishi, BMW, Mini, Rolls-Royce, Mercedes-Benz, Peugeot, Citroen, DS, Opel, Alfa Romeo, Chrysler, Dodge, Jeep, Maserati, Ferrari, Lancia, RAM, Ford, Lincoln, Hyundai, Kia, Genesis, Buick, Cadillac, Chevrolet, GMC, Dacia, Datsun, Infiniti, Lada, Renault, Samsung Motors, Daihatsu, Hino, Lexus, Audi, Bentley, Bugatti, Lamborghini, MAN, Porsche, SEAT, Scania, Skoda, Volkswagen.'}
                        icon={car} />
                    <Block
                        title={'По Вашему VIN или Frame'}
                        description={'Мы находим оригинальные запчасти по электронным каталогам (занимаемся поиском OEM номеров), и сообщаем Вам каталожный номер запчасти и, если это требуется заменители/аналоги этой запчасти, производителя заменителя и примерные цены. Цены на запчасти могут отличаться от названных нами т.к. в каждом регионе РФ свои условия ценообразования.'}
                        icon={document} />
                </div>

            </div>
        </div>
    );
}
