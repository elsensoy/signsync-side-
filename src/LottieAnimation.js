import React, { useEffect, useRef } from 'react';

const LottieAnimation = ({ animationPath }) => {
    const animationContainer = useRef(null);
    const animInstance = useRef(null);  // Store the animation instance

    useEffect(() => {
        // Function to load the Lottie animation
        const loadAnimation = () => {
            if (window.lottie) {
                if (animInstance.current) {
                    animInstance.current.destroy(); // Ensure previous instances are destroyed
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
                animInstance.current.destroy(); // Cleanup on component unmount
            }
        };
    }, [animationPath]);

    return <div ref={animationContainer} className="lottie-animation-container"></div>;
};

export default LottieAnimation;
