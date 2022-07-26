// our-domain.com/posts
import Link from 'next/link';
import Tile from '../../components/tile';

function PostsPage() {
  const ez_mod_content = "A website to make module registration in NUS easier. Made using React and the NUSMods API."
  const seetf_content = "Participated in SEETF 2022, a cybersecurity Capture the Flag competition hosted by the Social Engineering Experts CTF team."
  const shopee_content = "Participated in Shopee Code League 2022, a competitive coding event hosted by Shopee."

  const Posts = [
    { label: "EZMod", content: ez_mod_content, image: "post_assets/EZMod-site.PNG", link: "https://ez-mod.vercel.app/"},
    { label: "SEETF 2022", content: seetf_content , image: "post_assets/SEETF.png", link: "https://github.com/sl33pingmathrapt0r/SEETF-2022"},
    { label: "Shopee Code League 2022", content: shopee_content, image: "post_assets/shopeecodeleague.jpg", link: "https://careers.shopee.sg/codeleague/"},
  ];
  
  return (
    <section className="mt-16">
      <h1 className="text-7xl font-bold"><span className="dark:text-orange-700">Things I've done</span></h1>
      <h3 className="text-4xl my-3 pb-10">It ain't much but it's honest work</h3>
      <header>
      <div className="grid grid-cols-2 gap-x-20 gap-y-40">
        {Posts.map((post) => (
          <div key={post.label}><Tile 
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