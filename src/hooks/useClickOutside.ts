import { useEffect } from 'react';

export default function useClickOutside(ref: any, callback: () => void, exclude?: any) {
  useEffect(() => {
    function handleClickOutside(event: { target: any; }) {
      if (ref && ref.current && !ref.current.contains(event.target) && (!exclude || !exclude.contains(event.target))) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, exclude]);
}
