import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui";
import Image from "next/image";

export default function OtherProjects() {
  return (
    <Accordion
      type="multiple"
      defaultValue={["item-1", "item-2", "item-3", "item-4"]}
      className="space-y-5"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Racing Circuit</AccordionTrigger>
        <AccordionContent className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <Image
            src={"/Featured/Other Taken Projects/Racing Circuit.jpg"}
            alt="Sepang F1 Circuit"
            layout="responsive"
            width={600}
            height={400}
          />
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">
              Sepang F1 Circuit - Pit Building
            </h2>

            <p>
              The Pit Building is designed to house the main facilities for the
              hosting of a Formula One racing event. It contains the pits and
              team rooms, the race control centre, the press conference room,
              the paddock clubs, and offices.
            </p>

            <h3 className="text-lg font-medium">Facilities Overview</h3>
            <p>
              The pits, located on the ground floor, are where all preparations
              are conducted, and where racing cars of the participating teams
              are housed. The first-floor paddock clubs serve as the gathering
              place for local and international social elites during the event.
            </p>

            <h3 className="text-lg font-medium">Design & Project Team</h3>
            <p>
              The concept design was created by Tilke Ingenieurs, while the
              detailed design and construction supervision was carried out by
              Reka Konsult, as part of the project management team led by Sepang
              F1 Circuit Main Consultants Iktisas Ingenieurs Sdn Bhd and Tilke
              Gmbh.
            </p>

            <div className="text-sm text-gray-500">
              <p>
                <strong>Completed:</strong> 1999
              </p>
              <p>
                <strong>Project Cost:</strong> RM 46.5 million
              </p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Government Facilites</AccordionTrigger>
        <AccordionContent className="flex justify-center items-center">
          <Image
            src={"/Featured/Other Taken Projects/Government_Facilities.png"}
            alt=""
            width={600}
            height={600}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Medical care facilities </AccordionTrigger>
        <AccordionContent className="flex justify-center items-center">
          <Image
            src={"/Featured/Other Taken Projects/medical care facilities.png"}
            alt=""
            width={600}
            height={600}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Mosque</AccordionTrigger>
        <AccordionContent className="grid lg:grid-cols-2 grid-cols-1">
          <div className="flex flex-col space-y-3 p-5">
            <h2 className="text-xl font-semibold text-center">
              MASJID KUALA KUBU & MASJID TAMAN SRI MELATI,SELAYANG
            </h2>
            <p>
              The mosque serves the community as a place of worship and
              community gathering, featuring a large prayer hall, meeting rooms,
              and facilities for ablution and educational programs.
            </p>
            <Image
              src={"/Featured/Other Taken Projects/MOSQUE.png"}
              alt=""
              width={600}
              height={600}
              className="mx-auto"
            />
          </div>
          <div className="flex flex-col space-y-3 p-5">
            <h2 className="text-xl font-semibold text-center">
              Cadangan Menaiktaraf Masjid Al’Amaniah, Daerah Gombak
            </h2>

            <Image
              src={"/Featured/Other Taken Projects/AL AMANIAH front.jpg"}
              alt=""
              width={600}
              height={600}
              className="mx-auto"
            />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
