import React, { useState, useRef } from 'react';
import ProjectModal from './ProjectModal';
import ProjectChest from './ProjectChest';

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [explosions, setExplosions] = useState([]); // State for active explosions
  const [isVideoActive, setIsVideoActive] = useState(false); // New state for the video
  const [videoAnimationPhase, setVideoAnimationPhase] = useState(''); // State for video animation phase
  const audioRef = useRef(null); // Reference to the audio element

  const projectsData = [
    { id: 1, title: 'Proyecto 1', link: 'https://github.com/tu-usuario/proyecto1', images: ['foto 1', 'foto 2', 'foto 3', 'foto 4'] },
    { id: 2, title: 'Proyecto 2', link: 'https://github.com/tu-usuario/proyecto2', images: ['foto 1', 'foto 2', 'foto 3', 'foto 4'] },
    { id: 3, title: 'Proyecto 3', link: 'https://github.com/tu-usuario/proyecto3', images: ['foto 1', 'foto 2', 'foto 3', 'foto 4'] },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Function to generate a random position (top and left)
  const generateRandomPosition = () => {
    // Generate values between 10% and 90% for top, and 0% to 100% for left
    const top = Math.random() * 80 + 10; // 10% to 90%
    const left = Math.random() * 100; // 0% to 100%
    return { top: `${top}%`, left: `${left}%` };
  };

  // Function to trigger an explosion
  const triggerExplosion = () => {
    const id = Date.now(); // Unique ID for each explosion
    const position = generateRandomPosition();
    const newExplosion = { id, ...position };

    setExplosions(prev => [...prev, newExplosion]);

    // Explosion disappears after a short time (e.g., 800ms)
    setTimeout(() => {
      setExplosions(prev => prev.filter(exp => exp.id !== id));
    }, 800); // Visibility duration of the explosion GIF
  };

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset audio if it was already playing
      audioRef.current.play();
      setIsAudioPlaying(true);

      // Video appears at 3.5 seconds (3500ms)
      setTimeout(() => {
        setIsVideoActive(true);
        setVideoAnimationPhase('appear'); // Changed to 'appear' for fade-in animation
      }, 3500); // Video starts at 3.5 seconds

      // Video starts disappearing 100ms before its content ends (at 7400ms)
      setTimeout(() => {
        setVideoAnimationPhase('disappear'); // Changed to 'disappear' for fade-out animation
      }, 7400); // 3500ms (start) + 4000ms (video duration) - 100ms (before end) = 7400ms

      // Video fully disappeared and removed from DOM (at 8400ms)
      setTimeout(() => {
        setIsVideoActive(false);
        setVideoAnimationPhase('');
      }, 8400); // 7400ms (start disappear) + 1000ms (disappear animation duration) = 8400ms

      // Explosions at 7 and 8 seconds (audio duration is 8s)
      setTimeout(() => {
        triggerExplosion();
      }, 7000);

      setTimeout(() => {
        triggerExplosion();
      }, 8000); 

      // Haki aura lasts 8 seconds with the audio
      setTimeout(() => {
        setIsAudioPlaying(false);
        setExplosions([]);
      }, 8000); // Audio duration is 8 seconds
    }
  };

  return (
    <section id="proyectos" className="relative bg-black min-h-screen flex flex-col justify-center items-center py-16">
      {/* Background of the section without opacity */}
      <div className="absolute inset-0 bg-repeat" style={{ backgroundImage: "url('/images/fondo3.png')" }}></div>

      {isAudioPlaying && (
        // Haki Aura covering the entire section - BORDERS ONLY, RGB, GLOWING, AND INTENSELY TREMBLING
        // z-0 so it's below the main content (z-10)
        <div className="absolute inset-0 animate-haki-section-aura z-0"></div>
      )}

      {/* Render active explosions */}
      {explosions.map(exp => (
        <img
          key={exp.id}
          src="/images/bomb.gif" // Make sure bomb.gif is in public/images/!
          alt="Explosion"
          className="absolute z-40 w-[60vw] h-[60vh] object-contain animate-explosion-fade"
          style={{ top: exp.top, left: exp.left }}
        />
      ))}

      {isVideoActive && (
        <video
          key={videoAnimationPhase} // Key change to re-trigger animation
          src="/images/uno.mp4" // Make sure uno.mp4 is in public/images/
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vh] object-contain z-50 ${videoAnimationPhase === 'appear' ? 'animate-video-fade-in' : 'animate-video-fade-out'}`}
          autoPlay
          muted // Mute it if it has its own audio to avoid conflict, or remove if it's part of the effect.
          playsInline // Important for mobile autoplay
        />
      )}

      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between p-4">
        {/* Left Side: Garp GIF */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0">
          <div className="relative">
<> {/* Start React Fragment to group Garp image and its frame */}
              {isAudioPlaying && (
                // Rainbow Haki Frame around Garp (now rectangular and above Garp)
                // Increased inset and z-index
                <div className="absolute inset-[-20px] animate-haki-alocado-frame z-35"></div>
              )}
              <img
                src="/images/2.gif" // Using Garp's GIF (named 2.gif)
                alt="Garp showing his power"
                className={`max-h-screen object-contain cursor-pointer transition-transform duration-100 relative z-30 ${isAudioPlaying ? 'animate-garp-epic-transformation' : ''}`} // New Garp transformation
                onClick={playSound}
              />
            </> {/* End React Fragment */}
            <audio ref={audioRef} src="/audio/sound4.mp3" preload="auto"></audio>
          </div>
        </div>

        {/* Right Side: Projects Container */}
        <div className="w-full lg:w-1/2 flex flex-col items-center space-y-8">
          {projectsData.map((project) => (
            <ProjectChest
              key={project.id}
              project={project}
              onClick={() => openModal(project)}
              isAudioPlaying={isAudioPlaying} // Pass isAudioPlaying to ProjectChest
            />
          ))}
        </div>
      </div>

      {isModalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}

      {/* Custom CSS for Haki Aura, Explosion, Garp Tremble, and Rainbow Frame animations */}
      <style jsx>{`
        /* Haki Aura animation for the entire section - BORDERS ONLY, RGB, GLOWING, AND INTENSELY TREMBLING */
        @keyframes haki-border-aura-color {
          0% { box-shadow: 0 0 20px 10px rgba(255, 0, 0, 0.8), 0 0 40px 20px rgba(255, 0, 0, 0.6); } /* Red */
          16% { box-shadow: 0 0 20px 10px rgba(255, 127, 0, 0.8), 0 0 40px 20px rgba(255, 127, 0, 0.6); } /* Orange */
          33% { box-shadow: 0 0 20px 10px rgba(255, 255, 0, 0.8), 0 0 40px 20px rgba(255, 255, 0, 0.6); } /* Yellow */
          50% { box-shadow: 0 0 20px 10px rgba(0, 255, 0, 0.8), 0 0 40px 20px rgba(0, 255, 0, 0.6); } /* Green */
          66% { box-shadow: 0 0 20px 10px rgba(0, 0, 255, 0.8), 0 0 40px 20px rgba(0, 0, 255, 0.6); } /* Blue */
          83% { box-shadow: 0 0 20px 10px rgba(75, 0, 130, 0.8), 0 0 40px 20px rgba(75, 0, 130, 0.6); } /* Indigo */
          100% { box-shadow: 0 0 20px 10px rgba(255, 0, 0, 0.8), 0 0 40px 20px rgba(255, 0, 0, 0.6); } /* Red (loop back) */
        }
        .animate-haki-section-aura {
          animation: haki-border-aura-color 4s linear infinite, alocado-frame-movement 0.1s linear infinite; /* Combine color change and fast tremble */
          mix-blend-mode: screen; /* Good for glowing effect */
          filter: brightness(250%) blur(12px); /* Apply brightness and blur to the shadow itself */
          pointer-events: none; /* Allows interaction with elements below */
        }

        /* Animation for explosions (appear and disappear) */
        @keyframes explosion-fade {
          0% { opacity: 0; transform: scale(0.5); }
          20% { opacity: 1; transform: scale(1.0); }
          80% { opacity: 1; transform: scale(0.9); }
          100% { opacity: 0; transform: scale(0.8); }
        }
        .animate-explosion-fade {
          animation: explosion-fade 0.8s ease-out forwards;
        }

        /* Garp Epic Transformation Animation */
        @keyframes garp-epic-transformation {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); filter: brightness(100%); }
          /* Single, sustained zoom and brightness */
          5% { transform: translate(0, 0) scale(1.5) rotate(0deg); filter: brightness(100%); } /* No extra brightness from GIF */
          95% { transform: translate(0, 0) scale(1.5) rotate(0deg); filter: brightness(100%); } /* Maintain zoom and brightness */
          /* Slow side-to-side movement */
          25% { transform: translateX(-10px) scale(1.5) rotate(0deg); }
          75% { transform: translateX(10px) scale(1.5) rotate(0deg); }
          /* Return to original */
          100% { transform: translate(0, 0) scale(1) rotate(0deg); filter: brightness(100%); }
        }
        .animate-garp-epic-transformation {
          animation: garp-epic-transformation 8s ease-in-out forwards; /* Runs for the duration of the audio, then stays at 100% keyframe */
          animation-iteration-count: 1; /* Ensure it runs once */
        }

        /* Rainbow Haki Aura Animation (for background movement) */
        @keyframes haki-rainbow-aura-anim {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Alocado Frame Movement Animation (used for Garp frame and now section aura) */
        @keyframes alocado-frame-movement {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          10% { transform: translate(-5px, -5px) rotate(-2deg); }
          20% { transform: translate(5px, 5px) rotate(2deg); }
          30% { transform: translate(-8px, -8px) rotate(-3deg); }
          40% { transform: translate(8px, 8px) rotate(3deg); }
          50% { transform: translate(-5px, -5px) rotate(-2deg); }
          60% { transform: translate(5px, 5px) rotate(2deg); }
          70% { transform: translate(-8px, -8px) rotate(-3deg); }
          80% { transform: translate(8px, 8px) rotate(3deg); }
          90% { transform: translate(-5px, -5px) rotate(-1deg); }
        }

        /* Class for the Alocado Rainbow Frame (around Garp) */
        @keyframes frame-rainbow-border-color {
          0% { box-shadow: 0 0 0 5px rgba(255, 0, 0, 1), 0 0 20px 10px rgba(255, 0, 0, 0.7); } /* Red */
          16% { box-shadow: 0 0 0 5px rgba(255, 127, 0, 1), 0 0 20px 10px rgba(255, 127, 0, 0.7); } /* Orange */
          33% { box-shadow: 0 0 0 5px rgba(255, 255, 0, 1), 0 0 20px 10px rgba(255, 255, 0, 0.7); } /* Yellow */
          50% { box-shadow: 0 0 0 5px rgba(0, 255, 0, 1), 0 0 20px 10px rgba(0, 255, 0, 0.7); } /* Green */
          66% { box-shadow: 0 0 0 5px rgba(0, 0, 255, 1), 0 0 20px 10px rgba(0, 0, 255, 0.7); } /* Blue */
          83% { box-shadow: 0 0 0 5px rgba(75, 0, 130, 1), 0 0 20px 10px rgba(75, 0, 130, 0.7); } /* Indigo */
          100% { box-shadow: 0 0 0 5px rgba(255, 0, 0, 1), 0 0 20px 10px rgba(255, 0, 0, 0.7); } /* Red (loop back) */
        }
        .animate-haki-alocado-frame {
          animation: frame-rainbow-border-color 4s linear infinite, alocado-frame-movement 0.15s linear infinite; /* Combine rainbow border color and alocado movement */
          mix-blend-mode: screen; /* Blends colors in a bright, glowing way */
          filter: brightness(250%) blur(8px); /* Max brightness and strong blur for glow */
          pointer-events: none; /* Allows clicks to pass through to the GIF */
        }

        /* Video Animations */
        @keyframes video-fade-in {
            0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
            100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        .animate-video-fade-in {
            animation: video-fade-in 0.5s ease-out forwards; /* Fast appearance */
        }

        @keyframes video-fade-out {
            0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        }
        .animate-video-fade-out {
            animation: video-fade-out 1s ease-in forwards; /* Slower fade out */
        }

        /* Chest Tremble Animation - Added here for Projects.jsx */
        @keyframes chest-tremble-intense {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          5% { transform: translate(-3px, -3px) rotate(-1deg); }
          10% { transform: translate(3px, 3px) rotate(1deg); }
          15% { transform: translate(-5px, -5px) rotate(-2deg); }
          20% { transform: translate(5px, 5px) rotate(2deg); }
          25% { transform: translate(-7px, -7px) rotate(-3deg); }
          30% { transform: translate(7px, 7px) rotate(3deg); }
          35% { transform: translate(-5px, -5px) rotate(-2deg); }
          40% { transform: translate(5px, 5px) rotate(2deg); }
          45% { transform: translate(-3px, -3px) rotate(-1deg); }
          50% { transform: translate(3px, 3px) rotate(1deg); }
          55% { transform: translate(-5px, -5px) rotate(-2deg); }
          60% { transform: translate(5px, 5px) rotate(2deg); }
          65% { transform: translate(-7px, -7px) rotate(-3deg); }
          70% { transform: translate(7px, 7px) rotate(3deg); }
          75% { transform: translate(-5px, -5px) rotate(-2deg); }
          80% { transform: translate(5px, 5px) rotate(2deg); }
          85% { transform: translate(-3px, -3px) rotate(-1deg); }
          90% { transform: translate(3px, 3px) rotate(1deg); }
          95% { transform: translate(-2px, -2px) rotate(-1deg); }
        }
        .animate-chest-tremble-intense {
          animation: chest-tremble-intense 0.1s linear infinite; /* Very fast and intense tremble */
        }
      `}</style>
    </section>
  );
};

export default Projects;
