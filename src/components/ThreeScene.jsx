import React, { useEffect } from 'react';
    import * as THREE from 'three';
    
    const ThreeScene = () => {
      let camera, scene, renderer;
    
      useEffect(() => {
        const init = () => {
          scene = new THREE.Scene();
          scene.background = null;
    
          const aspectRatio = 16 / 9;
          camera = new THREE.PerspectiveCamera(40, aspectRatio, 0.8, 300);
          camera.position.z = 60;
    
          renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('c'), alpha: true });
          renderer.setSize(window.innerWidth, window.innerHeight);
          renderer.setClearColor(0x000000, 0);
    
          addLights();
          addTorusKnot(0, 0);
    
          animate();
        };
    
        const addLights = () => {
          const light = new THREE.DirectionalLight(0xfff0dd, 1.2);
          light.position.set(12, 15, 20);
          scene.add(light);
        };
    
        const addTorusKnot = (x, y) => {
          const geometry = new THREE.TorusKnotGeometry(5.8, 1, 20, 9, 1, 13);
          const material = new THREE.MeshPhysicalMaterial({ metalness: 0, roughness: 0 });
          const mesh = new THREE.Mesh(geometry, material);
          mesh.position.set(0, 6, 4);
          scene.add(mesh);
        };
    
        const animate = () => {
          requestAnimationFrame(animate);
    
          scene.children.forEach(child => {
            if (child instanceof THREE.Mesh) {
              child.rotation.y += 0.03;
            }
          });
    
          renderer.render(scene, camera);
        };
    
        init();
    
        return () => {
          if (renderer) {
            renderer.dispose();
          }
        };
      }, []);
    
      const handleResize = () => {
        const canvas = document.getElementById('c');
        const parent = canvas ? canvas.parentNode : null;
        if (parent && renderer) {
          renderer.setSize(parent.clientWidth, parent.clientHeight);
          camera.aspect = parent.clientWidth / parent.clientHeight;
          camera.updateProjectionMatrix();
        }
      };
    
      useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
      return <canvas id="c" className="w-full h-full max-w-80 max-h-150"></canvas>;
    };
    
    
        // Ajout d'un fond avec un plan derrière
    // const addBackground = () => {
    //     // Taille du plan, ajuster si nécessaire
    //     const geometry = new THREE.PlaneGeometry(50, 50); 
    //     // Couleur verte
    //     const material = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide }); 
    //     const background = new THREE.Mesh(geometry, material);
      
    //     // Déplace le plan derrière l'objet 3D
    //      // Positionne le fond derrière l'objet
    //     background.position.set(0, 0, -50);
    //     scene.add(background);
    //   };
      
    
     
    
      
    
    
    export default ThreeScene;
    