import React, { useEffect, useRef } from 'react';

const LottieAnimation = ({ animationPath, className }) => {
    const animationContainer = useRef(null);
    const animInstance = useRef(null);

    useEffect(() => {
        const loadAnimation = () => {
            if (window.lottie) {
                if (animInstance.current) {
                    animInstance.current.destroy();
                }
                animInstance.current = window.lottie.loadAnimation({
                    container: animationContainer.current,
                    renderer: 'svg',
                    loop: true,
                    autoplay: true,
                    path: animationPath
                });
            } else {
                console.error("Lottie not available");
            }
        };

        if (!window.lottie) {
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.7.14/lottie.min.js';
            script.onload = loadAnimation;
            document.head.appendChild(script);
            return () => {
                document.head.removeChild(script);
            };
        } else {
            loadAnimation();
        }

        return () => {
            if (animInstance.current) {
                animInstance.current.destroy();
            }
        };
    }, [animationPath]);

    // Apply the passed className to the container
    return <div ref={animationContainer} className={`lottie-animation-container ${className}`}></div>;
};

export default LottieAnimation;
