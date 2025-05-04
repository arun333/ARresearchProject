import React, { useEffect } from 'react';

const ARScene = () => {
  useEffect(() => {
    const video = document.querySelector('#testVideo');
    const plane = document.querySelector('#fullscreenVideo');
    const marker = document.querySelector('a-marker');

    if (video) {
      video.play().catch((e) => console.warn("Video playback failed", e));
    }

    marker?.addEventListener('markerFound', () => {
      plane?.setAttribute('visible', 'true');
      plane?.emit('fadein');
    });

    marker?.addEventListener('markerLost', () => {
      plane?.setAttribute('visible', 'false');
    });
  }, []);

  return (
    <div>
      <a-scene embedded arjs>
        <a-assets>
          <video
            id="testVideo"
            src="https://cdn.pixabay.com/video/2024/09/29/233867_large.mp4"
            loop
            muted
            playsInline
            webkit-playsinline
            crossOrigin="anonymous"
          ></video>
        </a-assets>

        <a-marker preset="hiro" emitevents="true">
          <a-box position="0 0 0" visible="false"></a-box>
        </a-marker>

        <a-entity camera>
          <a-entity
            id="fullscreenVideo"
            geometry="primitive: plane; height: 2.5; width: 4"
            material="shader: flat; src: #testVideo; opacity: 0"
            position="0 0 -1.5"
            visible="false"
            animation__fadein="property: material.opacity; from: 0; to: 1; dur: 1000; startEvents: fadein"
          ></a-entity>
        </a-entity>
      </a-scene>
    </div>
  );
};

export default ARScene;
