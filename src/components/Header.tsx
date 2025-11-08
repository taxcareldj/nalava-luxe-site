import { FileText, BookOpen, MessageCircle, Database, Phone } from "lucide-react";

const items = [
  {
    id: 1,
    title: "Tutorial Perpajakan",
    icon: FileText,
    href: "https://www.youtube.com/@DitjenPajakRI/playlists",
    description: "Panduan lengkap perpajakan untuk #KawanPajak",
  },
  {
    id: 2,
    title: "Standar Pelayanan Kanwil DJP Jakarta Timur",
    icon: BookOpen,
    href: "https://drive.google.com", // ganti dengan link drive kamu
    description: "Lihat standar pelayanan resmi Kanwil DJP Jakarta Timur",
  },
  {
    id: 3,
    title: "Konsultasi Via WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/6281234567890", // ganti nomor WA resmi
    description: "Hubungi petugas pajak langsung melalui WhatsApp",
  },
  {
    id: 4,
    title: "Coretax DJP",
    icon: Database,
    href: "https://coretaxdjp.pajak.go.id",
    description: "Akses sistem Coretax DJP untuk layanan digital pajak",
  },
  {
    id: 5,
    title: "Daftar Kontak KPP",
    icon: Phone,
    href: "https://www.pajak.go.id/id/unit-kerja/kanwil-djp-jakarta-timur",
    description: "Temukan kontak dan alamat seluruh KPP di Jakarta Timur",
  },
];

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-10 text-center">Selamat datang, #KawanPajak 👋</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {items.map(({ id, title, icon: Icon, href, description }) => (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group border rounded-2xl p-6 bg-card hover:bg-accent/10 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col items-center text-center"
          >
            <Icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Home;
