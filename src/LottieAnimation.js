import React, { useEffect, useRef } from 'react';

const LottieAnimation = ({ animationPath }) => {
    const animationContainer = useRef(null);

    useEffect(() => {
        // Check if the lottie library is available
        const loadLottie = () => {
            if (window.lottie) {
                const anim = window.lottie.loadAnimation({
                    container: animationContainer.current, // the DOM element that will contain the animation
                    renderer: 'svg',
                    loop: true,
                    autoplay: true,
                    path: animationPath // the path to the animation JSON file
                });

                return () => anim.destroy(); // Cleanup function to destroy animation
            } else {
                console.error("Lottie not available");
            }
        };
        
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.7.14/lottie.min.js';
        script.onload = loadLottie;
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, [animationPath]);

    return <div ref={animationContainer} style={{ width: '100%', height: '100%' }} />;
};

export default LottieAnimation;
