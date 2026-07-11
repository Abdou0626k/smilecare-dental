import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function Hero({ onBook }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetRotationRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();

    const isMobile = window.innerWidth < 1024;
    const camera = new THREE.PerspectiveCamera(45, (canvas.clientWidth || 1) / (canvas.clientHeight || 1), 0.1, 1000);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    // Create tooth geometry using lathe
    const points = [];
    for (let i = 0; i <= 20; i++) {
      const t = i / 20;
      let x, y;
      if (t < 0.3) {
        // Root
        x = 0.3 + t * 0.5;
        y = -1.5 + t * 1.5;
      } else if (t < 0.7) {
        // Body
        const tt = (t - 0.3) / 0.4;
        x = 0.45 + Math.sin(tt * Math.PI) * 0.25;
        y = -0.5 + tt * 1.0;
      } else {
        // Crown
        const tt = (t - 0.7) / 0.3;
        x = 0.45 + Math.sin(tt * Math.PI) * 0.35 * (1 - tt * 0.5);
        y = 0.5 + tt * 0.8;
      }
      points.push(new THREE.Vector2(x, y));
    }

    const toothGeometry = new THREE.LatheGeometry(points, 32);

    // Tooth material - glossy ceramic-like
    const toothMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xf8fafc,
      metalness: 0.1,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 1.0,
      ior: 1.5,
      sheen: 0.5,
      sheenColor: 0xffffff,
      side: THREE.DoubleSide,
    });

    const tooth = new THREE.Mesh(toothGeometry, toothMaterial);
    tooth.castShadow = true;
    tooth.receiveShadow = true;
    tooth.scale.set(1.2, 1.2, 1.2);
    scene.add(tooth);

    // Inner glow sphere
    const glowGeometry = new THREE.SphereGeometry(1.8, 32, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x0ea5e9,
      transparent: true,
      opacity: 0.08,
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glow);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2);
    mainLight.position.set(5, 5, 5);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 1024;
    mainLight.shadow.mapSize.height = 1024;
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0xbae6fd, 1);
    fillLight.position.set(-5, 3, -5);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0x0ea5e9, 2, 10);
    rimLight.position.set(0, -2, 3);
    scene.add(rimLight);

    const topLight = new THREE.PointLight(0xffffff, 1, 10);
    topLight.position.set(0, 4, 0);
    scene.add(topLight);

    // Floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 50;
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 6;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      color: 0x0ea5e9,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Mouse tracking
    const handleMouseMove = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.005;

      // Gentle rotation
      tooth.rotation.y += 0.003;

      // Mouse parallax
      targetRotationRef.current.x = mouseRef.current.y * 0.3;
      targetRotationRef.current.y = mouseRef.current.x * 0.3;

      tooth.rotation.x += (targetRotationRef.current.x - tooth.rotation.x) * 0.05;
      tooth.rotation.z += (targetRotationRef.current.y * 0.5 - tooth.rotation.z) * 0.05;

      // Floating effect
      tooth.position.y = Math.sin(time * 2) * 0.15;
      glow.position.y = tooth.position.y;
      glow.rotation.y = time * 0.5;

      // Particles animation
      particles.rotation.y = time * 0.2;
      particles.position.y = Math.sin(time) * 0.2;

      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      toothGeometry.dispose();
      toothMaterial.dispose();
      glowGeometry.dispose();
      glowMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '50K+', label: 'Happy Patients' },
    { value: '99%', label: 'Success Rate' },
    { value: '25+', label: 'Expert Dentists' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="blob w-96 h-96 bg-dental-500 top-0 left-0" />
        <div className="blob w-80 h-80 bg-purple-500 bottom-0 right-0 animation-delay-2000" />
        <div className="blob w-64 h-64 bg-cyan-400 top-1/2 left-1/2 animation-delay-4000" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-800/90" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* 3D Canvas */}
      <canvas 
        ref={canvasRef} 
        id="three-canvas"
        className="absolute top-0 right-0 w-full lg:w-1/2 h-full"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-dental-400 animate-pulse" />
            <span className="text-sm text-white/80 font-medium">Premium Dental Care</span>
          </div>

          {/* Headline */}
          <h1 className="reveal font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Your Smile,
            <br />
            <span className="text-gradient">Our Passion</span>
          </h1>

          {/* Description */}
          <p className="reveal text-lg text-white/70 leading-relaxed mb-10 max-w-lg">
            Experience world-class dental care with cutting-edge technology and a gentle touch. 
            We transform smiles and build confidence, one patient at a time.
          </p>

          {/* CTAs */}
          <div className="reveal flex flex-wrap gap-4 mb-16">
            <button
              onClick={onBook}
              className="ripple-btn px-8 py-4 bg-gradient-to-r from-dental-500 to-dental-600 text-white font-semibold rounded-full shadow-lg shadow-dental-500/40 hover:shadow-dental-500/60 transition-all hover:-translate-y-1 text-lg"
            >
              Book Appointment
            </button>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all hover:-translate-y-1 text-lg backdrop-blur-sm"
            >
              Learn More
            </a>
          </div>

          {/* Trust Badges */}
          <div className="reveal flex flex-wrap items-center gap-6 mb-12">
            <div className="flex -space-x-3">
              {[1,2,3,4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-gradient-to-br from-dental-300 to-dental-500 flex items-center justify-center text-white text-xs font-bold">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 mb-1">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/60 text-sm">Trusted by 50,000+ patients</p>
            </div>
          </div>

          {/* Stats */}
          <div className="reveal grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="glass rounded-2xl p-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-10" />
    </section>
  );
}

export default Hero;
