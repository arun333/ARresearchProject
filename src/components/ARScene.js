import React from 'react';

const ARScene = () => {
  return (
    <div>
      <a-scene embedded arjs>
        <a-marker preset="hiro">
          <a-entity
            gltf-model="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF-Binary/Duck.glb"
            scale="0.5 0.5 0.5"
            position="0 0.5 0"
            rotation="0 180 0">
          </a-entity>
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
};

export default ARScene;
