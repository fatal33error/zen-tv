const fs = require('fs');
const path = require('path');

const pages = [
  { dir: '.', name: 'Home' },
  { dir: 'pricing', name: 'Pricing' },
  { dir: 'free-trial', name: 'Free Trial' },
  { dir: 'channels', name: 'Channels' },
  { dir: 'resellers', name: 'Resellers' },
  { dir: 'tutorials', name: 'Tutorials' },
  { dir: 'contact', name: 'Contact' },
];

pages.forEach(p => {
  const pagePath = path.join(__dirname, 'src', 'app', p.dir, 'page.tsx');
  const clientPagePath = path.join(__dirname, 'src', 'app', p.dir, 'ClientPage.tsx');

  if (fs.existsSync(pagePath)) {
    const content = fs.readFileSync(pagePath, 'utf-8');
    
    // Only proceed if it has "use client"
    if (content.includes('"use client"') || content.includes("'use client'")) {
      // 1. Move the current page.tsx to ClientPage.tsx
      fs.writeFileSync(clientPagePath, content);
      
      // 2. Write a new page.tsx (Server Component)
      const serverComponentContent = `import ClientPage from './ClientPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "zen+ TV | ${p.name}",
  description: "Experience the best ${p.name.toLowerCase()} with zen+ TV.",
};

export default function Page() {
  return <ClientPage />;
}
`;
      fs.writeFileSync(pagePath, serverComponentContent);
      console.log('Refactored ' + p.dir);
    }
  }
});
