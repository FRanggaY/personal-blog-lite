import { FaGithub, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => {
  const socialMedias = [
    {
      id: 1,
      urlLink: process.env.NEXT_PUBLIC_YOUTUBE_URL,
      spanName: "Youtube",
      element: <FaYoutube className="text-black dark:text-blue-100 dark:hover:text-white w-5 h-5" />
    },
    {
      id: 2,
      urlLink: process.env.NEXT_PUBLIC_GITHUB_URL,
      spanName: "Github",
      element: <FaGithub className="text-black dark:text-blue-100 dark:hover:text-white w-5 h-5" />
    },
    {
      id: 3,
      urlLink: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
      spanName: "Instagram",
      element: <FaInstagram className="text-black dark:text-blue-100 dark:hover:text-white w-5 h-5" />
    },
    {
      id: 4,
      urlLink: process.env.NEXT_PUBLIC_LINKEDIN_URL,
      spanName: "Linkedin",
      element: <FaLinkedin className="text-black dark:text-blue-100 dark:hover:text-white w-5 h-5" />
    },
  ]

  return (
    <ul className="flex list-none gap-4 p-0">
      {
        socialMedias.map((item) => {
          if (item.urlLink) {
            return <li key={item.id}>
              <a href={item.urlLink}>
                <span className="sr-only">{item.spanName}</span>
                {item.element}
              </a>
            </li>
          }
        })
      }
    </ul>
  )
}

export default SocialMedia;
