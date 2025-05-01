export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const stagger = (delay = 0.1) => ({
  visible: {
    transition: {
      staggerChildren: delay
    }
  }
});

export const slideIn = (direction: 'left' | 'right' | 'up' | 'down', delay = 0) => {
  let x = 0;
  let y = 0;
  
  if (direction === 'left') x = -50;
  if (direction === 'right') x = 50;
  if (direction === 'up') y = -50;
  if (direction === 'down') y = 50;
  
  return {
    hidden: { opacity: 0, x, y },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0,
      transition: {
        delay,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
};

// Function to check if an element is in viewport
export const isInViewport = (element: HTMLElement, offset = 0): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top + offset < (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom > 0
  );
};