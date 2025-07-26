import { useEffect, useState } from 'react';

const VisitorTracker = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    // Fetch visitor count from backend
    const fetchVisitorCount = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/visitor-count");
        const data = await res.json();
        setVisitorCount(data.visitorCount);
      } catch (error) {
        console.error("Failed to fetch visitor count:", error);
      }
    };

    fetchVisitorCount();

    const timer = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      setTimeSpent(elapsed);
    }, 1000);

    return () => clearInterval(timer);
  }, [startTime]);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hrs > 0) return `${hrs}H ${mins}M ${secs}S`;
    if (mins > 0) return `${mins}M ${secs}S`;
    return `${secs}S`;
  };

  return (
    <div className="border-box-thick bg-background p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
        <div className="border-box p-4">
          <div className="text-3xl font-bold text-foreground mb-2">{visitorCount.toLocaleString()}</div>
          <div className="text-sm text-muted-foreground uppercase tracking-wide">
            TOTAL VISITORS
          </div>
        </div>
        <div className="border-box p-4">
          <div className="text-3xl font-bold text-foreground mb-2">{formatTime(timeSpent)}</div>
          <div className="text-sm text-muted-foreground uppercase tracking-wide">
            TIME SPENT ON PORTFOLIO
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorTracker;
