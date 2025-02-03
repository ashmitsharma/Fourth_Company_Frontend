import React, { useEffect, useState, useRef } from 'react';
import './AnimatedCounter.css';

// Define the props type
interface AnimatedCounterProps {
  symbol: string;
  symbolPosition?: 'start' | 'end';
  targetNumber: number;
  duration: number;
  subtitle: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  symbol,
  symbolPosition = 'start',
  targetNumber,
  duration,
  subtitle,
}) => {
  const [currentNumber, setCurrentNumber] = useState<number>(0);
  const counterRef = useRef<number>(0);
  const animationFrameRef = useRef<number>();
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.55 && !hasAnimated.current) {
            setIsVisible(true);
            hasAnimated.current = true;
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.55 // Trigger when 75% of the element is visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const endTime = startTime + duration * 1000;

    const updateCounter = () => {
      const now = Date.now();
      const progress = Math.min(1, (now - startTime) / (duration * 1000));
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.round(targetNumber * easeOutQuart);

      if (current !== counterRef.current) {
        counterRef.current = current;
        setCurrentNumber(current);
      }

      if (now < endTime) {
        animationFrameRef.current = requestAnimationFrame(updateCounter);
      }
    };

    animationFrameRef.current = requestAnimationFrame(updateCounter);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isVisible, targetNumber, duration]);

  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="counter-container" ref={elementRef}>
      <h1 className='counter-title'>
        {symbolPosition === 'start' ? (
          <>
            <span>{symbol}</span>
            <span>{formatNumber(currentNumber)}</span>
          </>
        ) : (
          <>
            <span>{formatNumber(currentNumber)}</span>
            <span>{symbol}</span>
          </>
        )}
      </h1>
      <h4 className='counter-subtitle'>{subtitle}</h4>
    </div>
  );
};

export default AnimatedCounter;
