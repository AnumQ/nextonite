import "../app/globals.css";
import posts from "./posts.json";
interface Post {
  id: string;
  title: string;
}

const Blog = ({ posts }: { posts: Post[] }) => {
  return (
    <div>
      <main className="bg-gray-200 h-screen space-y-8 flex flex-col justify-content items-center">
        <h1 className="mt-10">Blog</h1>
        <ul className="space-y-8">
          {posts.map((post) => (
            <>
              <li key={post.id} className="mx-10">
                {post.title}
              </li>
              <div className="mx-10 bg-slate-500 h-[1px] flex flex-col justify-content items-center"></div>
            </>
          ))}
        </ul>
      </main>
    </div>
  );
};

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  // const res = await fetch("http://localhost:3000/posts");
  // const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default Blog;
