import { education } from "@/lib/data";
import TimelineItem from "./TimelineItem";
import MotionWrapper from "./MotionWrapper";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="py-12 relative scroll-mt-20"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            🎓 Education
          </h2>
        </MotionWrapper>

        <div className="mb-8">
          {education.map((edu, index) => (
            <TimelineItem
              key={edu.institution}
              title={`\u{1F31F} ${edu.degree}`}
              subtitle={`\u{1F3DB}\u{FE0F} ${edu.institution}`}
              date={`\u{1F4C5} ${edu.period}`}
              isLast={index === education.length - 1}
              index={index}
            >
              <p className="text-sm text-muted-foreground mb-3">
                {"\u{1F4CD} "}{edu.location}
              </p>
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}
