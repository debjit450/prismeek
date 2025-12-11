import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Privacy: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="bg-p-paper dark:bg-p-black min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto text-p-ink dark:text-p-cream">
        <h1 className="text-5xl font-serif mb-12">Privacy Policy</h1>
        <p className="text-sm font-light text-p-ink/60 dark:text-p-cream/60 mb-12">Last Updated: March 2024</p>
        
        <div className="space-y-10 font-light leading-relaxed opacity-90">
            <p>
                At Prismeek, we are committed to maintaining the trust and confidence of our visitors to our web site. In particular, we want you to know that Prismeek is not in the business of selling, renting or trading email lists with other companies and businesses for marketing purposes.
            </p>
            
            <h2 className="text-2xl font-serif mt-12 mb-6">Collection and Use of Personal Information</h2>
            <p>
                We collect personal information when you request a consultation or sign up for our newsletter. This information is used to communicate with you about your project and to provide you with relevant information about our services.
            </p>

            <h2 className="text-2xl font-serif mt-12 mb-6">Cookies</h2>
            <p>
                Our website uses cookies to collect information. This includes information about browsing and purchasing behavior by people who access our websites. This includes information about pages viewed, products purchased and the customer journey around our websites.
            </p>
            
            <h2 className="text-2xl font-serif mt-12 mb-6">Data Security</h2>
            <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
            </p>
        </div>
        
        <div className="mt-20 pt-10 border-t border-p-ink/10 dark:border-white/10">
            <Link to="/" className="text-p-gold hover:underline text-sm uppercase tracking-widest">Return Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Privacy;