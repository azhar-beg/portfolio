import { motion } from "framer-motion";
import { aboutMe } from "@/data/portfolio-data";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-lg text-muted-foreground">
              {aboutMe.description}
            </p>
            <Button asChild>
              <a href={aboutMe.resumeUrl} download>
                Download Resume <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="aspect-square rounded-full overflow-hidden max-w-md mx-auto"
          >
            <img
              src={aboutMe.photoUrl}
              alt={aboutMe.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
