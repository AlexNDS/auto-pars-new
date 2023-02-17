import React, {useState} from 'react';
import style from './Contacts.module.scss'
import {useFormik} from "formik";
import axios from "axios";

const Contacts = () => {
    const [isSendMessage, setIsSendMessage] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            vinFrame: '',
            sparePartName: ''
        },
        onSubmit: (values) => {
            setIsLoading(true)
            axios.post("https://mail-node-js.vercel.app/sendMessage", {
                name: values.name,
                phone: values.phone,
                email: values.email,
                vinFrame: values.vinFrame,
                sparePartName: values.sparePartName
            })
                .then(() => {
                    setIsSendMessage(true)
                    setIsLoading(false)
                })
        }
    });

    return (<div>
            <div className={style.contactsBlock} id="contacts">
                <div className={style.contactsContainer}>
                    <h5>Форма отправки <b>запроса</b></h5>
                    <div className={style.container}>
                        {isSendMessage
                            ? <div className={style.isSendMessage}>
                                <p>Спасибо за ваш запрос. Я свяжусь с вами в ближайшее время</p>
                                <button onClick={()=>{setIsSendMessage(false)}}>Ok</button>
                            </div>
                            : <form className={style.form} id="contacts-form" onSubmit={formik.handleSubmit}>
                                <div className={style.inputsLine}>
                                    <input className={style.input}
                                           placeholder={'Имя'} {...formik.getFieldProps("name")}/>
                                    <input className={style.input}
                                           placeholder={'Телефон'} {...formik.getFieldProps("phone")}/>
                                </div>
                                <div className={style.inputsLine}>
                                    <input className={style.input} placeholder={'Email'}
                                           type="email" {...formik.getFieldProps("email")}/>
                                    <input className={style.input}
                                           placeholder={'VIN/Frame'} {...formik.getFieldProps("vinFrame")}/>
                                </div>
                                <textarea className={style.textarea}
                                          placeholder={'Название запчасти'} {...formik.getFieldProps("sparePartName")}/>
                                <button type="submit" disabled={isLoading}>Отправить запрос</button>
                            </form>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;