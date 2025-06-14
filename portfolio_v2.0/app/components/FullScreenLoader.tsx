'use client';

export default function FullScreenLoader() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-primary)] text-white text-3xl">
            Loading... 👾
        </div>
    );
}
