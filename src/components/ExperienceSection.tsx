import { workExperience } from "@/lib/data";
import TimelineItem from "./TimelineItem";
import MotionWrapper from "./MotionWrapper";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-12 relative"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            <span>&#128188;&nbsp;</span>
            Work Experience
          </h2>
        </MotionWrapper>
        <div className="mb-8">
          {workExperience.map((job, index) => (
            <TimelineItem
              key={job.company + job.period}
              title={`\u{1F468}\u{200D}\u{1F4BB} ${job.position} | ${job.company}`}
              subtitle={`\u{1F4CD} ${job.location}`}
              date={`\u{1F4C5} ${job.period}`}
              isLast={index === workExperience.length - 1}
              index={index}
            >
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}
