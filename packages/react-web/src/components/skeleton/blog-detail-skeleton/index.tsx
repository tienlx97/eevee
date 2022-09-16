import * as React from 'react';

export const BlogDetailSkeleton = () => {
  return (
    <div>
      <div className="tweet-header skeleton-line heading-3" style={{ width: '70%' }} />
      <div style={{ marginBottom: '35px' }} />
      <div className="tweet-text">
        <div className="skeleton-line heading" style={{ width: '95%' }} />
        <div className="skeleton-line heading" style={{ width: '100%' }} />
        <div className="skeleton-line heading" style={{ width: '35%' }} />
      </div>
      <div style={{ marginBottom: '35px' }} />
      <div className="tweet-header skeleton-line heading-3" style={{ width: '40%' }} />
      <div style={{ marginBottom: '25px' }} />
      <div className="tweet-text">
        <div className="skeleton-line heading" style={{ width: '95%' }} />
        <div className="skeleton-line heading" style={{ width: '100%' }} />
        <div className="skeleton-line heading" style={{ width: '55%' }} />
      </div>
      <div style={{ marginBottom: '35px' }} />
      <div className="tweet-header skeleton-line heading-3" style={{ width: '60%' }} />
      <div style={{ marginBottom: '25px' }} />
      <div className="tweet-text">
        <div className="skeleton-line heading" style={{ width: '95%' }} />
        <div className="skeleton-line heading" style={{ width: '100%' }} />
        <div className="skeleton-line heading" style={{ width: '75%' }} />
      </div>
    </div>
  );
};
