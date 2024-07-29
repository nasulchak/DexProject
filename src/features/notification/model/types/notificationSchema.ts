export interface NotificationSchema {
    message: string;
    type: 'success' | 'error' | 'info';
    visible: boolean;
}