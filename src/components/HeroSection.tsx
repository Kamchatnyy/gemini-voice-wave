import { useState } from 'react';
import { motion } from 'framer-motion';
import { VoiceButton } from './VoiceButton';
import { VoiceVisualizer } from './VoiceVisualizer';
import heroBg from '@/assets/hero-bg.jpg';

export const HeroSection = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [status, setStatus] = useState<'idle' | 'listening' | 'thinking' | 'speaking'>('idle');

  const handleVoiceToggle = (recording: boolean) => {
    setIsRecording(recording);
    if (recording) {
      setStatus('listening');
      // Simulate status changes
      setTimeout(() => setStatus('thinking'), 2000);
      setTimeout(() => setStatus('speaking'), 4000);
      setTimeout(() => setStatus('idle'), 6000);
    } else {
      setStatus('idle');
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'listening': return 'Listening...';
      case 'thinking': return 'AI is thinking...';
      case 'speaking': return 'AI is speaking...';
      default: return 'Try real-time AI voice powered by Gemini';
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Animated Particles Background */}
      <div className="particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo/Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            AI Voice
          </h1>
          <div className="text-4xl md:text-5xl font-light text-secondary">
            Gemini
          </div>
        </motion.div>

        {/* Status Text */}
        <motion.p
          key={status}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="text-xl md:text-2xl text-muted-foreground mb-12 min-h-[2rem]"
        >
          {getStatusText()}
        </motion.p>

        {/* Voice Button with Visualizer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center mb-16"
        >
          {/* Voice Visualizer Ring */}
          {isRecording && (
            <VoiceVisualizer 
              isActive={isRecording}
              className="absolute inset-0 w-32 h-32 -translate-x-4 -translate-y-4"
            />
          )}
          
          {/* Main Voice Button */}
          <VoiceButton onToggle={handleVoiceToggle} />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};