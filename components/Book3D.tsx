"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";

interface Book3DProps {
  coverImage: string;
  title?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showScanEffect?: boolean;
}

const sizeConfig = {
  sm: { width: 120, height: 180, depth: 18 },
  md: { width: 180, height: 270, depth: 24 },
  lg: { width: 260, height: 390, depth: 35 },
  xl: { width: 320, height: 480, depth: 42 },
};

export function Book3D({
  coverImage,
  title = "Inside the Billion Dollar Mind",
  size = "lg",
  className = "",
  showScanEffect = true,
}: Book3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const { width, height, depth } = sizeConfig[size];

  // Mouse position for tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation
  const springConfig = { stiffness: 150, damping: 15 };
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [8, -8]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-12, 12]),
    springConfig
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  // Colors for the Oracle aesthetic
  const spineColor = "#1a1a1a";
  const accentColor = "#0D7377";

  return (
    <div
      className={`relative ${className}`}
      style={{
        perspective: "1200px",
        width: width + depth,
        height: height + 20,
      }}
    >
      <motion.div
        ref={ref}
        className="relative cursor-pointer"
        style={{
          width: width + depth,
          height: height,
          transformStyle: "preserve-3d",
          rotateX,
          rotateY,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        whileHover={{ z: 20 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {/* Front Cover */}
        <motion.div
          className="absolute rounded-r-md overflow-hidden"
          style={{
            width,
            height,
            left: depth,
            transformStyle: "preserve-3d",
            transform: `translateZ(${depth / 2}px)`,
            boxShadow: isHovered
              ? `8px 8px 30px rgba(0,0,0,0.6), 0 0 60px ${accentColor}30`
              : "4px 4px 20px rgba(0,0,0,0.5)",
          }}
        >
          {/* Book cover image */}
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />

          {/* Glossy overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 40%, rgba(0,0,0,0.15) 100%)",
            }}
          />

          {/* Scan line effect */}
          {showScanEffect && (
            <motion.div
              className="absolute left-0 right-0 h-[2px] pointer-events-none"
              style={{
                background: `linear-gradient(90deg, transparent, ${accentColor}, rgba(13,115,119,0.6), ${accentColor}, transparent)`,
                boxShadow: `0 0 15px ${accentColor}, 0 0 30px rgba(13,115,119,0.5)`,
              }}
              animate={{
                top: ["0%", "100%"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 1.5,
              }}
            />
          )}

          {/* Teal glow on hover */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${accentColor}20 0%, transparent 70%)`,
            }}
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Spine */}
        <div
          className="absolute top-0 rounded-l-sm overflow-hidden"
          style={{
            width: depth,
            height,
            left: 0,
            background: `linear-gradient(90deg, ${spineColor} 0%, #2a2a2a 50%, ${spineColor} 100%)`,
            transform: `rotateY(-90deg) translateZ(${depth / 2}px)`,
            transformOrigin: "right center",
          }}
        >
          {/* Spine ridges */}
          <div
            className="absolute inset-0"
            style={{
              background: `repeating-linear-gradient(
                to right,
                transparent 0px,
                rgba(255,255,255,0.03) 1px,
                transparent 2px,
                transparent ${depth / 3}px
              )`,
            }}
          />

          {/* Spine accent line */}
          <div
            className="absolute top-4 bottom-4 left-1/2 w-[1px]"
            style={{
              background: `linear-gradient(to bottom, transparent, ${accentColor}60, transparent)`,
            }}
          />

          {/* Spine text */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              transform: "rotate(180deg)",
            }}
          >
            <span
              className="text-white/70 font-semibold truncate px-1 text-[9px] tracking-wider"
              style={{ textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}
            >
              BILLION DOLLAR MIND
            </span>
          </div>
        </div>

        {/* Back Cover */}
        <div
          className="absolute rounded-r-md"
          style={{
            width,
            height,
            left: depth,
            background: "#0a0a0a",
            transform: `translateZ(-${depth / 2}px)`,
          }}
        />
      </motion.div>

      {/* Dynamic shadow */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        style={{
          width: width * 0.85,
          height: 20,
        }}
        animate={{
          opacity: isHovered ? 0.7 : 0.4,
          scaleX: isHovered ? 1.2 : 1,
          y: isHovered ? 15 : 8,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {/* Layered shadow for depth */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse, rgba(0,0,0,0.5) 0%, transparent 70%)`,
            filter: "blur(8px)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse, ${accentColor}20 0%, transparent 60%)`,
            filter: "blur(12px)",
          }}
        />
      </motion.div>
    </div>
  );
}
