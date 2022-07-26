function Tile({title, content, image , link, className }) {
  return (
    <div
      className={`p-8 hover:ring-gray-300
      rounded-md hover:ring-4 ring-gray-400 dark:ring-orange-700  h-100 w-30 ${className}`}>
      <img src={image} className="rounded-md object-fit h-70 w-50" />
      <h3 className="font-semibold text-gray-400 text-2xl">{title}</h3>
      <p className="font-semibold text-gray-400 text-lg">{content}</p>
      <a className="font-light underline text-2xl text-gray-400 hover:text-gray-500" 
          href={link} 
          target="_blank">Link</a>
    </div>
  )
}

export default Tile;