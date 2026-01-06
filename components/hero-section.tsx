"use client"

import { useRef } from "react"
import Link from "next/link"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float } from "@react-three/drei"
import type * as THREE from "three"

function AnimatedTorus() {
  const torusRef = useRef<THREE.Mesh>(null)
  const innerTorusRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (torusRef.current) {
      torusRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2 + 0.5
      torusRef.current.rotation.y += 0.005
    }
    if (innerTorusRef.current) {
      innerTorusRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.4) * 0.3 + 0.3
      innerTorusRef.current.rotation.y -= 0.008
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group>
        {/* Main outer torus with premium gold/silver metallic finish */}
        <mesh ref={torusRef}>
          <torusGeometry args={[2.2, 0.6, 64, 128]} />
          <meshStandardMaterial
            color="#c0c0c0"
            metalness={0.95}
            roughness={0.05}
            envMapIntensity={2.0}
          />
        </mesh>

        {/* Inner torus ring with gradient metallic effect */}
        <mesh ref={innerTorusRef} scale={0.7}>
          <torusGeometry args={[2, 0.4, 48, 96]} />
          <meshStandardMaterial
            color="#a8a8a8"
            metalness={0.9}
            roughness={0.1}
            envMapIntensity={1.8}
          />
        </mesh>

        {/* Smallest inner ring with premium finish */}
        <mesh rotation={[Math.PI / 2, 0, 0]} scale={0.4}>
          <torusGeometry args={[2, 0.3, 32, 64]} />
          <meshStandardMaterial
            color="#888888"
            metalness={0.98}
            roughness={0.02}
            envMapIntensity={2.2}
          />
        </mesh>
      </group>
    </Float>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} />
      <pointLight position={[0, 0, 5]} intensity={0.8} />
      <Environment preset="city" />
      <AnimatedTorus />
    </>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left side - Text content */}
        <div className="flex-1 text-center lg:text-left z-10">
          <p className="text-xs tracking-[0.3em] text-muted-foreground mb-4 opacity-0 animate-fade-in">
            01 — PORTFOLIO
          </p>
          <p className="text-sm tracking-[0.4em] text-muted-foreground mb-6 opacity-0 animate-fade-in animation-delay-200">
            WORDPRESS EXPERT DEVELOPER
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide mb-6 opacity-0 animate-fade-in animation-delay-400">
            <span className="block">VLADIMIR</span>
            <span className="block gradient-text font-medium">DJAMBOU</span>
          </h1>
          <div className="flex items-center gap-4 justify-center lg:justify-start mb-8 opacity-0 animate-fade-in animation-delay-600">
            <span className="text-muted-foreground">+</span>
            <p className="text-sm tracking-[0.2em] text-muted-foreground">100+ WORDPRESS SITES DELIVERED</p>
          </div>

          {/* CTA Buttons with Premium Style */}
          <div className="flex items-center gap-4 justify-center lg:justify-start opacity-0 animate-fade-in animation-delay-800">
            <Link
              href="/work"
              className="px-8 py-4 bg-foreground text-background text-sm tracking-wider rounded-lg hover:opacity-90 transition-all duration-500 hover:scale-105 hover:shadow-glow btn-premium"
            >
              VIEW WORDPRESS PROJECTS
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 glass border border-foreground/30 text-foreground text-sm tracking-wider rounded-lg hover:border-foreground/60 hover:shadow-glow transition-all duration-500 hover:scale-105"
            >
              CONTACT ME
            </Link>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] animate-float">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }} style={{ background: "transparent" }}>
              <Scene />
            </Canvas>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-0 animate-fade-in animation-delay-800">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground/70 rounded-full" />
        </div>
      </div>
    </section>
  )
}
