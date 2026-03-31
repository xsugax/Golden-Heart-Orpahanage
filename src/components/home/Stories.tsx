import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";

const stories = [
  {
    title: "Thandi's Journey to Education",
    content:
      "At 7 years old, Thandi had never held a pencil. After joining Golden Heart, she discovered a passion for reading and mathematics. Today, she mentors younger children and dreams of becoming a teacher.",
    imageUrl:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Building Futures Through Innovation",
    content:
      "Our STEM program introduced 30 children to basic coding and problem-solving. The results were remarkable—children who had never used a computer began creating simple programs within weeks.",
    imageUrl:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "A Safe Place to Call Home",
    content:
      "When the floods displaced hundreds of families, we welcomed 15 children who had nowhere to go. Within months, they were thriving—attending school, making friends, and rediscovering childhood.",
    imageUrl:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
];

export default function Stories() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Stories of Impact"
          subtitle="Real stories from the children and communities we serve."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <AnimatedSection key={story.title} delay={index * 0.15}>
              <Card hover className="overflow-hidden p-0">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={story.imageUrl}
                    alt={story.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-navy-900 mb-3">
                    {story.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {story.content}
                  </p>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
