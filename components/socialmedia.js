function SocialMedia() {
  return (
    <div className="flex flex-col md:h-screen h-full bg-center bg-cover bg-no-repeat">
      <div className="grid place-items-center mx-auto md:p-20 p-3 bg-white drop-shadow-md rounded-3xl space-y-5">
        <img src="social_media/cardiod.PNG" className="md:h-52 h-40" alt="Profile Picture"/>
        <h1 className="md:text-5xl text-2xl font-semibold text-blue-500">@Huggenguggen</h1>
        <div className="flex items-center justify-center space-x-3">
          <a href="https://github.com/Huggenguggen" target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
            <img src="social_media/github-svgrepo-com.svg" alt="Github Link"/>            
            <span className="md:text-base text-xs">Github</span>
          </button>
          </a>
          <a href="https://www.linkedin.com/in/lee-yu-heng-189225109/" target="_blank" rel="noopener noreferrer">
          <button className="bg-cyan-400 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
            <img src="social_media/linkedin-svgrepo-com.svg" alt="Linkedin Link" className="h-8" />
            <span className="md:text-base text-xs">linkedin</span>
          </button>
          </a>
          <a href="mailto:yuheng.lee@u.nus.edu" target="_blank" rel="noopener noreferrer">
          <button className="bg-indigo-400 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
            <img src="social_media/email-svgrepo-com.svg" alt="Email Link" className="h-8" />
            <span className="md:text-base text-xs">Email</span>
          </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default SocialMedia;