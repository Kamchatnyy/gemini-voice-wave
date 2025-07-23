import { motion } from 'framer-motion';
import { Mic, Brain, Volume2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const steps = [
  {
    icon: Mic,
    title: "Speak",
    description: "Share your thoughts naturally through voice input with advanced speech recognition",
    color: "primary"
  },
  {
    icon: Brain,
    title: "AI Processing", 
    description: "Google Gemini AI analyzes and understands your voice with cutting-edge intelligence",
    color: "secondary"
  },
  {
    icon: Volume2,
    title: "Voice Response",
    description: "Receive natural, conversational responses delivered through realistic voice synthesis",
    color: "accent"
  }
];

export const HowItWorks = () => {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience seamless AI conversation with three simple steps
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2 
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <Card className="glass h-full border-border/50 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    {/* Icon with Glow */}
                    <div className="relative mb-6">
                      <motion.div
                        whileHover={{ rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className={`
                          w-16 h-16 mx-auto rounded-full flex items-center justify-center
                          ${step.color === 'primary' ? 'bg-gradient-primary glow-primary' : ''}
                          ${step.color === 'secondary' ? 'bg-gradient-secondary glow-secondary' : ''}
                          ${step.color === 'accent' ? 'bg-accent text-accent-foreground' : ''}
                          group-hover:scale-110 transition-all duration-300
                        `}
                      >
                        <Icon className="h-8 w-8" />
                      </motion.div>
                      
                      {/* Floating Particles */}
                      {Array.from({ length: 3 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className={`
                            absolute w-1 h-1 rounded-full
                            ${step.color === 'primary' ? 'bg-primary' : ''}
                            ${step.color === 'secondary' ? 'bg-secondary' : ''}
                            ${step.color === 'accent' ? 'bg-accent' : ''}
                          `}
                          style={{
                            left: `${50 + (i - 1) * 20}%`,
                            top: `${30 + i * 10}%`,
                          }}
                          animate={{
                            y: [0, -8, 0],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.3,
                          }}
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="text-2xl font-semibold mb-4 text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Step Number */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Connection Lines */}
        <div className="hidden md:block relative mt-8">
          <svg className="absolute top-0 left-0 w-full h-2" viewBox="0 0 100 2">
            <motion.path
              d="M 16.67 1 Q 50 1 83.33 1"
              stroke="url(#gradient)"
              strokeWidth="0.5"
              fill="none"
              strokeDasharray="2 2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1 }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(260, 80%, 65%)" />
                <stop offset="50%" stopColor="hsl(180, 80%, 55%)" />
                <stop offset="100%" stopColor="hsl(170, 70%, 50%)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};