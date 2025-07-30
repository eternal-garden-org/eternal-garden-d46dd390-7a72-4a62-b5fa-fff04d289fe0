import { PageLayout } from "@/components/page-layout";
import { Container } from "@/components/container";
import { MemorialHeader } from "@/components/memorial-header";
import { MemorialInfo } from "@/components/memorial-info";
import { MemorialBio } from "@/components/memorial-bio";
import { MemorialQuotes } from "@/components/memorial-quotes";
import { MemorialMedia } from "@/components/memorial-media";
import { MemorialPhotos } from "@/components/memorial-photos";
import { MemorialWords } from "@/components/memorial-words";
import { MemorialContacts } from "@/components/memorial-contacts";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <PageLayout backgroundImage="/images/background.png">
      <Container>
        <MemorialHeader
          fullName="Ваня Петров"
          birthDate="2006-05-02"
          deathDate="2025-07-15"
          photoUrl="https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/d46dd390-7a72-4a62-b5fa-fff04d289fe0/photo/1753892625154_l_i25vxr5z2_g-o9atgbp.webp"
          birthPlace="Место рождения"
          deathPlace="Место смерти"
        />
        <MemorialInfo />
        <MemorialBio />
      </Container>
      <MemorialQuotes />
      <Container>
        <MemorialMedia />
        <MemorialPhotos />
        <MemorialWords />
        <MemorialContacts />
      </Container>
      <Footer />
    </PageLayout>
  );
}