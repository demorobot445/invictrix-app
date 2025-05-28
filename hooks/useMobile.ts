import { useState, useEffect } from 'react';

/**
 * Hook to detect if the current device is a mobile device.
 * @param {number} mobileBreakpoint - The max width in pixels that is considered a mobile device
 * @returns An object with:
 * - isMobile: boolean indicating if device is mobile
 * - orientation: 'portrait' or 'landscape'
 * - screenWidth: current screen width
 * - screenHeight: current screen height
 */
export function useMobile(mobileBreakpoint = 768) {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');
  const [screenSize, setScreenSize] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

  // Check if device is mobile by user agent (in addition to screen size)
  const checkIfMobileByUA = () => {
    if (typeof window === 'undefined' || !window.navigator) {
      return false;
    }

    const userAgent = window.navigator.userAgent.toLowerCase();
    return (
      /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
        userAgent
      ) || (window.matchMedia && window.matchMedia('(max-width: 767px)').matches)
    );
  };

  useEffect(() => {
    // Run only on client side
    if (typeof window === 'undefined') {
      return;
    }

    // Initial check
    const checkMobile = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isMobileBySize = width <= mobileBreakpoint;
      const isMobileByUA = checkIfMobileByUA();
      
      setIsMobile(isMobileBySize || isMobileByUA);
      setOrientation(width > height ? 'landscape' : 'portrait');
      setScreenSize({ width, height });
    };

    // Run check immediately
    checkMobile();

    // Add event listeners for resize and orientation change
    window.addEventListener('resize', checkMobile);
    window.addEventListener('orientationchange', checkMobile);

    // Clean up
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('orientationchange', checkMobile);
    };
  }, [mobileBreakpoint]);

  return {
    isMobile,
    orientation,
    screenWidth: screenSize.width,
    screenHeight: screenSize.height,
  };
}

export default useMobile;
