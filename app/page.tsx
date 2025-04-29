import FeaturedPosts from './components/FeaturedPosts';
import IntroSection from './components/IntroSection';

export default function Home() {
  return (
    <div className="flex flex-col px-4 py-8 md:px-10 md:py-16 min-h-screen ">
      <IntroSection />
      <FeaturedPosts />
    </div>
  );
}
