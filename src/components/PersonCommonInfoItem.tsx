import React from 'react';
import s from "../styles/PersonPage.module.css";

type props = {
    title: string
    content: string | string[]
}

export const PersonCommonInfoItem:React.FC<props> = ({title, content}:props) => {
    return (
        <div>
            <span className={s.subTitle}>{title}</span>
            {Array.isArray(content)
                ? content.map( (item,index) =>
                <span className={s.CommonInfo} key={index}>{item}</span>)
                :<span className={s.CommonInfo}>{content}</span> }
        </div>
    );
};
