import FeaturedPosts from './components/FeaturedPosts';
import IntroSection from './components/IntroSection';

export default function Home() {
  return (
    <div className="flex flex-col px-10 py-16 min-h-screen ">
      <IntroSection />
      <FeaturedPosts />
    </div>
  );
}
