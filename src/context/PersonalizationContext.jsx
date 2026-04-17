import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { fetchPersonalization, DEFAULT_SLIDES } from '../hooks/usePersonalization';

const PersonalizationContext = createContext({
  geo: null,
  company: null,
  industry: null,
  slides: DEFAULT_SLIDES,
  geoLabel: null,
  loading: true,
});

export function PersonalizationProvider({ children }) {
  const [data, setData] = useState({
    geo: null,
    company: null,
    industry: null,
    slides: DEFAULT_SLIDES,
    geoLabel: null,
    loading: true,
  });

  useEffect(() => {
    // Non-blocking: runs after first paint
    let cancelled = false;
    fetchPersonalization().then((result) => {
      if (!cancelled) setData(result);
    });
    return () => { cancelled = true; };
  }, []);

  // Memoize so consumers only re-render when data actually changes
  const value = useMemo(() => data, [data]);

  return (
    <PersonalizationContext.Provider value={value}>
      {children}
    </PersonalizationContext.Provider>
  );
}

// Custom hook for easy consumption
export function usePersonalization() {
  return useContext(PersonalizationContext);
}
