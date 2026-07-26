import { useMemo } from "react";

function Stars() {
  const stars = useMemo(() => {
    return Array.from({ length: 40 }, () => ({
      image: `/images/star-${Math.floor(Math.random() * 4 + 1)}.png`,
      size: Math.random() * 20 + 15,
      left: Math.random() * 100,
      top: Math.random() * 90 + 5,
      duration: 2 + Math.random() * 5,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star, index) => (
        <img
          key={index}
          src={star.image}
          alt="star"
          className="star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default Stars;