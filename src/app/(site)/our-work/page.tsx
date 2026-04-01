import { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import {
  BookOpen,
  Home,
  Lightbulb,
  Utensils,
  Heart,
  GraduationCap,
  Brain,
  Ribbon,
  Accessibility,
  AlertTriangle,
  Building2,
  Droplets,
  CircleDot,
  Users,
  Leaf,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Discover the programmes and initiatives at Golden Heart Orphanage — from education and shelter to development and nutrition.",
};

const programs = [
  {
    icon: Home,
    title: "Safe Shelter Program",
    description:
      "Clean, secure living spaces where children can feel at home. Our facilities are designed to provide warmth, privacy, and a sense of belonging.",
    stats: "45 children housed",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: BookOpen,
    title: "Education Access Initiative",
    description:
      "Structured learning, tutoring, mentorship, and school enrollment. Every child has access to quality education tailored to their needs and pace.",
    stats: "120 children enrolled",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Utensils,
    title: "Nutrition & Health",
    description:
      "Three balanced meals daily, regular health check-ups, and access to medical care. Healthy bodies support healthy minds.",
    stats: "8,500+ meals served monthly",
    image:
      "https://images.unsplash.com/photo-1504159506876-f8338247a14a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Lightbulb,
    title: "Skills & Innovation",
    description:
      "STEM education, creative arts, and practical skills training. We prepare children not just for school, but for life.",
    stats: "6 active programs",
    image:
      "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Heart,
    title: "Emotional Support",
    description:
      "Counseling, peer support groups, and trauma-informed care. We address the invisible wounds that many of our children carry.",
    stats: "2 full-time counselors",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: GraduationCap,
    title: "Transition Support",
    description:
      "Preparing older children for independence through life skills training, career guidance, and continued mentorship after they leave.",
    stats: "18 graduates supported",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export default function OurWorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-navy-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Our Work
            </h1>
            <p className="text-lg text-navy-300 leading-relaxed max-w-2xl mx-auto">
              Every program we run is designed with one goal: giving children
              the tools, environment, and support they need to build a future
              on their own terms.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 md:py-28 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Programs & Initiatives"
            subtitle="Structured, evidence-based programs that address the full spectrum of a child's needs."
          />

          <div className="mt-16 space-y-16">
            {programs.map((program, index) => (
              <AnimatedSection key={program.title} delay={0.1}>
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 items-center`}
                >
                  <div className="md:w-1/2">
                    <div className="rounded-xl overflow-hidden shadow-sm">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-64 md:h-80 object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center">
                        <program.icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-2xl font-bold text-navy-900">
                        {program.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {program.description}
                    </p>
                    <div className="inline-flex items-center bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
                      {program.stats}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Foster Care & Sustainability */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Beyond Our Walls"
            subtitle="Our reach extends into families, communities, and systems that support children's long-term futures."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-cream-50 rounded-2xl p-8 border border-slate-100 h-full">
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-5">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  Foster Care Support
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  We provide direct funding and wraparound support for foster families — 
                  equipping loving households with the resources, training, and community 
                  they need to give children a family they can call their own.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-cream-50 rounded-2xl p-8 border border-slate-100 h-full">
                <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-5">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  Holistic Orphanage Care
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Full-spectrum provision of shelter, nutritious food, clothing, 
                  and health management. Every child in our care receives not just 
                  the basics — they receive the dignity of being truly looked after.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-cream-50 rounded-2xl p-8 border border-slate-100 h-full">
                <div className="w-12 h-12 rounded-xl bg-lime-50 text-lime-600 flex items-center justify-center mb-5">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  Sustainability Management
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  We invest in long-term wealth growth strategies and asset preservation 
                  to ensure our programs don&apos;t depend on a single donation cycle — 
                  because the children we serve deserve permanence, not promises.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Community Medical Clinics */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Community Medical Clinics"
            subtitle="Specialized care for individuals who are often overlooked by traditional healthcare systems."
          />

          <div className="mt-16 space-y-8">
            {[
              {
                icon: Brain,
                title: "Neurological Support",
                description:
                  "Compassionate, specialized care for individuals living with amnesia and neurological conditions. Through rehabilitation therapy, cognitive exercises, and family counseling, we help patients rebuild their confidence, memory, and sense of self — one day at a time.",
                image:
                  "https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              },
              {
                icon: Ribbon,
                title: "Oncology Division",
                description:
                  "Holistic support services for cancer patients, including treatment navigation, emotional counseling, nutritional support, and family guidance. We walk alongside patients and their families because no one should face a diagnosis alone — and no family should bear it in silence.",
                image:
                  "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              },
              {
                icon: Accessibility,
                title: "Disability Advocacy",
                description:
                  "Rehabilitation services, assistive technology, community awareness campaigns, and accessibility improvements. We champion the dignity and independence of every person with a disability — because barriers should never define someone's potential.",
                image:
                  "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              },
              {
                icon: AlertTriangle,
                title: "Crisis Care",
                description:
                  "Emergency medical assistance deployed to vulnerable populations in conflict zones and disaster areas. When systems collapse, we step in — providing triage, medicine, shelter, and the human presence that reminds people they are not forgotten.",
                image:
                  "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              },
            ].map((service, index) => (
              <AnimatedSection key={service.title} delay={0.1}>
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 items-center`}
                >
                  <div className="md:w-1/2">
                    <div className="rounded-xl overflow-hidden shadow-sm">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-64 md:h-72 object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center">
                        <service.icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-2xl font-bold text-navy-900">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Continental Disaster Response */}
      <section className="py-20 md:py-28 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Continental Disaster Response"
            subtitle="When disaster displaces families and destroys infrastructure, we help communities rebuild — with permanence, not patches."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Civic Reconstruction",
                category: "Infrastructure Recovery",
                description:
                  "Rebuilding roads, schools, and permanent housing after natural disasters and crises. We don't build temporary shelters — we build homes where families can put down roots and children can feel safe again.",
              },
              {
                icon: Droplets,
                title: "Water Treatment Systems",
                category: "Water Security",
                description:
                  "Implementing water purification technology in communities where clean water has never been a given. Every treatment system we install means fewer children sick, fewer mothers grieving, and more futures protected.",
              },
              {
                icon: CircleDot,
                title: "Sustainable Wells",
                category: "Water Security",
                description:
                  "Constructing deep-well water sources in rural areas, giving entire communities access to safe drinking water for generations. A single well can change hundreds of lives and outlast the people who build it.",
              },
            ].map((program, index) => (
              <AnimatedSection key={program.title} delay={index * 0.15}>
                <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-md transition-shadow h-full">
                  <span className="text-[10px] font-bold text-teal-600 uppercase tracking-[0.15em]">
                    {program.category}
                  </span>
                  <div className="flex items-center gap-3 mt-2 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-navy-50 text-navy-600 flex items-center justify-center">
                      <program.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900">
                      {program.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Life */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="A Day at Golden Heart"
            subtitle="Structure, care, and purpose in every part of the day."
          />
          <div className="mt-12 space-y-6">
            {[
              { time: "6:00 AM", activity: "Wake up & morning routine" },
              { time: "7:00 AM", activity: "Breakfast & preparation for school" },
              { time: "8:00 AM - 2:00 PM", activity: "School & structured learning" },
              { time: "2:30 PM", activity: "Lunch & rest period" },
              { time: "3:30 PM - 5:00 PM", activity: "Homework, tutoring & mentoring" },
              { time: "5:00 PM - 6:00 PM", activity: "Recreation, sports & creative activities" },
              { time: "6:30 PM", activity: "Dinner & evening routine" },
              { time: "7:30 PM", activity: "Reading time & personal development" },
              { time: "8:30 PM", activity: "Lights out" },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors">
                  <span className="text-sm font-mono font-medium text-teal-600 w-36 shrink-0">
                    {item.time}
                  </span>
                  <span className="text-slate-700">{item.activity}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-navy-950 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Help us expand our programs
            </h2>
            <p className="text-lg text-navy-300 mb-8 leading-relaxed">
              With your support, we can reach more children and deliver more
              programs that create lasting change.
            </p>
            <Button href="/donate" size="lg">
              Support Our Work
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
