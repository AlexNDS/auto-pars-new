import style from "./Button.module.scss";

type ButtonType = {
    link: string
    text: string
}
export const Button = (props: ButtonType) => {
    return (
        <a href={props.link}
           className={style.btn}>{props.text}</a>
    )
}