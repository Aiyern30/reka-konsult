import { Card } from "@/components/ui";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const CorporatePage = () => {
  return (
    <div
      className={cn(
        "bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg",
        "p-4 m-4"
      )}
    >
      {[
        {
          imgSrc: "/Corporate_Information/SSM.jpeg",
          title: "REGISTRAR OF COMPANY (SSM)",
          date: "17th June 2010",
          regNo: "Registration No: 904797-A (201001021027)",
          additional: "(Previously known as Reka Konsult since 1990)",
        },
        {
          imgSrc: "/Corporate_Information/MOF.jpeg",
          title: "MINISTRY OF FINANCE (MOF)",
          certNo: "No Sijil: J260390122002344619",
          regNo: "No Pendaftaran: 465-02032430",
          validity: "Tempoh sah laku: 31/10/2022 - 13/11/2025",
        },
        {
          imgSrc: "/Corporate_Information/JKDM2.jpeg",
          title: "JABATAN KASTAM DIRAJA MALAYSIA",
          sstNo: "SST No: B16-1808-31037820",
        },
        {
          imgSrc: "/Corporate_Information/LAM.png",
          title: "LEMBAGA ARKITEK MALAYSIA (LAM)",
          certNo: "No Perakuan: 149/2024",
          regNo: "Registration No: BC/A 127",
        },
        {
          imgSrc: "/Corporate_Information/ACAM.jpg",
          title: "ASSOCIATION OF CONSULTING ARCHITECTURES MALAYSIA",
          certNo: "Corporate Member: C53",
        },
      ].map((item, index) => (
        <Card
          key={index}
          className="flex flex-col md:flex-row items-center space-y-4 md:space-x-4 md:space-y-0 mb-4 p-5 border border-gray-300 bg-white dark:bg-gray-800 hover:shadow-none hover:scale-100 transition-none"
        >
          <Image
            src={item.imgSrc}
            alt={item.title}
            width={item.title === "LEMBAGA ARKITEK MALAYSIA (LAM)" ? 100 : 150}
            height={item.title === "LEMBAGA ARKITEK MALAYSIA (LAM)" ? 100 : 150}
            className="flex-shrink-0"
          />
          <div className="flex flex-col justify-center w-full md:w-auto">
            <div className="font-bold">{item.title}</div>
            {item.date && <div>{item.date}</div>}
            {item.sstNo && <div>{item.sstNo}</div>}
            {item.regNo && <div>{item.regNo}</div>}
            {item.certNo && <div>{item.certNo}</div>}
            {item.validity && <div>{item.validity}</div>}
            {item.additional && <div>{item.additional}</div>}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CorporatePage;
