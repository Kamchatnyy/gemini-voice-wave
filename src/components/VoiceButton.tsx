import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, Square } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface VoiceButtonProps {
  onToggle: (isRecording: boolean) => void;
  className?: string;
}

export const VoiceButton = ({ onToggle, className }: VoiceButtonProps) => {
  const [isRecording, setIsRecording] = useState(false);

  const handleClick = () => {
    const newState = !isRecording;
    setIsRecording(newState);
    onToggle(newState);
  };

  return (
    <motion.div
      className={cn("relative", className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Animated Ring */}
      {isRecording && (
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-primary"
          initial={{ scale: 1, opacity: 1 }}
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [1, 0.5, 1] 
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
      
      {/* Main Button */}
      <Button
        size="lg"
        variant={isRecording ? "secondary" : "default"}
        className={cn(
          "w-24 h-24 rounded-full relative overflow-hidden transition-all duration-300",
          "bg-gradient-primary hover:bg-gradient-secondary",
          "shadow-glow hover:shadow-secondary-glow",
          isRecording && "pulse-glow voice-ring"
        )}
        onClick={handleClick}
      >
        <motion.div
          initial={false}
          animate={{ rotate: isRecording ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isRecording ? (
            <Square className="h-8 w-8" />
          ) : (
            <Mic className="h-8 w-8" />
          )}
        </motion.div>
      </Button>
      
      {/* Background Glow */}
      <div className={cn(
        "absolute inset-0 rounded-full transition-opacity duration-300",
        "bg-primary/20 blur-xl",
        isRecording ? "opacity-100" : "opacity-0"
      )} />
    </motion.div>
  );
};