import React from 'react';
import style from './InfoBlocks.module.scss'
import {InfoBlock} from "./infoBlock/InfoBlock";
import {Title} from "../common/components/title/Title";
import Carousel from "react-material-ui-carousel";
import one from '../accets/images/one.jpg'
import two from '../accets/images/two.jpg'
import three from '../accets/images/three.jpg'

export const InfoBlocks = () => {
    const items = [
        {
            name: "Большой каталог запчастей",
            description: "Pильтра, кузовные части, запчасти подвески, ДВС,коробки передач, трансмиссии, электрооборудования, дополнительного оборудования и т.д., а также масел, жидкостей ГУР, охлаждающих жидкостей и многое другое.",
            img: one
        },
        {
            name: "На автомобили всех производителей",
            description: "Toyota, Honda,Subaru, Nissan, Suzuki, Mazda, Mitsubishi, BMW, Mini, Rolls-Royce, Mercedes-Benz, Peugeot, Citroen, DS, Opel, Alfa Romeo, Chrysler, Dodge, Jeep, Maserati, Ferrari, Lancia, RAM, Ford, Lincoln, Hyundai, Kia, Genesis, Buick, Cadillac, Chevrolet, GMC, Dacia, Datsun, Infiniti, Lada, Renault, Samsung Motors, Daihatsu, Hino, Lexus, Audi, Bentley, Bugatti, Lamborghini, MAN, Porsche, SEAT, Scania, Skoda, Volkswagen.",
            img: two
        },
        {
            name: "По Вашему VIN или Frame",
            description: "Мы находим оригинальные запчасти по электронным каталогам (занимаемся поиском OEM номеров), и сообщаем Вам каталожный номер запчасти и, если это требуется заменители/аналоги этой запчасти, производителя заменителя и примерные цены. Цены на запчасти могут отличаться от названных нами т.к. в каждом регионе РФ свои условия ценообразования.",
            img: three
        }
    ]

    return (
        <div className={style.infoBlocks} id="infoBlocks">
            <div className={style.infoBlocksContainer}>
                <Title color={'#2c3e50'}
                       titlePartOne={'на ваш автомобиль'}
                       titlePartTwo={'подберём любые запчасти и тех. жидкости'}
                />
                <Carousel animation={"slide"}>
                    {
                        items.map((item, i) => <InfoBlock key={i} title={item.name} description={item.description}
                                                          img={item.img}/>)
                    }
                </Carousel>

            </div>
        </div>
    );
}

