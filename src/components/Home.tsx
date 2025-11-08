import { Card, CardContent } from "@/components/ui/card";
import { FileText, ClipboardCheck, MessageCircle, Globe, Phone } from "lucide-react";

const items = [
  {
    id: 1,
    title: "Tutorial Perpajakan",
    icon: FileText,
    href: "https://www.youtube.com/@DitjenPajakRI/playlists",
    description: "Panduan lengkap perpajakan untuk #KawanPajak",
    external: true, // opsional untuk logika tambahan
  },
  {
    id: 2,
    title: "Standar Pelayanan Kanwil DJP Jakarta Timur",
    icon: ClipboardCheck,
    description: "Informasi standar layanan terbaik kami",
  },
  {
    id: 3,
    title: "Konsultasi Via WhatsApp",
    icon: MessageCircle,
    description: "Hubungi kami langsung untuk konsultasi",
  },
  {
    id: 4,
    title: "Coretax DJP",
    icon: Globe,
    description: "Akses sistem Coretax DJP",
  },
  {
    id: 5,
    title: "Daftar Kontak KPP",
    icon: Phone,
    description: "Kontak lengkap Kantor Pelayanan Pajak",
  },
];

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary to-primary/90 pt-16">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            Selamat datang, <span className="text-accent">#KawanPajak</span>
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Silakan pilih menu sesuai kebutuhan perpajakan anda
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-4 md:gap-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.id}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-none"
              >
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};



export default Home() {
  return (
    <section className="bg-blue-600 text-white py-10 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-2">
          Selamat datang, <span className="text-yellow-400">#KawanPajak</span>
        </h1>
        <p className="text-blue-100 mb-8">
          Silakan pilih menu sesuai kebutuhan perpajakan anda
        </p>

        {/* Kartu / tombol Tutorial Perpajakan */}
        <a
          href="https://www.youtube.com/@DitjenPajakRI/playlists"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-white text-gray-900 rounded-2xl p-4 shadow hover:shadow-md transition max-w-md mx-auto"
        >
          <FileText className="text-blue-600 w-8 h-8" />
          <div className="text-left">
            <h3 className="text-lg font-semibold">Tutorial Perpajakan</h3>
            <p className="text-sm text-gray-500">
              Panduan lengkap perpajakan untuk #KawanPajak
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}

