import React, {FC} from 'react'
import style from './Sidebar.module.scss'
import {LinkComponent} from "../nav/link/Link";


type PropsType = {
    open: boolean
    handleClose: () => void
}

export const Sidebar: FC<PropsType> = ({open, handleClose}) => {
    const sidebarClass = style.sidebar
        + (open ? ' ' + style.open : '')

    return (
        <>
            {/*затемнение справа от открытого меню*/}
            {open && <div className={style.background} onClick={handleClose}/>}

            <aside className={sidebarClass}>
                <nav id={'menu'} className={style.nav}>
                    <LinkComponent text={'Главная'} navigateTo={'main'} onClick={handleClose}/>
                    <LinkComponent text={'Что мы делаем'} navigateTo={'infoBlocks'} onClick={handleClose}/>
                    <LinkComponent text={'О нас'} navigateTo={'aboutUs'} onClick={handleClose}/>
                    <LinkComponent text={'Контакты'} navigateTo={'contacts'} onClick={handleClose}/>
                </nav>
            </aside>
        </>
    )
}
