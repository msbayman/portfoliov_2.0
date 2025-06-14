'use client';
import { useEffect, useState } from 'react';

export default function FullScreenLoader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // After 4.5s start fading out
    const fadeTimer = setTimeout(() => setFadeOut(true), 4500);
    // After 5s hide completely
    const hideTimer = setTimeout(() => setVisible(false), 5000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div
        className="fixed inset-0 flex items-center justify-center bg-[var(--color-primary)] text-3xl text-[var(--color-accent-dark)] transition-opacity duration-500"
        style={{ opacity: fadeOut ? 0 : 1 }}
      >
        <span className="loader"></span>
      </div>

      <style jsx>{`
        .loader {
          position: relative;
          transform: rotateZ(45deg);
          perspective: 1000px;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          color: #fff;
          display: inline-block;
        }
        .loader:before,
        .loader:after {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: inherit;
          height: inherit;
          border-radius: 50%;
          transform: rotateX(70deg);
          animation: spin 1s linear infinite;
        }
        .loader:after {
          color: #2bc196;
          transform: rotateY(70deg);
          animation-delay: 0.4s;
        }

        @keyframes spin {
          0%,
          100% {
            box-shadow: 0.2em 0 0 0 currentColor;
          }
          12% {
            box-shadow: 0.2em 0.2em 0 0 currentColor;
          }
          25% {
            box-shadow: 0 0.2em 0 0 currentColor;
          }
          37% {
            box-shadow: -0.2em 0.2em 0 0 currentColor;
          }
          50% {
            box-shadow: -0.2em 0 0 0 currentColor;
          }
          62% {
            box-shadow: -0.2em -0.2em 0 0 currentColor;
          }
          75% {
            box-shadow: 0 -0.2em 0 0 currentColor;
          }
          87% {
            box-shadow: 0.2em -0.2em 0 0 currentColor;
          }
        }
      `}</style>
    </>
  );
}
