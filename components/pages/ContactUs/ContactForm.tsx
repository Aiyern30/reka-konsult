"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./MapComponents"), { ssr: false });

const companyCoords = { lat: 3.07374, lon: 101.65811 };

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    enquiry: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_kgb3j15",
        "template_2vj3nql",
        formData,
        "deYKZbFxD1zzhjpFe"
      )
      .then(() => {
        alert("Email sent successfully!");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          enquiry: "",
        });
      })
      .catch(() => {
        alert("Failed to send email.");
      });
  };

  return (
    <>
      {/* <Card className="w-full max-w-lg mx-auto shadow-lg border border-gray-300 bg-white dark:bg-gray-800 hover:shadow-none hover:scale-100 transition-none">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit}>
              <div className="grid w-full gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstname">First Name</Label>
                    <Input
                      id="firstname"
                      placeholder="Your First Name"
                      className="w-full mt-1"
                      value={formData.firstname}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastname">Last Name</Label>
                    <Input
                      id="lastname"
                      placeholder="Your Last Name"
                      className="w-full mt-1"
                      value={formData.lastname}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="Your Email"
                    type="email"
                    className="w-full mt-1"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="enquiry">What can we help you with?</Label>
                  <Textarea
                    id="enquiry"
                    placeholder="Type your message here."
                    className="w-full h-32 resize-none mt-1"
                    value={formData.enquiry}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <CardFooter className="flex justify-end p-6">
                <Button className="px-8 py-3 text-lg" type="submit">
                  Submit
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card> */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <p className="text-lg text-center max-w-md">
            Need to get in touch with us? Fill out the form with your inquiry,
            and we'll get back to you as soon as possible.
          </p>
          <div className="flex flex-col space-y-1 text-center">
            <a
              href="tel:+60378741169"
              className="text-blue-500 hover:underline"
            >
              +603 7874 1169
            </a>
            <a
              href="tel:+60378737568"
              className="text-blue-500 hover:underline"
            >
              +603 7873 7568
            </a>
            <a
              href="mailto:rekakon@gmail.com"
              className="text-blue-500 hover:underline"
            >
              rekakon@gmail.com
            </a>
            <div className="text-blue-500 ">
              No. 151-2-6A, Mutiara Puchong Business Centre, Batu 6 1/2, Jalan
              Puchong, 58200 Kuala Lumpur.
            </div>
          </div>
        </div>
        <MapComponent lat={companyCoords.lat} lon={companyCoords.lon} />
      </div>
      {/* <div className="w-full h-80 mt-6">
        <MapComponent lat={companyCoords.lat} lon={companyCoords.lon} />
      </div> */}
    </>
  );
}
