import React from 'react';
import AnimatedCounter from '../../common/AnimatedCounter/AnimatedCounter';
import './StatsCounter.css';

const StatsCounter = () => {
  return (
    <div className="stats-counter-overlay">
      <div className="stats-counter-container">
        <AnimatedCounter 
          symbol="$" 
          targetNumber={75000} 
          duration={2} 
          subtitle="Average Package" 
        />
        <AnimatedCounter 
          symbol="+" 
          targetNumber={2000} 
          duration={2} 
          symbolPosition="end" 
          subtitle="Students Placed" 
        />
        <AnimatedCounter 
          symbol="%" 
          targetNumber={99} 
          duration={2} 
          symbolPosition="end"
          subtitle="Placement Success" 
        />
      </div>
    </div>
  );
};

export default StatsCounter;