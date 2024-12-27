import { motion } from "framer-motion";
import { skills } from "@/data/portfolio-data";
import { Card } from "@/components/ui/card";

export function Skills() {
  const categories = ["frontend", "backend", "database", "tools"];

  return (
    <section
      id="skills"
      className="py-20 gradient-bg-light dark:gradient-bg-dark"
    >
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Skills
        </h2>
        <div className="grid gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4 capitalize">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => {
                    return (
                      <Card
                        key={skill.name}
                        className="p-4 text-center hover-card-animation gradient-border"
                      >
                        <p className="font-medium">{skill.name}</p>
                      </Card>
                    );
                  })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
