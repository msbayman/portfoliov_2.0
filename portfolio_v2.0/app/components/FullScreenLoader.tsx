'use client';

export default function FullScreenLoader() {
    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-[var(--color-primary)] text-3xl text-[var(--color-accent-dark)]">
                <span className="loader"></span>
            </div>

            <style jsx>{`
        .loader {
          position: relative;
          transform: rotateZ(45deg);
          perspective: 1000px;
          border-radius: 50%;
          width: 100px;
          height: 100px;
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

        @keyframes rotate {
          0% {
            transform: translate(-50%, -50%) rotateZ(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotateZ(360deg);
          }
        }

        @keyframes rotateccw {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(-360deg);
          }
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
