interface ArticleContentProps extends React.ComponentProps<"div"> {}

const ArticleContent = ({ children, ...props }: ArticleContentProps) => {
  return (
    <div
      {...props}
      className={`
        lg:w-content-with-sidebar lg:pr-12 mb-12
        [&_h2]:text-white [&_h2]:bg-brand-blue-medium [&_h2]:pl-2 [&_h2]:text-xl [&_h2]:font-bold
        [&_p]:text-lg md:[&_p]:text-xl md:[&_p]:leading-8 [&_p]:px-2 [&_p]:my-3
      `}
    >
      { children }
    </div>
  )
}

export default ArticleContent;
