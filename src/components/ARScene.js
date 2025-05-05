import React, { useEffect, useRef } from "react";

const MarkerAR = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const video = document.querySelector("#waterVideo");
    const marker = document.querySelector("a-marker");
    const plane = document.querySelector("#videoPlane");

    if (!video || !marker || !plane) return;

    // Pause initially
    video.pause();
    plane.setAttribute("visible", "false");

    marker.addEventListener("markerFound", () => {
      plane.setAttribute("visible", "true");
      video.play().catch((err) => {
        console.warn("Video play failed:", err);
      });
    });

    marker.addEventListener("markerLost", () => {
      video.pause();
      plane.setAttribute("visible", "false");
    });
  }, []);

  return (
    <a-scene
      ref={sceneRef}
      embedded
      arjs="sourceType: webcam; debugUIEnabled: false;"
      vr-mode-ui="enabled: false"
      renderer="logarithmicDepthBuffer: true;"
      style={{ width: "100%", height: "100%", position: "fixed", top: 0, left: 0, zIndex: 0 }}
    >
      <a-assets>
        <video
          id="waterVideo"
          src="https://cdn.pixabay.com/video/2024/09/29/233867_large.mp4"
          preload="auto"
          loop
          crossorigin="anonymous"
          webkit-playsinline
          playsInline
        ></video>
      </a-assets>

      <a-marker preset="hiro">
        <a-video
          id="videoPlane"
          src="#waterVideo"
          width="1.5"
          height="1"
          position="0 0 0"
          rotation="-90 0 0"
          visible="false"
        ></a-video>
      </a-marker>

      <a-entity camera></a-entity>
    </a-scene>
  );
};

export default MarkerAR;
