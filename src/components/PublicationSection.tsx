import { education } from "@/lib/data";
import TimelineItem from "./TimelineItem";
import { Award } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";

export default function PublicationSection() {
  return (
    <section
      id="publication"
      className="py-12 bg-green-950/10"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
             Publicaitions
          </h2>
        </MotionWrapper>

        <div className="mb-8">
          {publications.map((paper, index) => (
            <TimelineItem
              key={paper.institution}
              title={` ${paper.name}`}
              subtitle={`️ ${edu.venue}`}
              date={` ${edu.date}`}
              isLast={index === paper.length - 1}
              index={index}
            >
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}
