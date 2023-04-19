import "../app/globals.css";

interface Post {
  id: string;
  title: string;
}

const Blog = ({ posts }: { posts: Post[] }) => {
  return (
    <div>
      <main className="bg-yellow-100 h-screen space-y-8 flex flex-col justify-content items-center">
        <h1 className="">Blog</h1>
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

  const posts = [
    {
      id: "1",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "2",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus nec feugiat in fermentum posuere urna. Tempor orci dapibus ultrices in iaculis. Aliquet lectus proin nibh nisl. Nunc sed velit dignissim sodales ut eu sem.",
    },
  ];

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default Blog;
