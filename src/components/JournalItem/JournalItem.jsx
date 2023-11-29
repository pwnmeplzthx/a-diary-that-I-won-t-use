import React from 'react';
import './JournalItem.css';
import { dateFormatter } from '../../libs/dateFormatter';

const JournalItem = (props) => {
    const { title, date, text } = props;

    return (
        <>
            <h2 className="journal-item__header">{title}</h2>
            <div className="journal-item__body">
                <div className="journal-item__date">{dateFormatter(date)}</div>
                <div className="journal-item__text">{text}</div>
            </div>
        </>
    );
};

export default JournalItem;
