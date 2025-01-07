import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import ProjectDetails from './components/projectdetails';
import Error404 from './components/error404';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/event-mania" element={<ProjectDetails projectKey="eventMania" />} />
        <Route path="/project/youtube-downloader" element={<ProjectDetails projectKey="youtubeDownloader" />} />
        <Route path="/project/pro-reader" element={<ProjectDetails projectKey="proReader" />} />
        <Route path="*" element={<Error404 />} /> {/* Catch-all route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
