import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export const BrakeAssembly3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<number>(0);

  const technicalSpecs = [
    {
      label: "Ventilated Rotor",
      detail: "Cross-drilled directional cooling channels inspected for thickness variation & heat stress.",
    },
    {
      label: "Monobloc Caliper",
      detail: "Hydraulic piston seals, brake pad friction depth & fluid pressure tolerance testing.",
    },
    {
      label: "Precision Wheel Hub",
      detail: "Axle bearing tolerances, runout precision & lug bolt torque specifications.",
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.5, 4.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Group for the entire mechanical assembly
    const assemblyGroup = new THREE.Group();
    scene.add(assemblyGroup);

    // Materials: Metallic PBR
    const rotorMaterial = new THREE.MeshStandardMaterial({
      color: 0x90959e,
      metalness: 0.92,
      roughness: 0.28,
    });

    const hubMaterial = new THREE.MeshStandardMaterial({
      color: 0x22262e,
      metalness: 0.85,
      roughness: 0.45,
    });

    const caliperMaterial = new THREE.MeshStandardMaterial({
      color: 0xd97706, // Automotive Amber / Burnished Gold
      metalness: 0.5,
      roughness: 0.35,
    });

    const hardwareMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4d8df,
      metalness: 0.95,
      roughness: 0.15,
    });

    // 1. Rotor Disc (Outer Ring)
    const rotorGeom = new THREE.CylinderGeometry(1.65, 1.65, 0.08, 64, 1, false);
    const rotorMesh = new THREE.Mesh(rotorGeom, rotorMaterial);
    rotorMesh.rotation.x = Math.PI / 2;
    assemblyGroup.add(rotorMesh);

    // 2. Central Hub Hat
    const hubGeom = new THREE.CylinderGeometry(0.85, 0.95, 0.32, 48);
    const hubMesh = new THREE.Mesh(hubGeom, hubMaterial);
    hubMesh.rotation.x = Math.PI / 2;
    hubMesh.position.z = 0.12;
    assemblyGroup.add(hubMesh);

    // 3. Wheel Studs / Lug Bolts
    const boltGeom = new THREE.CylinderGeometry(0.06, 0.06, 0.18, 16);
    for (let i = 0; i < 5; i++) {
      const angle = (i * Math.PI * 2) / 5;
      const bolt = new THREE.Mesh(boltGeom, hardwareMaterial);
      bolt.rotation.x = Math.PI / 2;
      bolt.position.set(Math.cos(angle) * 0.55, Math.sin(angle) * 0.55, 0.3);
      assemblyGroup.add(bolt);
    }

    // 4. Center Cap
    const capGeom = new THREE.CylinderGeometry(0.28, 0.28, 0.08, 32);
    const capMesh = new THREE.Mesh(capGeom, rotorMaterial);
    capMesh.rotation.x = Math.PI / 2;
    capMesh.position.z = 0.28;
    assemblyGroup.add(capMesh);

    // 5. Monobloc Brake Caliper (Clamping the rotor at top-right)
    const caliperGroup = new THREE.Group();
    const caliperMainGeom = new THREE.BoxGeometry(0.7, 1.15, 0.45);
    const caliperMesh = new THREE.Mesh(caliperMainGeom, caliperMaterial);
    caliperGroup.add(caliperMesh);

    // Caliper fluid line / bridge
    const pipeGeom = new THREE.CylinderGeometry(0.03, 0.03, 0.8, 12);
    const pipeMesh = new THREE.Mesh(pipeGeom, hardwareMaterial);
    pipeMesh.position.set(0.28, 0, 0.15);
    caliperGroup.add(pipeMesh);

    caliperGroup.position.set(1.2, 0.85, 0.05);
    caliperGroup.rotation.z = -0.55;
    scene.add(caliperGroup);

    // Lighting: Realistic workshop illumination
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfffaed, 2.5);
    keyLight.position.set(4, 5, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x90b0e0, 1.5);
    rimLight.position.set(-4, -2, -3);
    scene.add(rimLight);

    // Initial gentle orientation
    assemblyGroup.rotation.y = -0.28;
    caliperGroup.rotation.y = -0.28;

    // Interaction & Scroll Tracking
    let targetRotationZ = 0;
    let targetRotationY = -0.28;
    let targetRotationX = 0.1;

    const handleScroll = () => {
      if (prefersReducedMotion) return;
      const scrollY = window.scrollY;
      targetRotationZ = scrollY * 0.0018;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion) return;
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotationY = -0.28 + x * 0.4;
      targetRotationX = 0.1 - y * 0.3;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    container.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth dampening
      assemblyGroup.rotation.z += (targetRotationZ - assemblyGroup.rotation.z) * 0.08;
      assemblyGroup.rotation.y += (targetRotationY - assemblyGroup.rotation.y) * 0.05;
      assemblyGroup.rotation.x += (targetRotationX - assemblyGroup.rotation.x) * 0.05;

      caliperGroup.rotation.y += (targetRotationY - caliperGroup.rotation.y) * 0.05;
      caliperGroup.rotation.x += (targetRotationX - caliperGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      container.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      renderer.dispose();
      rotorGeom.dispose();
      hubGeom.dispose();
      boltGeom.dispose();
      capGeom.dispose();
      caliperMainGeom.dispose();
      pipeGeom.dispose();
      rotorMaterial.dispose();
      hubMaterial.dispose();
      caliperMaterial.dispose();
      hardwareMaterial.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-[#0A0B0E] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Mechanical Inspection Narrative */}
          <div className="lg:col-span-6">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-2">
              Mechanical Standards
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-white uppercase tracking-tight leading-[0.98] mb-4">
              Precision In <br />
              Every Component
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mb-8 max-w-lg">
              Automotive reliability is built on systematic mechanical inspection. From brake rotor tolerances to electrical circuitry, our technicians ensure every system meets verified road safety standards.
            </p>

            {/* Interactive Technical Spec Tabs */}
            <div className="space-y-3">
              {technicalSpecs.map((spec, index) => {
                const isSelected = activeTab === index;
                return (
                  <button
                    key={spec.label}
                    type="button"
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-150 ${
                      isSelected
                        ? "bg-[#141720] border-amber-500/50 text-white"
                        : "bg-[#0E1015] border-white/5 text-slate-400 hover:border-white/10 hover:text-slate-200"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-display font-bold text-sm tracking-wider uppercase text-white">
                        0{index + 1} • {spec.label}
                      </span>
                      {isSelected && (
                        <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">
                          Active Focus
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">
                      {spec.detail}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: 3D Interactive Mechanical Canvas */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full h-[400px] sm:h-[460px] rounded-2xl bg-[#0E1015] border border-white/8 overflow-hidden shadow-2xl flex items-center justify-center group">
              {/* Three.js Canvas Container */}
              <div ref={containerRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />

              {/* Minimal Technical Header Overlay */}
              <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 block">
                  3D Assembly Inspector
                </span>
                <span className="text-xs font-display font-bold text-white uppercase">
                  Ventilated Rotor & Caliper
                </span>
              </div>

              {/* Minimal Interaction Hint */}
              <div className="absolute bottom-4 right-4 z-10 pointer-events-none text-[11px] font-mono text-slate-400 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                Rotate on scroll / Drag to inspect
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
