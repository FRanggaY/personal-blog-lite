interface ArticleSidebarProps extends React.ComponentProps<"div"> {}

const ArticleSidebar = ({ children, ...props }: ArticleSidebarProps) => {
  return (
    <div
      {...props}
      className={`
        w-full lg:w-sidebar lg:flex-shrink-0
        [&_h2]:text-white [&_h2]:bg-brand-blue-medium [&_h2]:pl-2 [&_h2]:text-xl
        md:[&_ul]:text-lg [&_ul]:list-none [&_ul]:px-2
        [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-blue-500 mb-5
      `}
    >
      { children }
    </div>
  )
}

export default ArticleSidebar;
