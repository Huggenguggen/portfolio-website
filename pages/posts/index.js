// our-domain.com/posts
import Link from 'next/link';

function PostsPage() {
  return (
    <div>
      <h1>The Posts Page</h1>
      <ul>
        <li>
          <Link href='/posts/firstPost'>
            Test post 1
          </Link>
        </li>
        <li>
          <Link href='/posts/test2'>
            Test post 2
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default PostsPage;