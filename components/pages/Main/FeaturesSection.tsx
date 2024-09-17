// FeaturesSection.tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui";

export default function FeaturesSection() {
  return (
    <section id="features" className="px-4 lg:px-10 py-20">
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="text-3xl font-bold dark:text-white">What we do</div>
        <div className="grid gap-y-8 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 pt-8">
          <Card className="w-80">
            {/* <CardHeader className="flex flex-col items-center">
              <span className="text-5xl">💡</span>
              <CardTitle className="text-3xl">Our Mission</CardTitle>
              <CardDescription>Innovative Solutions</CardDescription>
            </CardHeader> */}
            <CardContent>
              <p className="text-justify">
                At ARKITEK REKAKONSULT SDN BHD our mission is to always be
                creative, innovative and up to date in our architectual designs
                and projects management solutions to meet our Clients
                aspirations and needs. We have more than 30 years of
                professional consultancy experience in diverse design projects,
                many of the projects were very complex, unique and one-off, in
                nature.
              </p>
            </CardContent>
            {/* <CardFooter>
              <p className="text-gray-400">Established in 2010</p>
            </CardFooter> */}
          </Card>

          <Card className="w-80">
            <CardHeader className="flex flex-col items-center">
              <span className="text-5xl">🏆</span>
              <CardTitle className="text-3xl">Our Experience</CardTitle>
              <CardDescription>Professional Consultancy</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-justify">
                The many successfully completed and timely delivery of the
                projects attest to our professional abilities in architectural
                design and project management.
              </p>
            </CardContent>
            <CardFooter>
              <p className="text-gray-400">30+ Years of Expertise</p>
            </CardFooter>
          </Card>

          <Card className="w-80">
            <CardHeader className="flex flex-col items-center">
              <span className="text-5xl">🛡️</span>
              <CardTitle className="text-3xl">Our Values</CardTitle>
              <CardDescription>Integrity & Excellence</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-justify">
                Our attention to design and details, out integrity and pride led
                us to earn the confidence and respect of our Clients who have
                continually entrusted us with their Projects.
              </p>
            </CardContent>
            <CardFooter>
              <p className="text-gray-400">Client Trust & Respect</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
