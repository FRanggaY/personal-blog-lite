interface MainProps extends React.ComponentProps<"main"> {}

const Main = ({ children, ...rest }: MainProps) => {
  return (
    <main {...rest}>
      { children }
    </main>
  )
}

export default Main;
