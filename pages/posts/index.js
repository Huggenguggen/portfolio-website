// our-domain.com/posts
import Link from 'next/link';

function PostsPage() {
  const Posts = [
    { label: "Post1", path: '/posts/firstPost'},
    { label: "Post2", path: '/posts/secondPost'},
  ];
  
  return (
    <section className="mt-16">
      <h1 className="text-7xl font-bold"><span className="dark:text-orange-700">Things I've done</span></h1>
      <h3 className="text-4xl my-3">It ain't much but it's honest work</h3>
      <header className="h-16 flex items-center pt-20">
        <ul className="flex gap-4">
          {Posts.map(post => (
            <Link href={post.path}>
              <a className="font-semibold text-gray-400 hover:text-gray-500 text-2xl">{post.label}</a>
            </Link>
          ))}
        </ul>
      </header>
    </section>
  )
}

export default PostsPage;