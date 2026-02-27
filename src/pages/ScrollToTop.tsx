import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" or "window.scrollTo" works
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      // behavior: "instant" 
    });
  }, [pathname]); // This effect runs whenever the pathname changes

  return null; // This component doesn't render anything
}