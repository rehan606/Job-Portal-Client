import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 text-white">
                <div className="container mx-auto py-10 px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About JobPortal</h3>
                        <p className="text-sm text-gray-400">
                            JobPortal connects job seekers with top employers across various industries. Explore opportunities and build your career today.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-sm text-gray-400 hover:text-white">Home</a></li>
                            <li><a href="/jobs" className="text-sm text-gray-400 hover:text-white">Find Jobs</a></li>
                            <li><a href="/employers" className="text-sm text-gray-400 hover:text-white">For Employers</a></li>
                            <li><a href="/contact" className="text-sm text-gray-400 hover:text-white">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Subscribe Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Subscribe to Newsletter</h3>
                        <p className="text-sm text-gray-400 mb-4">
                            Stay updated with the latest job postings and career tips.
                        </p>
                        <form className="flex items-center">
                            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 text-gray-900 rounded-l-md focus:outline-none" />
                            <button type="submit" className="bg-blue-600 px-4 py-2 rounded-r-md text-white hover:bg-blue-500">Subscribe</button>
                        </form>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="bg-gray-700 py-4 mt-8">
                    <div className="container mx-auto text-center">
                        <p className="text-sm text-gray-400">&copy; 2024 JobPortal. All rights reserved.</p>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;