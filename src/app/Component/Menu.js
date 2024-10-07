"use client";
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Menu = ({ onClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
        if (typeof onClick === 'function') {
            onClick();
        }
    };

    return (
        <div
            className={`menuicon ${isOpen ? 'open fixed-position' : ''}`}  // Added 'fixed-position' class when open
            onClick={handleClick}
        >
            <svg
                width="50"
                height="25"
                viewBox="0 0 50 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    className="line line1"
                    d="M1.56246 3.12492H48.4374C49.2999 3.12492 49.9999 2.42487 49.9999 1.56246C49.9999 0.699926 49.2998 0 48.4374 0H1.56246C0.699925 0 0 0.700055 0 1.56246C0 2.42487 0.700055 3.12492 1.56246 3.12492Z"
                    fill="white"
                />
                <path
                    className="line line2"
                    d="M48.4374 10.9375H1.56246C0.699925 10.9375 0 11.6376 0 12.5C0 13.3624 0.700055 14.0624 1.56246 14.0624H48.4374C49.2999 14.0624 49.9999 13.3624 49.9999 12.5C49.9999 11.6376 49.2999 10.9375 48.4374 10.9375Z"
                    fill="white"
                />
                <path
                    className="line line3"
                    d="M48.4374 21.875H17.1875C16.3249 21.875 15.625 22.5751 15.625 23.4375C15.625 24.3 16.3251 24.9999 17.1875 24.9999H48.4374C49.3 24.9999 49.9999 24.2999 49.9999 23.4375C50 22.5749 49.3 21.875 48.4374 21.875Z"
                    fill="white"
                />
            </svg>
        </div>
    );
};

Menu.propTypes = {
    onClick: PropTypes.func,
};

Menu.defaultProps = {
    onClick: () => {},
};

export default Menu;
