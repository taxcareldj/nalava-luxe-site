import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Profile = () => {
  return (
    <section id="profile" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Video Profil Kanwil DJP Jakarta Timur
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mengenal lebih dekat Kanwil Direktorat Jenderal Pajak Jakarta Timur
          </p>
        </div>

        <Card className="max-w-4xl mx-auto border-none shadow-xl overflow-hidden">
          <CardHeader>
            <CardTitle className="text-center">Profil Resmi</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://youtu.be/-W2D28yvGZY"
                title="Kanwil DJP Jakarta Timur menuju Wilayah Birokrasi Bersih dan Melayani (WBBM) Tahun 2023"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Profile;
