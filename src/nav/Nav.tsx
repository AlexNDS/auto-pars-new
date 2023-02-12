import React from 'react';
import style from './Nav.module.scss'
import burgerIcon from '../accets/images/menu.png'
import closeIcon from '../accets/images/close.png'
import {LinkComponent} from "./link/Link";

const Nav = (props: {open: boolean, handleOpen: () => void, handleClose: () => void}) => {
    const closeClass = style.closeIcon
        + (props.open ? ' ' + style.closeMenu : '')
    const burgerClass = style.burgerMenuIcon
        + (props.open ? ' ' + style.openMenu : '')

    return (
        <div className={style.nav}>
            <p>Подбор автозапчастей</p>
            <LinkComponent text={'Главная'} navigateTo={'main'}/>
            <LinkComponent text={'Что мы делаем'} navigateTo={'infoBlocks'}/>
            <LinkComponent text={'О нас'} navigateTo={'aboutUs'}/>
            <LinkComponent text={'Контакты'} navigateTo={'contacts'}/>
            <div className={style.navTrigger}>
                <img
                    src={burgerIcon}
                    id={'hw5-burger-menu'}
                    className={burgerClass}
                    onClick={props.handleOpen}
                    alt={'open menu'}
                />
                <img
                    src={closeIcon}
                    alt="close sidebar"
                    id={'hw5-menu-close'}
                    className={closeClass}
                    onClick={props.handleClose}
                />
            </div>
        </div>
    );
}

export default Nav;