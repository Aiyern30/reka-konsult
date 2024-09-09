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
            <CardHeader className="flex flex-col items-center">
              <span className="text-5xl">💡</span>
              <CardTitle className="text-3xl">Our Mission</CardTitle>
              <CardDescription>Innovative Solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-justify">
                We strive to be creative, innovative, and up-to-date in our
                architectural designs and project management solutions to meet
                our clients' aspirations and needs.
              </p>
            </CardContent>
            <CardFooter>
              <p className="text-gray-400">Established in 2010</p>
            </CardFooter>
          </Card>

          <Card className="w-80">
            <CardHeader className="flex flex-col items-center">
              <span className="text-5xl">🏆</span>
              <CardTitle className="text-3xl">Our Experience</CardTitle>
              <CardDescription>Professional Consultancy</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-justify">
                With over 30 years of experience, we have successfully completed
                diverse and complex design projects, ensuring timely delivery
                and client satisfaction.
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
                We pay attention to design details, uphold integrity in our
                work, and take pride in earning the confidence and respect of
                our clients.
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
