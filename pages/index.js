// our-domain.com/
import Button from "../components/button";
import { useRouter } from 'next/router'; 

function HomePage() {
  const router = useRouter();

  const redirectContact = ()=> {
    router.push("/contact")
  }

  const redirectPosts = ()=> {
    router.push("/posts")
  }

  return (
    <section className="mt-16">
      <h1 className="text-7xl font-bold">Hi I'm <span className="dark:text-orange-700">Yu Heng</span></h1>
      <h3 className="text-4xl my-3">Currently a Y2 CS student at National University of Singapore (NUS)</h3>
      <div className="text-gray-600 mb-8 text-xl">
        I've just started my journey in Computer Science but I'm always eager to learn more. I made this website mostly to prove to myself that I have learnt something over the summer.
    This website was made using 
      <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
        <span className="text-orange-500 hover:text-orange-700 pl-1">Next.JS</span>
      </a> and 
      <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
        <span className="text-orange-500 hover:text-orange-700 pl-1">Tailwind CSS</span>
      </a>
      </div>
      <div className="text-gray-600 mb-8 text-xl">If you want to take a look at how it was made,  
        <a href="https://github.com/Huggenguggen/portfolio-website"
          className="underline text-gray-600 mb-8 text-xl hover:text-gray-700 pl-1"
          target="_blank" rel="noopener noreferrer">here's the link</a></div>

      <div className="text-gray-600 mb-8 text-xl">
        Currently I'm getting my feet wet in web development as well as Information Security. 
      </div>
      <div className="text-gray-600 mb-8 text-xl">
        My interests include taking 
        <span className="text-orange-500 pl-1"> long hikes</span>,
        <span className="text-orange-500 pl-1"> photography</span> and
        <span className="text-orange-500 pl-1">travel</span>
      </div>
      <div className="grid grid-cols-7 pb-10">
        <img src="landing_page_assets/UK_pic_2.jpeg" className="col-span-2 object-fill h-60 rounded-md ring-2 ring-blue-900"/>
        <img src="landing_page_assets/UK_pic.jpeg" className="col-span-2 object-fill h-60 rounded-md ring-2 ring-blue-900"/>
        <img src="landing_page_assets/DSC00762.JPG" className="col-span-3 object-contain h-60 rounded-md ring-2 ring-blue-900 mx-auto"/>
      </div>
      <div className="pb-10">
      </div>
      <div className="flex items-center justify-evenly">
      <Button 
      children={"Contact Me!"} 
      className={"bg-orange-400 dark:bg-orange-700 text-white px-6"}
      onClick={redirectContact}/>
      <Button 
      children={"Things I've done"} 
      className={"bg-orange-400 dark:bg-orange-700 text-white px-6"}
      onClick={redirectPosts}/>
      </div>
    </section>
  )
}

export default HomePage;