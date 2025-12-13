import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead, { PAGE_SEO_CONFIG } from '../components/SEOHead';

const Terms: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="bg-p-paper dark:bg-p-black min-h-screen pt-32 pb-20 px-6">
      <SEOHead 
        title={PAGE_SEO_CONFIG.terms.title}
        description={PAGE_SEO_CONFIG.terms.description}
        keywords={PAGE_SEO_CONFIG.terms.keywords}
      />
      <div className="max-w-3xl mx-auto text-p-ink dark:text-p-cream">
        <h1 className="text-5xl font-serif mb-12">Terms of Service</h1>
        <p className="text-sm font-light text-p-ink/60 dark:text-p-cream/60 mb-12">Last Updated: March 2024</p>
        
        <div className="space-y-10 font-light leading-relaxed opacity-90">
            <p>
                By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
            </p>
            
            <h2 className="text-2xl font-serif mt-12 mb-6">Intellectual Property</h2>
            <p>
                All content, trademarks, logos, and intellectual property displayed on this site are the property of Prismeek or its licensors. You may not use, reproduce, or distribute any content without our prior written permission.
            </p>

            <h2 className="text-2xl font-serif mt-12 mb-6">Services</h2>
            <p>
                Prismeek provides digital design and development services. The specific terms of service for each project will be outlined in a separate agreement or contract.
            </p>
            
            <h2 className="text-2xl font-serif mt-12 mb-6">Limitation of Liability</h2>
            <p>
                In no event shall Prismeek or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Prismeek's Internet site.
            </p>
        </div>
        
        <div className="mt-20 pt-10 border-t border-p-ink/10 dark:border-white/10">
            <Link to="/" className="text-violet-400 hover:underline text-sm uppercase tracking-widest">Return Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Terms;
