import React, { useState, useEffect, useCallback } from "react";
import styled, { keyframes, css } from "styled-components";

const JOURNEYS = [
  { from: "New York", to: "Seattle", label: "Moved west for Qualtrics", year: "2022" },
  { from: "Seattle", to: "New York", label: "Back to the east coast", year: "2025" },
];

// Globe coordinates (orthographic-ish projection centered on US)
const CITIES = {
  "New York": { x: 72, y: 42, lat: 40.7, lng: -74 },
  Seattle: { x: 18, y: 30, lat: 47.6, lng: -122.3 },
};

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`;

const dashDraw = keyframes`
  to { stroke-dashoffset: 0; }
`;

const planeMove = keyframes`
  0% { offset-distance: 0%; opacity: 1; }
  90% { opacity: 1; }
  100% { offset-distance: 100%; opacity: 0; }
`;

const pulse = keyframes`
  0%, 100% { r: 3; opacity: 0.8; }
  50% { r: 5; opacity: 1; }
`;

const GlobeWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 420px;
  aspect-ratio: 1;
  margin: 0 auto;
`;

const GlobeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(
    circle at 35% 35%,
    rgba(59, 130, 246, 0.12) 0%,
    rgba(17, 17, 24, 0.8) 70%
  );
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const GridLines = styled.g`
  opacity: 0.08;
  stroke: #fff;
  stroke-width: 0.3;
  fill: none;
`;

const ArcPath = styled.path`
  fill: none;
  stroke: #3b82f6;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-dasharray: ${(props) => props.$length || 200};
  stroke-dashoffset: ${(props) => props.$length || 200};
  animation: ${dashDraw} 1.5s ease-out forwards;
  filter: drop-shadow(0 0 4px rgba(59, 130, 246, 0.5));
`;

const CityDot = styled.circle`
  fill: #3b82f6;
  animation: ${pulse} 2s ease-in-out infinite;
  filter: drop-shadow(0 0 3px rgba(59, 130, 246, 0.6));
`;

const CityLabel = styled.text`
  fill: #fff;
  font-size: 3.5px;
  font-weight: 600;
  font-family: "Inter", sans-serif;
  text-anchor: ${(props) => props.$anchor || "start"};
  animation: ${fadeIn} 0.5s ease-out both;
`;

const PlaneEmoji = styled.div`
  position: absolute;
  font-size: 18px;
  offset-path: ${(props) => props.$path};
  animation: ${planeMove} 2.5s ease-in-out forwards;
  animation-delay: 0.5s;
  opacity: 0;
  filter: drop-shadow(0 0 4px rgba(59, 130, 246, 0.4));
  pointer-events: none;
`;

const orbitLine = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const OrbitRing = styled.div`
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  border: 1px dashed rgba(59, 130, 246, 0.15);
  animation: ${orbitLine} 60s linear infinite;
  pointer-events: none;
`;

const JourneyInfo = styled.div`
  text-align: center;
  margin-top: 1.25rem;
  animation: ${fadeIn} 0.6s ease-out both;
  animation-delay: 1s;

  .journey-label {
    color: #e0e0e0;
    font-size: 0.9375rem;
    margin-bottom: 0.25rem;
  }

  .journey-route {
    color: #3b82f6;
    font-size: 0.8125rem;
    font-weight: 500;
  }
`;

const StepControls = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const StepDot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1.5px solid rgba(59, 130, 246, 0.5);
  background: ${(props) =>
    props.$active ? "#3b82f6" : "transparent"};
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;

  &:hover {
    border-color: #3b82f6;
    background: ${(props) =>
      props.$active ? "#3b82f6" : "rgba(59, 130, 246, 0.2)"};
  }
`;

const JourneyGlobe = () => {
  const [step, setStep] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const journey = JOURNEYS[step];
  const from = CITIES[journey.from];
  const to = CITIES[journey.to];

  // Arc control point (bulge upward for flight path)
  const midX = (from.x + to.x) / 2;
  const midY = Math.min(from.y, to.y) - 18;
  const arcD = `M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`;

  // For the plane offset-path, convert SVG coords to percentages
  const planePath = `path("M ${(from.x / 100) * 420} ${(from.y / 100) * 420} Q ${(midX / 100) * 420} ${(midY / 100) * 420} ${(to.x / 100) * 420} ${(to.y / 100) * 420}")`;

  const handleStep = useCallback((newStep) => {
    setStep(newStep);
    setAnimKey((k) => k + 1);
  }, []);

  // Auto-advance
  useEffect(() => {
    const timer = setTimeout(() => {
      handleStep((step + 1) % JOURNEYS.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [step, handleStep]);

  return (
    <div>
      <GlobeWrapper>
        <OrbitRing />
        <GlobeContainer>
          <svg viewBox="0 0 100 100" key={animKey}>
            {/* Grid lines for globe feel */}
            <GridLines>
              <ellipse cx="50" cy="50" rx="48" ry="48" />
              <ellipse cx="50" cy="50" rx="35" ry="48" />
              <ellipse cx="50" cy="50" rx="18" ry="48" />
              <line x1="2" y1="50" x2="98" y2="50" />
              <line x1="2" y1="30" x2="98" y2="30" />
              <line x1="2" y1="70" x2="98" y2="70" />
            </GridLines>

            {/* Simplified US outline hint */}
            <path
              d="M 12,28 C 14,26 18,25 22,26 C 26,27 28,30 32,30 C 36,30 40,28 44,28 C 48,28 52,30 56,32 C 60,34 64,36 68,38 C 72,40 76,42 78,44 C 76,46 74,48 70,48 C 66,48 62,46 58,44 C 54,42 50,42 46,44 C 42,46 38,48 34,48 C 30,48 26,46 22,44 C 18,42 14,38 12,34 Z"
              fill="rgba(59, 130, 246, 0.06)"
              stroke="rgba(59, 130, 246, 0.15)"
              strokeWidth="0.4"
            />

            {/* Flight arc */}
            <ArcPath d={arcD} $length={200} />

            {/* City dots */}
            <CityDot cx={from.x} cy={from.y} r="3" />
            <CityDot
              cx={to.x}
              cy={to.y}
              r="3"
              style={{ animationDelay: "1s" }}
            />

            {/* City labels */}
            <CityLabel x={from.x + 4} y={from.y - 4} $anchor="start">
              {journey.from}
            </CityLabel>
            <CityLabel x={to.x + 4} y={to.y - 4} $anchor="start">
              {journey.to}
            </CityLabel>
          </svg>

          {/* Animated plane */}
          <PlaneEmoji key={`plane-${animKey}`} $path={planePath}>
            ✈
          </PlaneEmoji>
        </GlobeContainer>
      </GlobeWrapper>

      <JourneyInfo key={`info-${animKey}`}>
        <p className="journey-label">{journey.label}</p>
        <p className="journey-route">
          {journey.from} → {journey.to} &middot; {journey.year}
        </p>
      </JourneyInfo>

      <StepControls>
        {JOURNEYS.map((_, i) => (
          <StepDot
            key={i}
            $active={i === step}
            onClick={() => handleStep(i)}
            aria-label={`Journey ${i + 1}`}
          />
        ))}
      </StepControls>
    </div>
  );
};

export default JourneyGlobe;
