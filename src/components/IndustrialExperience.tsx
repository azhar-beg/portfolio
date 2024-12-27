import { motion } from "framer-motion";
import { industrialExperience } from "@/data/portfolio-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

export function IndustrialExperience() {
  return (
    <section id="experience" className="py-20">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Industrial Experience
        </h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          {industrialExperience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="gradient-border hover-card-animation">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-5 w-5" />
                        <h3 className="text-xl font-semibold">{exp.company}</h3>
                      </div>
                      <p className="text-lg text-primary">{exp.role}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                  {/* Render description as a styled bullet list */}
                  <ul className="mb-4 text-muted-foreground list-none pl-0 space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2">•</span>{" "}
                        {/* Custom bullet symbol */}
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-medium">Domain:</span>
                      <Badge variant="secondary" className="text-sm">
                        {exp.domain}
                      </Badge>
                    </div>
                    <div>
                      <span className="font-medium block mb-2">
                        Technologies:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-sm"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
