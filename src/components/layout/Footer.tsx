
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-6 px-6 mt-auto border-t">
      <div className="container mx-auto">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} My Application. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
