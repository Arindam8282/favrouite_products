import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const useVariablePrice = ({ delay = 10000, incrementBy = 0 }) => {
  const interval = useRef(0);
  const [date, setDate] = useState('');
  const incrementPrice = useRef(0);

  useEffect(() => {
    if (interval.current) {
      clearInterval(interval.current);
    }

    interval.current = setInterval(() => {
      setDate(new Date());
    }, delay);
  }, []);

  return useMemo(() => {
    if (date !== '') incrementPrice.current += incrementBy;
    
    return {
      incrementPrice: incrementPrice.current,
    }
  }, [date]);
};

export default useVariablePrice;
