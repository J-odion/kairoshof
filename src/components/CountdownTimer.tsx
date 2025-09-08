import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

const CountdownTimer = ({ targetDate, className = "" }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={`flex space-x-2 ${className}`}>
      <div className="text-center">
        <div className="bg-primary/10 rounded-lg p-2 min-w-[3rem]">
          <div className="text-lg font-bold text-primary">{timeLeft.days}</div>
          <div className="text-xs text-muted-foreground">Days</div>
        </div>
      </div>
      <div className="text-center">
        <div className="bg-primary/10 rounded-lg p-2 min-w-[3rem]">
          <div className="text-lg font-bold text-primary">{timeLeft.hours}</div>
          <div className="text-xs text-muted-foreground">Hours</div>
        </div>
      </div>
      <div className="text-center">
        <div className="bg-primary/10 rounded-lg p-2 min-w-[3rem]">
          <div className="text-lg font-bold text-primary">{timeLeft.minutes}</div>
          <div className="text-xs text-muted-foreground">Min</div>
        </div>
      </div>
      <div className="text-center">
        <div className="bg-primary/10 rounded-lg p-2 min-w-[3rem]">
          <div className="text-lg font-bold text-primary">{timeLeft.seconds}</div>
          <div className="text-xs text-muted-foreground">Sec</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;