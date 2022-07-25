// our-domain.com/
import Button from "../components/button";
import { useRouter } from 'next/router'; 

function HomePage() {

  const router = useRouter();

  const redirectContact = ()=> {
    router.push("/contact")
  }

  return (
    <section className="mt-16">
      <h1 className="text-7xl font-bold">Hi I'm <span className="dark:text-orange-700">Yu Heng</span></h1>
      <h3 className="text-4xl my-3">Currently a Y2 CS student at National University of Singapore (NUS)</h3>
      <p className="text-gray-700 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <Button 
      children={"Contact Me!"} 
      className={"bg-orange-400 dark:bg-orange-700 text-white px-6"}
      onClick={redirectContact}/>
    </section>
  )
}

export default HomePage;