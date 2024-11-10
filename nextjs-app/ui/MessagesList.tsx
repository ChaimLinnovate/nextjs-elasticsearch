import React from 'react';

interface MessagesListProps {
    children: React.ReactNode
}

export const MessagesList: React.FC<MessagesListProps> = ({ children }) => {
    return (
        <div className="grid grid-cols-1 gap-4 pt-4">
            {children}
        </div>
    );
};