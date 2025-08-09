'use client';

import React, { createContext, useContext, useRef } from 'react';

const CACHE_TTL = 5 * 60 * 1000; // 5 menit dalam milidetik

const PrefetchCacheContext = createContext();

export function PrefetchCacheProvider({ children }) {
  const cacheRef = useRef({}); // { id: { data, timestamp } }

  const getCache = (id) => {
    const entry = cacheRef.current[id];
    if (!entry) return null;

    const now = Date.now();
    if (now - entry.timestamp > CACHE_TTL) {
      // Cache expired, hapus
      delete cacheRef.current[id];
      return null;
    }
    return entry.data;
  };

  const setCache = (id, data) => {
    cacheRef.current[id] = {
      data,
      timestamp: Date.now(),
    };
  };

  return (
    <PrefetchCacheContext.Provider value={{ getCache, setCache }}>
      {children}
    </PrefetchCacheContext.Provider>
  );
}

export function usePrefetchCache() {
  return useContext(PrefetchCacheContext);
}
