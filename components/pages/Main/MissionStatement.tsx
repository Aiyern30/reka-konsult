import type React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Badge,
  Card,
  CardContent,
} from "@/components/ui/";
import {
  Clock,
  Target,
  Award,
  Building,
  CheckCircle,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function HistoryMissionSection() {
  return (
    <section className="py-24 px-4 lg:px-10">
      <div className="container mx-auto">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Company History */}
          <div className="flex flex-col">
            <div className="mb-8">
              <Badge variant="outline" className="mb-4">
                Our Journey
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight mb-4">
                Company History
              </h2>
              <p className="text-muted-foreground">
                Tracing our evolution from a small partnership to an established
                architectural firm.
              </p>
            </div>

            <div className="relative border-l-2 border-primary/20 pl-8 space-y-10">
              <TimelineItem
                year="1990"
                title="Foundation"
                icon={<Building />}
                description="The company has its roots in the partnership of Reka Konsult, formed in June 1990."
              />

              <TimelineItem
                year="2010"
                title="Official Registration"
                icon={<Award />}
                description="The Partnership was granted the approval by Lembaga Arkitek Malaysia (LAM) and Registrar of Companies to operate as a company under the style name of ARKITEK REKAKONSULT SDN BHD."
              />

              <TimelineItem
                year="Present"
                title="30+ Years of Excellence"
                icon={<Clock />}
                description="We have more than 30 years of professional consultancy experience in diverse design projects, many of the projects were very complex, unique and one-off, in nature."
              />
            </div>
          </div>

          {/* Mission & Values */}
          <div>
            <div className="mb-8">
              <Badge variant="outline" className="mb-4">
                Our Purpose
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight mb-4">
                Mission & Values
              </h2>
              <p className="text-muted-foreground">
                The principles that guide our work and define our approach to
                architecture.
              </p>
            </div>

            <Tabs defaultValue="mission" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="mission">Mission</TabsTrigger>
                <TabsTrigger value="values">Values</TabsTrigger>
                <TabsTrigger value="commitment">Commitment</TabsTrigger>
              </TabsList>

              <TabsContent value="mission" className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Target className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          Our Mission
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          At ARKITEK REKAKONSULT SDN BHD our mission is to
                          always be creative, innovative and up to date in our
                          architectural designs and project management solutions
                          to meet our Clients aspirations and needs. We have
                          more than 30 years of professional consultancy
                          experience in diverse design projects, many of the
                          projects were very complex, unique and one-off, in
                          nature.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <CheckCircle className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          Professional Excellence
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          The many successfully completed and timely delivery of
                          the projects attest to our professional abilities in
                          architectural design and project management.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="values" className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          Design Excellence
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Our attention to design and details, our integrity and
                          pride in our work, have led us to earn the confidence
                          and respect of our Clients who have continually
                          entrusted us with their Projects.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          Client-Centered Approach
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          We believe in building lasting relationships with our
                          clients through transparent communication,
                          collaborative design processes, and delivering
                          solutions that exceed expectations.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="commitment" className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <CheckCircle className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          Professional Integrity
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          We strive to always perform our duties as architects,
                          with integrity, to deliver Architecture appropriate
                          for our Clients.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Building className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          Sustainable Design
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          We are committed to creating architecture that not
                          only meets current needs but also considers
                          environmental impact and future adaptability.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Projects Showcase */}
        <div className="mt-24 text-center">
          <Badge className="mb-4">Our Portfolio</Badge>
          <h2 className="text-3xl font-bold mb-8">Notable Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="aspect-video bg-muted/30 rounded-lg overflow-hidden relative"
                >
                  <Image
                    src="/placeholder.svg"
                    alt="Architectural project"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

function TimelineItem({ year, title, description, icon }: TimelineItemProps) {
  return (
    <div className="relative">
      <div className="absolute -left-10 p-1 bg-background border-2 border-primary/20 rounded-full">
        <div className="bg-primary/10 p-1.5 rounded-full text-primary">
          {icon}
        </div>
      </div>
      <div>
        <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
          {year}
        </span>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
