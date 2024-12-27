import { motion } from 'framer-motion';
import { socialLinks } from '@/data/portfolio-data';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Github, Linkedin, Mail } from 'lucide-react';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-12">Get in Touch</h2>
          <Card className="max-w-lg mx-auto p-8">
            <div className="grid gap-4">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <Button
                    key={link.platform}
                    asChild
                    variant="outline"
                    className="w-full"
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Icon className="h-4 w-4" />
                      {link.platform}
                    </a>
                  </Button>
                );
              })}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}