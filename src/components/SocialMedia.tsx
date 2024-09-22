import { FaGithub, FaYoutube } from 'react-icons/fa';

const SocialMedia = () => {
  const socialMedias = [
    {
      id: 1,
      urlLink: "https://youtube.com/",
      spanName: "Youtube",
      element: <FaYoutube className="text-black dark:text-blue-100 dark:hover:text-white w-5 h-5" />
    },
    {
      id: 2,
      urlLink: "https://github.com/",
      spanName: "Github",
      element: <FaGithub className="text-black dark:text-blue-100 dark:hover:text-white w-5 h-5" />
    },
  ]

  return (
    <ul className="flex list-none gap-4 p-0">
      {
        socialMedias.map((item) => {
          return <li key={item.id}>
            <a href={item.urlLink}>
              <span className="sr-only">{item.spanName}</span>
              {item.element}
            </a>
          </li>
        })
      }
    </ul>
  )
}

export default SocialMedia;
