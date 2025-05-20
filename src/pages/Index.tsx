
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import Card from '@/components/ui/material/Card';
import MuiButton from '@/components/ui/material/Button';
import TextField from '@/components/ui/material/TextField';

const Index = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Welcome to Your Project</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Shadcn/UI Components</h2>
            <div className="flex flex-wrap gap-3 mb-4">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Material UI Style Components</h2>
            <div className="flex flex-wrap gap-3 mb-4">
              <MuiButton>Default</MuiButton>
              <MuiButton variant="outlined" color="primary">Outlined</MuiButton>
              <MuiButton variant="text" color="primary">Text</MuiButton>
              <MuiButton color="secondary">Secondary</MuiButton>
              <MuiButton color="error">Error</MuiButton>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <Card.Header title="Card Component" subheader="Material design style card" />
            <Card.Content>
              <p className="mb-4">This is a Material UI style card component built with Tailwind CSS.</p>
              <TextField 
                label="Text Field" 
                placeholder="Enter some text" 
                fullWidth 
              />
            </Card.Content>
            <Card.Actions>
              <MuiButton size="small">Cancel</MuiButton>
              <MuiButton size="small" color="primary">Save</MuiButton>
            </Card.Actions>
          </Card>
          
          <div className="p-6 rounded-lg border">
            <h3 className="text-lg font-medium mb-4">Project Structure</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>components/layout:</strong> Layout components</li>
              <li><strong>components/ui:</strong> UI components (shadcn & material)</li>
              <li><strong>hooks:</strong> Custom React hooks</li>
              <li><strong>context:</strong> React context providers</li>
              <li><strong>lib:</strong> Utility functions</li>
              <li><strong>pages:</strong> Page components</li>
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
