import React, { useEffect } from 'react';
import * as cls from './Notification.module.scss';
import classNames from 'classnames';

interface NotificationProps {
    message: string;
    type: 'success' | 'error' | 'info';
    onClose: () => void;
}

export const Notification: React.FC<NotificationProps> = ({ message, type, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 5000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={classNames(cls.notification, [cls[type]])}>
            <span>{message}</span>
        </div>
    );
};
