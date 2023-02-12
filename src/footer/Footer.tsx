import React from 'react';
import style from './Footer.module.scss'
import {ReactComponent as Telegram} from "../accets/images/telegram.svg";
import {ReactComponent as Vk} from "../accets/images/vk.svg";
import {ReactComponent as Whatsapp} from "../accets/images/whatsapp.svg";
import {ReactComponent as Viber} from "../accets/images/viber.svg";
import phone from "../accets/images/telephone.png";
import mail from "../accets/images/mail.png";


export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <div className={style.footerInfo}>
                    <div className={style.text}>
                        <div className={style.textBlock}>
                            <img src={phone} className={style.img} alt={'phone'}/>
                            <p>+79996443811</p>
                        </div>
                        <div className={style.textBlock}>
                            <img src={mail} className={style.img} alt={'mail'}/>
                            <p>Email: exist.ofis@yandex.ru</p>
                        </div>

                    </div>
                    <div className={style.socialIcons}>
                        <a href="https://t.me/podborZapchastey"><Telegram className={style.icon}/></a>
                        <a href="https://invite.viber.com/?g2=AQBGqG0Z2NXG6lB%2BOP2IoII8jFoHVZdd1P58in44qYLqCFklwJE%2FYSjx4ZQ9mKqL&lang=ru"><Viber
                            className={style.icon}/></a>
                        <a href="https://vk.com/podboravtozapchasti"><Vk className={style.icon}/></a>
                        <a href="https://chat.whatsapp.com/FRHg1KcmId3LlZFyYUExpr"><Whatsapp
                            className={style.icon}/></a>

                    </div>
                </div>
                <div className={style.right}>
                    <p>All Right Reserved!</p>
                    <p>2023</p>
                </div>

            </div>
        </div>
    )
        ;
}
