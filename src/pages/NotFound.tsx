
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-9xl font-bold mb-4 text-gradient">404</div>
        <h1 className="text-3xl font-bold mb-6">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The page you are looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground button-glow"
          >
            <Link to="/">Return Home</Link>
          </Button>
          <Button
            asChild
            variant="outline"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
