import { useEffect } from 'react';

interface SEOMetaTagsProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

const SEOMetaTags: React.FC<SEOMetaTagsProps> = ({
  title,
  description,
  keywords,
  ogImage = '/og-image.jpg',
  canonical
}) => {
  useEffect(() => {
    // Update basic meta tags
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    if (keywords) {
      document.querySelector('meta[name="keywords"]')?.setAttribute('content', keywords);
    }

    // Update Open Graph tags
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', ogImage);

    // Update Twitter tags
    document.querySelector('meta[property="twitter:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="twitter:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="twitter:image"]')?.setAttribute('content', ogImage);

    // Update canonical URL if provided
    const canonicalElement = document.querySelector('link[rel="canonical"]');
    if (canonicalElement && canonical) {
      canonicalElement.setAttribute('href', canonical);
    }
  }, [title, description, keywords, ogImage, canonical]);

  return null;
};

export default SEOMetaTags;
