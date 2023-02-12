import { createStandaloneToast } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { BODY_PADDING, MAIN_PADDING_X } from './const';

export const showToast = (config) => {
  const { content, status = 'info', title } = config;
  const { toast } = createStandaloneToast();
  return toast({
    description: content,
    status,
    title,
    duration: 4000,
    isClosable: true,
    position: 'top-right'
  });
};

export const useMediaQuery = (query) => {
  const getMatches = (query) => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState(getMatches(query));
  const handleChange = useCallback(() => setMatches(getMatches(query)), [query]);

  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();

    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener('change', handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener('change', handleChange);
      }
    };
  }, [handleChange, query]);

  return matches;
};

export default function useWindowDimensions() {
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  };

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export const useScrollTop = (dependencies) =>
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [dependencies]);

export const useGetTableWidth = () => {
  const { width: windowWidth } = useWindowDimensions();
  return {
    xs: `${
      windowWidth - 2 * Number(BODY_PADDING.xs.replace('px', '')) - 2 * Number(MAIN_PADDING_X.xs.replace('px', ''))
    }px`,
    md: `${
      windowWidth - 2 * Number(BODY_PADDING.md.replace('px', '')) - 2 * Number(MAIN_PADDING_X.md.replace('px', ''))
    }px`,
    lg: 'full'
  };
};
