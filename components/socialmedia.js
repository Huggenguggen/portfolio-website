function SocialMedia() {
  return (
    <div class="flex flex-col h-screen bg-center bg-cover bg-no-repeat">
      <div class="grid place-items-center mx-auto p-20 mt-10 bg-white drop-shadow-md rounded-3xl space-y-10">
        <img src="social_media/cardiod.PNG" className="h-52"/>
        <h1 class="text-5xl font-semibold text-blue-500">@Huggenguggen</h1>
        <div class="flex items-center justify-center space-x-3">
          <a href="https://github.com/Huggenguggen" target="_blank">
          <button class="bg-blue-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
            <img src="social_media/github-svgrepo-com.svg" />            
            <span>Github</span>
          </button>
          </a>
          <a href="https://www.linkedin.com/in/lee-yu-heng-189225109/" target="_blank">
          <button class="bg-cyan-400 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
            <img src="social_media/linkedin-svgrepo-com.svg" className="h-8" />
            <span>linkedin</span>
          </button>
          </a>
          <a href="mailto:yuheng.lee@u.nus.edu" target="_blank">
          <button class="bg-indigo-400 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
            <img src="social_media/email-svgrepo-com.svg" className="h-8" />
            <span>Email</span>
          </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default SocialMedia;