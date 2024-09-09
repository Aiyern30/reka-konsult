// ServicesSection.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui";
import {
  BuildingOffice2Icon,
  ClipboardDocumentCheckIcon,
  MapIcon,
  PaintBrushIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="px-4 lg:px-10 py-20 bg-zinc-100 dark:bg-zinc-800"
    >
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="text-3xl font-bold dark:text-white">Our Services</div>
        <div className="grid gap-y-8 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 pt-8">
          <Card className="w-80">
            <CardHeader className="flex flex-col items-center">
              <BuildingOffice2Icon className="w-12 h-12 text-blue-500 mb-2" />
              <CardTitle className="text-2xl">Architectural Design</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-justify">
                We offer tailored architectural design solutions for
                residential, commercial, and public projects, balancing
                aesthetics and functionality.
              </p>
            </CardContent>
          </Card>

          <Card className="w-80">
            <CardHeader className="flex flex-col items-center">
              <ClipboardDocumentCheckIcon className="w-12 h-12 text-green-500 mb-2" />
              <CardTitle className="text-2xl">Project Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-justify">
                Our experienced project managers ensure smooth execution from
                conception to completion, keeping projects on time and within
                budget.
              </p>
            </CardContent>
          </Card>

          <Card className="w-80">
            <CardHeader className="flex flex-col items-center">
              <MapIcon className="w-12 h-12 text-red-500 mb-2" />
              <CardTitle className="text-2xl">Urban Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-justify">
                We specialize in innovative urban planning, providing
                sustainable solutions to enhance the functionality and
                livability of urban spaces.
              </p>
            </CardContent>
          </Card>

          <Card className="w-80">
            <CardHeader className="flex flex-col items-center">
              <PaintBrushIcon className="w-12 h-12 text-purple-500 mb-2" />
              <CardTitle className="text-2xl">Interior Design</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-justify">
                Our interior design team creates bespoke environments that
                reflect your unique style, seamlessly blending comfort with
                creativity.
              </p>
            </CardContent>
          </Card>

          <Card className="w-80">
            <CardHeader className="flex flex-col items-center">
              <LightBulbIcon className="w-12 h-12 text-yellow-500 mb-2" />
              <CardTitle className="text-2xl">Consultancy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-justify">
                We provide expert consultancy on architectural trends,
                regulations, and best practices to help you make informed
                decisions for your projects.
              </p>
            </CardContent>
          </Card>

          <Card className="w-80">
            <CardHeader className="flex flex-col items-center">
              <WrenchScrewdriverIcon className="w-12 h-12 text-orange-500 mb-2" />
              <CardTitle className="text-2xl">Renovations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-justify">
                We handle renovations and refurbishments with care, ensuring
                that your existing spaces are updated to meet modern standards
                and aesthetics.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
