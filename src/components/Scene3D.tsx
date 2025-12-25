import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useState } from 'react';
import { isWebGLAvailable } from '@/lib/utils';

export default function Scene3D() {
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);

  useEffect(() => {
    // Defer check to client to avoid SSR/hydration mismatch
    setWebglSupported(isWebGLAvailable());
  }, []);

  // Wait until we've checked support on the client
  if (webglSupported === null) return null;

  // If WebGL is not available, render an inert fallback (keeps layout intact without errors)
  if (!webglSupported) {
    return <div className="absolute inset-0 pointer-events-none" aria-hidden="true" />;
  }

  // Error boundary to gracefully handle runtime errors from the <Canvas>
  class CanvasErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
    constructor(props: any) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
      return { hasError: true };
    }

    componentDidCatch(error: any, info: any) {
      console.error('Canvas error:', error, info);
    }

    render() {
      if (this.state.hasError) {
        return <div className="absolute inset-0 pointer-events-none" aria-hidden="true" />;
      }
      return this.props.children;
    }
  }

  return (
    <div className="absolute inset-0 pointer-events-none">
      <CanvasErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 45 }}
          style={{ background: 'transparent' }}
          dpr={[1, 1.5]}
        >
          <Suspense fallback={null}>
            {/* Particles removed: keeping the canvas and a subtle ambient light for depth */}
            <ambientLight intensity={0.45} />
          </Suspense>
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
}
