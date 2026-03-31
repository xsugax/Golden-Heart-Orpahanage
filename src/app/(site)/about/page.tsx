import { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { Heart, Target, Eye, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Golden Heart Orphanage — our mission, vision, and the team dedicated to supporting orphaned and vulnerable children.",
};

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description:
      "Every decision we make is guided by genuine care for the children we serve.",
  },
  {
    icon: Target,
    title: "Impact",
    description:
      "We measure success by real outcomes in children's lives, not just numbers.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Every donor and supporter can see exactly how their contributions are used.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We build lasting relationships with families, volunteers, and partners.",
  },
];

const team = [
  {
    name: "Dr. Sarah Nkosi",
    role: "Executive Director",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    bio: "20+ years in child welfare and humanitarian development across Southern Africa.",
  },
  {
    name: "James Mthembu",
    role: "Head of Education",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    bio: "Former school principal with a passion for accessible education for every child.",
  },
  {
    name: "Amara Okafor",
    role: "Care Programs Lead",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    bio: "Social worker dedicated to creating safe, nurturing spaces for children in need.",
  },
  {
    name: "David van der Merwe",
    role: "Operations & Finance",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    bio: "Ensures every dollar is maximized for child welfare with full financial transparency.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-navy-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/50 to-navy-950" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              About Golden Heart Orphanage
            </h1>
            <p className="text-lg text-navy-300 leading-relaxed max-w-2xl mx-auto">
              We exist to provide orphaned and vulnerable children with the
              stability, education, and care they need to build meaningful
              futures.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <AnimatedSection>
              <div>
                <div className="inline-flex items-center gap-2 text-teal-600 mb-4">
                  <Target className="w-5 h-5" />
                  <span className="text-sm font-semibold uppercase tracking-wider">
                    Our Mission
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4 tracking-tight">
                  Breaking cycles of vulnerability
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Golden Heart Orphanage provides comprehensive support to
                  children who have been left without consistent care. We
                  address the immediate needs—shelter, nutrition, safety—while
                  building the long-term foundations of education, confidence,
                  and self-sufficiency.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Our approach is rooted in structure and dignity. We do not
                  offer temporary relief. We build lasting support systems that
                  follow a child through their most critical years of
                  development.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div>
                <div className="inline-flex items-center gap-2 text-amber-600 mb-4">
                  <Eye className="w-5 h-5" />
                  <span className="text-sm font-semibold uppercase tracking-wider">
                    Our Vision
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4 tracking-tight">
                  A world where every child thrives
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We envision a future where no child is left behind because of
                  circumstances they did not choose. Where every child,
                  regardless of background, has access to education, care, and
                  the opportunity to develop their full potential.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Our vision extends beyond our walls. We aim to create a model
                  of child development that can be replicated across
                  communities and regions facing similar challenges.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do."
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 mb-4">
                    <value.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Team"
            subtitle="Dedicated professionals committed to every child's wellbeing."
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-56 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-navy-900">
                      {member.name}
                    </h3>
                    <p className="text-sm text-teal-600 font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-sm text-slate-600">{member.bio}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-amber-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6 tracking-tight">
              Join us in making a difference
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Whether through donations, volunteering, or partnership, your
              involvement helps us reach more children and create lasting
              change.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/donate" size="lg">
                Support a Child
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Get in Touch
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
