"use client()";
import { useState } from 'react';
import styles from './Accordion.module.css';

const AccordionItem = ({ title, description, content, isOpen, onClick }) => {
    return (
        <div className={styles['accordion-item']}>
            <div className={styles['accordion-header']} onClick={onClick}>
                <h2 className={styles['accordion-title']}>{title}</h2>
                <p className={styles['accordion-description']}>{description}</p>
                <button className={`${styles['accordion-button']} ${isOpen ? styles['open'] : ''}`}>
                    {isOpen ? '-' : '+'}
                </button>
            </div>
            <div className={`${styles['accordion-collapse']} ${isOpen ? styles['show'] : ''}`}>
                <div className={styles['accordion-body']}>
                    {content}
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;
