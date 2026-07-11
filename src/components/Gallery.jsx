import React, { useState, useRef, useCallback } from 'react';

const cases = [
  { id: 1, title: 'Teeth Whitening', before: 'Yellowed, stained teeth', after: 'Bright, white smile' },
  { id: 2, title: 'Dental Implants', before: 'Missing front tooth', after: 'Natural-looking replacement' },
  { id: 3, title: 'Orthodontics', before: 'Crooked alignment', after: 'Perfectly straight teeth' },
  { id: 4, title: 'Veneers', before: 'Chipped, uneven teeth', after: 'Flawless Hollywood smile' },
];

function BeforeAfterSlider({ beforeLabel, afterLabel }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e) => isDragging && handleMove(e.clientX);
  const handleTouchMove = (e) => handleMove(e.touches[0].clientX);

  return (
    <div
      ref={containerRef}
      className="before-after-slider relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-200 select-none"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0 bg-gradient-to-br from-dental-100 to-dental-200 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-sm font-semibold text-dental-700">After</span>
          <p className="text-xs text-dental-600 mt-1">{afterLabel}</p>
        </div>
      </div>

      {/* Before Image (Clipped) */}
      <div
        className="after-image absolute top-0 left-0 h-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center"
        style={{ width: `${sliderPosition}%` }}
      >
        <div className="text-center" style={{ width: `${100 / (sliderPosition / 100 || 1)}%`, minWidth: '100%' }}>
          <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <span className="text-sm font-semibold text-amber-700">Before</span>
          <p className="text-xs text-amber-600 mt-1">{beforeLabel}</p>
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="handle absolute top-0 h-full bg-white shadow-lg cursor-col-resize"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="handle-circle">
          <svg className="w-5 h-5 text-dental-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-dental-500" />
            <span className="text-sm text-dental-700 font-medium">Results</span>
          </div>

          <h2 className="reveal font-serif text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Before & After
            <span className="text-gradient"> Gallery</span>
          </h2>

          <p className="reveal text-slate-600 text-lg leading-relaxed">
            Real results from real patients. Drag the slider to see the transformation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {cases.map((caseItem, index) => (
            <div key={caseItem.id} className={`reveal`} style={{ transitionDelay: `${index * 150}ms` }}>
              <div className="bg-white rounded-2xl p-4 shadow-lg shadow-slate-200/50">
                <BeforeAfterSlider beforeLabel={caseItem.before} afterLabel={caseItem.after} />
                <div className="mt-4 px-2">
                  <h3 className="font-semibold text-lg text-slate-900">{caseItem.title}</h3>
                  <p className="text-sm text-slate-500 mt-1">Drag to compare results</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
