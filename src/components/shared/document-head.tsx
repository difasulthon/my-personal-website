// src/components/document-head.tsx
import { useEffect } from 'react';

type DocumentHeadProps = {
  title?: string;
  description?: string;
};

export default function DocumentHead({ 
  title = 'Difa Sulthon', 
  description = 'Personal Website' 
}: DocumentHeadProps) {
  useEffect(() => {
    document.title = title;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    
    metaDescription.setAttribute('content', description);
    
    return () => {
      document.title = 'Difa Sulthon';
    };
  }, [title, description]);

  return null;
}