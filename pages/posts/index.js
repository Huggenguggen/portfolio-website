// our-domain.com/posts
import Link from 'next/link';
import Tile from '../../components/tile';

function PostsPage() {
  const ez_mod_content = "A website to make module registration in NUS easier. Made using React and the NUSMods API."
  const seetf_content = "Participated in SEETF 2022, a cybersecurity Capture the Flag competition hosted by the Social Engineering Experts CTF team."
  
  const Posts = [
    { label: "EZMod", content: ez_mod_content, image: "post_assets/EZMod-site.png", link: "https://ez-mod.vercel.app/"},
    { label: "SEETF 2022", content: seetf_content , image: "post_assets/SEETF.png", link: "https://seetf.sg/seetf/"},
    { label: "Post3", content: 'Even More content!', image: "post_assets/EZMod.png"},
  ];
  
  return (
    <section className="mt-16">
      <h1 className="text-7xl font-bold"><span className="dark:text-orange-700">Things I've done</span></h1>
      <h3 className="text-4xl my-3 pb-10">It ain't much but it's honest work</h3>
      <header>
      <div class="grid grid-cols-2 gap-x-20 gap-y-52">
        {Posts.map((post) => (
          <div><Tile 
            title={post.label} 
            content={post.content} 
            image={post.image} 
            link={post.link}/></div>
        ))}
      </div>
      </header>
    </section>
  )
}

export default PostsPage;