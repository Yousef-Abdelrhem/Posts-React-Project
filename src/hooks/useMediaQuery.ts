
import { useState, useEffect } from 'react';

/**
 * Custom hook for detecting if a media query matches
 * @param query The media query to check
 * @returns Boolean indicating if the query matches
 */
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const updateMatch = () => setMatches(mediaQuery.matches);
    
    // Set initial value
    updateMatch();
    
    // Add listener
    mediaQuery.addEventListener('change', updateMatch);
    
    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', updateMatch);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
