import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4 mt-auto">
            <div className="container mx-auto px-4">
                <div className="flex justify-between">
                    <div>
                        <h5 className="font-bold mb-2">Contact Us</h5>
                        <ul>
                            <li>Email: info@juit.edu</li>
                            <li>Phone: +123 456 7890</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold mb-2">Location</h5>
                        <ul>
                            <li>Sector 3 Saltlake</li>
                            <li>Kolkata, West Bengal, 700098</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold mb-2">Career</h5>
                        <ul>
                            <li><a href="/careers" className="text-blue-400">Join Us</a></li>
                            <li><a href="/internships" className="text-blue-400">Internships</a></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <span className="text-muted">
                        &copy; 2024 JU IT. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
}