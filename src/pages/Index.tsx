import Header from "@/components/Header";
import Home from "@/components/Home";
import Profile from "@/components/Profile";
import MediaSosial from "@/components/MediaSosial";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Home />
        <Profile />
        <MediaSosial />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
