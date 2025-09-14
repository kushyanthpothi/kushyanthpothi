'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { themeColors, themeClass as utilThemeClass } from '../../utils/theme';

const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false }
);

// YouTube Data API utilities
const getVideoId = (url) => {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

export default function YouTubeAnalyzer() {
  const [currentTheme, setCurrentTheme] = useState('blue');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [error, setError] = useState('');
  const [historicalData, setHistoricalData] = useState([]);

  const themeClass = (type) => {
    switch (type) {
      case 'text':
        return `text-${currentTheme}-600 dark:text-${currentTheme}-400`;
      case 'bg':
        return `bg-${currentTheme}-600`;
      case 'bgLight':
        return `bg-${currentTheme}-100 bg-opacity-70 hover:bg-${currentTheme}-200`;
      case 'bgStatic':
        return `bg-${currentTheme}-100 bg-opacity-70`;
      case 'borderLight':
        return `border-${currentTheme}-500`;
      default:
        return '';
    }
  };

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('siteTheme') || 'blue';
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    
    setCurrentTheme(savedTheme);
    setIsDarkMode(savedDarkMode);

    // Load historical data
    const savedData = localStorage.getItem('youtubeAnalysisHistory');
    if (savedData) {
      setHistoricalData(JSON.parse(savedData));
    }
  }, []);

  const analyzeVideo = async () => {
    if (!videoUrl.trim()) {
      setError('Please enter a valid YouTube URL');
      return;
    }

    const videoId = getVideoId(videoUrl);
    if (!videoId) {
      setError('Invalid YouTube URL format');
      return;
    }

    setIsAnalyzing(true);
    setError('');

    try {
      // Call the real API endpoint
      const response = await fetch('/api/youtube/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ videoUrl }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to analyze video');
      }

      const analysisData = await response.json();
      setAnalysisResult(analysisData);
      
      // Save to historical data
      const newHistoricalEntry = {
        id: Date.now(),
        date: new Date().toISOString(),
        videoId,
        url: videoUrl,
        title: analysisData.title,
        views: analysisData.views,
        likes: analysisData.likes,
        comments: analysisData.commentCount
      };
      
      const updatedHistory = [newHistoricalEntry, ...historicalData].slice(0, 10);
      setHistoricalData(updatedHistory);
      localStorage.setItem('youtubeAnalysisHistory', JSON.stringify(updatedHistory));
      
    } catch (err) {
      setError(err.message || 'Failed to analyze video. Please try again.');
      console.error('Analysis error:', err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            YouTube Video <span className={themeClass('text')}>Analyzer</span>
          </h1>
          <div className={`h-1 w-20 ${themeClass('bg')} mx-auto mb-6`}></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Analyze YouTube videos with AI-powered insights including transcript summaries, 
            sentiment analysis, performance tracking, and growth predictions.
          </p>
        </MotionDiv>

        {/* URL Input Section */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Enter YouTube Video URL
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="url"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              disabled={isAnalyzing}
            />
            <button
              onClick={analyzeVideo}
              disabled={isAnalyzing}
              className={`px-8 py-3 ${themeClass('bg')} text-white rounded-lg font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[140px]`}
            >
              {isAnalyzing ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analyzing...
                </>
              ) : (
                'Analyze Video'
              )}
            </button>
          </div>
          
          {error && (
            <div className="mt-4 p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-md">
              {error}
            </div>
          )}
        </MotionDiv>

        {/* Analysis Results */}
        {analysisResult && (
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Video Overview */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Video Overview
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <Image
                    src={analysisResult.thumbnail}
                    alt={analysisResult.title}
                    width={640}
                    height={360}
                    className="w-full rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {analysisResult.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {analysisResult.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {formatNumber(analysisResult.views)}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Views</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {formatNumber(analysisResult.likes)}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Likes</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {formatNumber(analysisResult.commentCount)}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Comments</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {analysisResult.duration}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Duration</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Insights */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Transcript Summary */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  AI Transcript Summary
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {analysisResult.transcript.summary}
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Key Topics:</h4>
                  <div className="flex flex-wrap gap-2">
                    {analysisResult.transcript.keyTopics.map((topic, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 ${themeClass('bg')} bg-opacity-10 ${themeClass('text')} rounded-full text-sm`}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Chapter Markers:</h4>
                  <div className="space-y-2">
                    {analysisResult.transcript.chapterMarkers.map((chapter, index) => (
                      <div key={index} className="flex gap-3">
                        <span className={`text-sm ${themeClass('text')} font-mono`}>
                          {chapter.time}
                        </span>
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">
                            {chapter.title}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {chapter.summary}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sentiment Analysis */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Sentiment Analysis
                </h3>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-900 dark:text-white">Overall Sentiment</span>
                    <span className={`font-bold ${themeClass('text')}`}>
                      {analysisResult.sentiment.overall.toUpperCase()}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`${themeClass('bg')} h-2 rounded-full`}
                      style={{ width: `${analysisResult.sentiment.score * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">
                      {analysisResult.sentiment.positive}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Positive</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-600">
                      {analysisResult.sentiment.neutral}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Neutral</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-red-600">
                      {analysisResult.sentiment.negative}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Negative</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                    Top Positive Comments:
                  </h4>
                  <div className="space-y-2">
                    {analysisResult.sentiment.topPositiveComments.map((comment, index) => (
                      <div
                        key={index}
                        className="p-2 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 rounded text-sm"
                      >
                        "{comment}"
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Predictions and Recommendations */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                AI Predictions & Recommendations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
                    Growth Predictions
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
                      <span className="text-gray-900 dark:text-white">Expected View Growth:</span>
                      <span className={`font-bold ${themeClass('text')}`}>
                        {analysisResult.predictions.expectedGrowth.views}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
                      <span className="text-gray-900 dark:text-white">Engagement Growth:</span>
                      <span className={`font-bold ${themeClass('text')}`}>
                        {analysisResult.predictions.expectedGrowth.engagement}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
                      <span className="text-gray-900 dark:text-white">Trending Score:</span>
                      <span className={`font-bold ${themeClass('text')}`}>
                        {analysisResult.predictions.trendingScore}/10
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
                    Recommended Actions
                  </h4>
                  <div className="space-y-2">
                    {analysisResult.predictions.recommendedActions.map((action, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 p-3 bg-gray-50 dark:bg-gray-700 rounded"
                      >
                        <div className={`w-2 h-2 ${themeClass('bg')} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-gray-900 dark:text-white">{action}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </MotionDiv>
        )}

        {/* Historical Analysis */}
        {historicalData.length > 0 && (
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
              Analysis History
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-2 text-gray-900 dark:text-white">Date</th>
                    <th className="text-left py-2 text-gray-900 dark:text-white">Video Title</th>
                    <th className="text-right py-2 text-gray-900 dark:text-white">Views</th>
                    <th className="text-right py-2 text-gray-900 dark:text-white">Likes</th>
                    <th className="text-right py-2 text-gray-900 dark:text-white">Comments</th>
                  </tr>
                </thead>
                <tbody>
                  {historicalData.map((entry) => (
                    <tr key={entry.id} className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-gray-600 dark:text-gray-400">
                        {new Date(entry.date).toLocaleDateString()}
                      </td>
                      <td className="py-2 text-gray-900 dark:text-white">
                        {entry.title}
                      </td>
                      <td className="py-2 text-right text-gray-600 dark:text-gray-400">
                        {formatNumber(entry.views)}
                      </td>
                      <td className="py-2 text-right text-gray-600 dark:text-gray-400">
                        {formatNumber(entry.likes)}
                      </td>
                      <td className="py-2 text-right text-gray-600 dark:text-gray-400">
                        {formatNumber(entry.comments)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </MotionDiv>
        )}
      </div>
    </div>
  );
}