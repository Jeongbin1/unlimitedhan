import FeaturedPosts from './components/FeaturedPosts';
import IntroSection from './components/IntroSection';

export default function Home() {
  return (
    <div className="flex flex-col px-16 py-8 min-h-screen ">
      <IntroSection />
      <FeaturedPosts />
    </div>
  );
}
