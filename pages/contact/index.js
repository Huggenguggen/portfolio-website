import SocialMedia from "../../components/socialmedia";

function Contact() {
  return ( 
    <section className="mt-16">
      <h1 className="md:text-7xl text-5xl font-bold"><span className="dark:text-orange-700">Here are my Contacts</span></h1>
      <h3 className="md:text-4xl text-2xl my-3">Just don't spam them</h3>
      <SocialMedia />
    </section>
  )
}

export default Contact;