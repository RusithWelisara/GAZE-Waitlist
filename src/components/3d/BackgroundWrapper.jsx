import React from 'react';
import { useLocation } from 'react-router-dom';
import Scene from './Scene';

const BackgroundWrapper = () => {
    const location = useLocation();

    // Define opacity based on route
    const getOpacity = (path) => {
        switch (path) {
            case '/':
                return 1;
            case '/how-it-works':
                return 0.8;
            case '/features': // Assuming this might be in between
                return 0.7;
            case '/demo':
                return 0.6;
            case '/trust': // Safety
                return 0.4;
            case '/install': // Docs
                return 0.2;
            case '/waitlist':
                return 0.05; // Almost invisible
            default:
                return 0.5;
        }
    };

    const opacity = getOpacity(location.pathname);

    return <Scene opacity={opacity} />;
};

export default BackgroundWrapper;
