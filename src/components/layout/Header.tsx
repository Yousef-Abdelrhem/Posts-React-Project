
import React from 'react';
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between border-b">
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold">My App</h1>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <SunIcon className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
