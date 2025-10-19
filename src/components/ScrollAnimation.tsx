import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe timeline cards
    const timelineCards = document.querySelectorAll('.timeline-card');
    timelineCards.forEach((card) => observer.observe(card));

    // Timeline line animation based on scroll progress
    const updateTimelineLine = () => {
      const timelineSection = document.querySelector('#timeline-section');
      if (!timelineSection) return;

      const rect = timelineSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;
      
      // Calculate scroll progress within the timeline section
      const scrollTop = window.pageYOffset;
      const sectionTop = rect.top + scrollTop;
      
      // Calculate how much of the timeline section has been scrolled through
      const sectionStart = sectionTop;
      const sectionEnd = sectionTop + sectionHeight;
      const currentScroll = scrollTop + (windowHeight / 2); // Use middle of viewport
      
      // Calculate progress based on how much of the section has been scrolled through
      let progress = 0;
      if (currentScroll > sectionStart) {
        progress = Math.min((currentScroll - sectionStart) / sectionHeight, 1);
      }
      
      // Update timeline line height
      const timelineLine = document.querySelector('.timeline-line-progress');
      if (timelineLine) {
        timelineLine.style.height = `${progress * 100}%`;
      }

      // Update card colors based on scroll progress
      const cards = document.querySelectorAll('.timeline-card');
      cards.forEach((card, index) => {
        const cardElement = card.querySelector('div');
        if (!cardElement) return;

        // Calculate when this card should be highlighted (when it reaches center of viewport)
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.top + cardRect.height / 2;
        const viewportCenter = windowHeight / 2;
        
        // If card center is near viewport center, make it primary color
        const distanceFromCenter = Math.abs(cardCenter - viewportCenter);
        const shouldHighlight = distanceFromCenter < 200; // 200px threshold

        if (shouldHighlight) {
          cardElement.className = cardElement.className.replace(/bg-white|bg-primary/g, '');
          cardElement.className = cardElement.className.replace(/border-border|border-primary/g, '');
          cardElement.className += ' bg-primary border-primary';
          
          // Update text colors
          const title = cardElement.querySelector('h3');
          const text = cardElement.querySelector('p');
          const icon = cardElement.querySelector('div > div');
          const centerPoint = card.querySelector('.timeline-center-point');
          
          if (title) title.className = title.className.replace(/text-foreground/g, 'text-white');
          if (text) text.className = text.className.replace(/text-foreground/g, 'text-white opacity-80');
          if (icon) {
            icon.className = icon.className.replace(/bg-white|bg-primary/g, '');
            icon.className = icon.className.replace(/text-foreground/g, '');
            icon.className += ' bg-primary text-white';
          }
          if (centerPoint) {
            centerPoint.className = centerPoint.className.replace(/bg-white|bg-primary/g, '');
            centerPoint.className = centerPoint.className.replace(/text-foreground/g, '');
            centerPoint.className = centerPoint.className.replace(/border-border/g, '');
            centerPoint.className += ' bg-primary text-white';
          }
        } else {
          // Reset to white
          cardElement.className = cardElement.className.replace(/bg-white|bg-primary/g, '');
          cardElement.className = cardElement.className.replace(/border-border|border-primary/g, '');
          cardElement.className += ' bg-white border-border';
          
          // Reset text colors
          const title = cardElement.querySelector('h3');
          const text = cardElement.querySelector('p');
          const icon = cardElement.querySelector('div > div');
          const centerPoint = card.querySelector('.timeline-center-point');
          
          if (title) title.className = title.className.replace(/text-white/g, 'text-foreground');
          if (text) text.className = text.className.replace(/text-white/g, 'text-foreground');
          if (icon) {
            icon.className = icon.className.replace(/bg-white|bg-primary/g, '');
            icon.className = icon.className.replace(/text-white/g, '');
            icon.className += ' bg-white text-foreground border border-border';
          }
          if (centerPoint) {
            centerPoint.className = centerPoint.className.replace(/bg-white|bg-primary/g, '');
            centerPoint.className = centerPoint.className.replace(/text-white/g, '');
            centerPoint.className = centerPoint.className.replace(/border-border/g, '');
            centerPoint.className += ' bg-white text-foreground border border-border';
          }
        }
      });
    };

    // Add scroll listener
    window.addEventListener('scroll', updateTimelineLine);
    updateTimelineLine(); // Initial call

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateTimelineLine);
    };
  }, []);
};
