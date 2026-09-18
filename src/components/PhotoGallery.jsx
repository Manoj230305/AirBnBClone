import React, { useState, useRef } from 'react';
import './PhotoGallery.css';

export default function PhotoGallery({ images, onOpenAllPhotos }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollRef = useRef(null);

  const heroList = [
    { src: images.heroMain, alt: 'Romantic Jacuzzi patio verandah', section: 'living2' },
    { src: images.hero2, alt: 'Outdoor lounge seating', section: 'living2' },
    { src: images.hero3, alt: 'Master bedroom with plush bed', section: 'bedroom' },
    { src: images.hero4, alt: 'Wooden deck Jacuzzi', section: 'living2' },
    { src: images.hero5, alt: 'Amor de Goa building exterior', section: 'exterior' }
  ];

  const handleMobileScroll = (e) => {
    const el = e.target;
    if (el.clientWidth > 0) {
      const idx = Math.round(el.scrollLeft / el.clientWidth);
      setActiveSlide(idx);
    }
  };

  return (
    <section id="photos" className="photo-gallery-section page-container">
      {/* Desktop 5-Photo Grid */}
      <div className="gallery-grid desktop-gallery-grid">
        {/* Main large photo (Left 50%) */}
        <div
          className="gallery-item main-item"
          onClick={() => onOpenAllPhotos('living2')}
          role="button"
          tabIndex={0}
        >
          <img
            src={images.heroMain}
            alt="Romantic Jacuzzi patio verandah"
            className="gallery-img"
            loading="eager"
          />
          <div className="img-overlay" />
        </div>

        {/* Middle column (25%) */}
        <div className="gallery-col mid-col">
          <div
            className="gallery-item mid-top"
            onClick={() => onOpenAllPhotos('living2')}
            role="button"
            tabIndex={0}
          >
            <img
              src={images.hero2}
              alt="Outdoor lounge seating"
              className="gallery-img"
            />
            <div className="img-overlay" />
          </div>

          <div
            className="gallery-item mid-bottom"
            onClick={() => onOpenAllPhotos('bedroom')}
            role="button"
            tabIndex={0}
          >
            <img
              src={images.hero3}
              alt="Master bedroom with plush bed"
              className="gallery-img"
            />
            <div className="img-overlay" />
          </div>
        </div>

        {/* Right column (25%) */}
        <div className="gallery-col right-col">
          <div
            className="gallery-item right-top"
            onClick={() => onOpenAllPhotos('living2')}
            role="button"
            tabIndex={0}
          >
            <img
              src={images.hero4}
              alt="Wooden deck Jacuzzi"
              className="gallery-img"
            />
            <div className="img-overlay" />
          </div>

          <div
            className="gallery-item right-bottom"
            onClick={() => onOpenAllPhotos('exterior')}
            role="button"
            tabIndex={0}
          >
            <img
              src={images.hero5}
              alt="Amor de Goa building exterior"
              className="gallery-img"
            />
            <div className="img-overlay" />
          </div>
        </div>

        {/* Floating show all photos button for desktop */}
        <button
          className="show-all-photos-btn"
          onClick={(e) => {
            e.stopPropagation();
            onOpenAllPhotos('living1');
          }}
        >
          <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true">
            <circle cx="2.5" cy="2.5" r="1.5" />
            <circle cx="8" cy="2.5" r="1.5" />
            <circle cx="13.5" cy="2.5" r="1.5" />
            <circle cx="2.5" cy="8" r="1.5" />
            <circle cx="8" cy="8" r="1.5" />
            <circle cx="13.5" cy="8" r="1.5" />
            <circle cx="2.5" cy="13.5" r="1.5" />
            <circle cx="8" cy="13.5" r="1.5" />
            <circle cx="13.5" cy="13.5" r="1.5" />
          </svg>
          <span>Show all photos</span>
        </button>
      </div>

      {/* Mobile Swipeable Gallery Slider */}
      <div className="mobile-gallery-wrapper">
        <div
          className="mobile-gallery-track"
          ref={scrollRef}
          onScroll={handleMobileScroll}
        >
          {heroList.map((item, idx) => (
            <div
              key={idx}
              className="mobile-gallery-slide"
              onClick={() => onOpenAllPhotos(item.section)}
              role="button"
              tabIndex={0}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="mobile-gallery-img"
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>

        {/* Mobile Badge & Button */}
        <div className="mobile-gallery-controls">
          <div className="mobile-slide-counter">
            {activeSlide + 1} / {heroList.length}
          </div>

          <button
            className="mobile-show-all-btn"
            onClick={() => onOpenAllPhotos('living1')}
          >
            <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" aria-hidden="true">
              <circle cx="2.5" cy="2.5" r="1.5" />
              <circle cx="8" cy="2.5" r="1.5" />
              <circle cx="13.5" cy="2.5" r="1.5" />
              <circle cx="2.5" cy="8" r="1.5" />
              <circle cx="8" cy="8" r="1.5" />
              <circle cx="13.5" cy="8" r="1.5" />
              <circle cx="2.5" cy="13.5" r="1.5" />
              <circle cx="8" cy="13.5" r="1.5" />
              <circle cx="13.5" cy="13.5" r="1.5" />
            </svg>
            <span>Photos</span>
          </button>
        </div>
      </div>
    </section>
  );
}
