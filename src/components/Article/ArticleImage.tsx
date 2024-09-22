import Image from 'next/image';

interface ArticleImageProps extends React.ComponentProps<'div'> {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const ArticleImage = ({ src, alt, width, height, ...props }: ArticleImageProps) => {
  return (
    <div
      {...props}
      className="lg:w-content-with-sidebar lg:pr-12 mt-5"
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover"
      />
    </div>
  );
};

export default ArticleImage;
