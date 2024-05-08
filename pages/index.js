import { revalidatePath } from "next/cache";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";

export default function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>Haidra's Blog</title>
        <meta
          name="description"
          content="I post about programming and we development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

// 1) Hero
// 2) Featured Posts

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: { posts: featuredPosts },
  };
}
