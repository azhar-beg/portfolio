import { motion } from 'framer-motion';
import { aboutMe } from '@/data/portfolio-data';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Introduction() {
  return (
    <section id="intro" className="min-h-screen flex items-center justify-center pt-16 gradient-bg-light dark:gradient-bg-dark">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6 max-w-3xl mx-auto"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {aboutMe.name}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {aboutMe.title}
          </motion.p>
          <motion.p 
            className="max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {aboutMe.introduction}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button asChild size="lg" className="hover:scale-105 transition-transform">
              <a href="#contact">
                Get in touch <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}