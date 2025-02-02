import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import eBook from '../assets/ebook.pdf';  // Correct path to the PDF file

const DownloadPage = () => {
  const [name, setName] = useState('');
  const [favoriteMLSClub, setFavoriteMLSClub] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [pdfData, setPdfData] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && name && favoriteMLSClub) {
      setSubmitted(true);
      console.log(`Name: ${name}, Favorite MLS Club: ${favoriteMLSClub}, Email: ${email}`);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = eBook;  // Correct the file path
    link.download = 'ebook.pdf'; // Specify the file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        {submitted ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
            <p>Click the button below to download your eBook.</p>
            <button
              onClick={handleDownload}
              className="px-4 py-2 mt-4 bg-blue-600 rounded-lg hover:bg-blue-500 transition duration-300"
            >
              Download eBook
            </button>

            {/* Show PDF preview if available */}
            {pdfData && (
              <>
                <Document file={pdfData} onLoadSuccess={onDocumentLoadSuccess}>
                  <Page pageNumber={pageNumber} />
                </Document>
                <p>Page {pageNumber} of {numPages}</p>
              </>
            )}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Download Our eBook</h2>
            <p className="text-center text-gray-300">
              Fill out the details below to receive a free eBook.
            </p>
            
            {/* Name Field */}
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            
            {/* Favourite MLS Club Field */}
            <input
              type="text"
              placeholder="Your Favourite MLS Club"
              value={favoriteMLSClub}
              onChange={(e) => setFavoriteMLSClub(e.target.value)}
              className="px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            
            {/* Email Field */}
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition duration-300"
            >
              Download eBook
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default DownloadPage;
