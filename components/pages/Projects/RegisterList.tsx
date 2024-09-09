import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Button,
} from "@/components/ui";

export default function ProjectsList() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full">
      <div className="grid gap-y-8 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 w-full">
        <Card className="w-full h-full">
          <CardHeader>
            <CardTitle>Registration with Lembaga Arkitek Malaysia</CardTitle>
            <Button
              onClick={() =>
                window.open("/2024_LAM ARKSB CERTIFICATE.pdf", "_blank")
              }
            >
              View in Full Screen
            </Button>
          </CardHeader>
          <CardContent className="w-full h-full">
            <iframe
              src="/2024_LAM ARKSB CERTIFICATE.pdf#zoom=100"
              width="100%"
              height="100%"
              className="border w-full h-[500px]"
            ></iframe>
          </CardContent>
        </Card>

        <Card className="w-full h-full">
          <CardHeader>
            <CardTitle>Registration with SSM</CardTitle>
            <Button
              onClick={() =>
                window.open(
                  "/Perakuan perbadanan syarikat sendirian_ARKSB.pdf",
                  "_blank"
                )
              }
            >
              View in Full Screen
            </Button>
          </CardHeader>
          <CardContent className="w-full h-full">
            <iframe
              src="/Perakuan perbadanan syarikat sendirian_ARKSB.pdf#zoom=100"
              width="100%"
              height="100%"
              className="border w-full h-[500px]"
            ></iframe>
          </CardContent>
        </Card>

        <Card className="w-full h-full">
          <CardHeader>
            <CardTitle>
              Registration with Kementerian Kewangan Malaysia
            </CardTitle>
            <Button
              onClick={() =>
                window.open("/MOF Cert_2022 to 2025.pdf", "_blank")
              }
            >
              View in Full Screen
            </Button>
          </CardHeader>
          <CardContent className="w-full h-full">
            <iframe
              src="/MOF Cert_2022 to 2025.pdf#zoom=100"
              width="100%"
              height="100%"
              className="border w-full h-[500px]"
            ></iframe>
          </CardContent>
        </Card>

        <Card className="w-full h-full">
          <CardHeader>
            <CardTitle>
              Registration with Jabatan Kastam DiRaja Malaysia
            </CardTitle>
            <Button
              onClick={() =>
                window.open("/KASTAM Approval Letter_SST.pdf", "_blank")
              }
            >
              View in Full Screen
            </Button>
          </CardHeader>

          <CardContent className="w-full h-full">
            <iframe
              src="/KASTAM Approval Letter_SST.pdf#zoom=100"
              width="100%"
              height="100%"
              className="border w-full h-[500px]"
            ></iframe>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
