import Header from '@/components/header'
import Footer from '@/components/footer'
import ProjectGrid from '@/components/project-grid'
import ScrollButtons from '@/components/scroll-buttons'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <ProjectGrid />
      </main>
      <Footer />
      <ScrollButtons />
    </div>
  )
}

