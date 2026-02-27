type SizeType = "small" | "medium" | "large";
type ColorType = "primary" | "secondary";

interface TextProps {
  size: SizeType;
  color: ColorType;
  text: string;
  className?: string;
}

export const Text = (props: TextProps) => {
  const {size, color, text} = props;
  const defaultClass = "font-comfortaa"
  const classes = {
    sizes: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    },
    colors: {
      primary: {
        text: "text-black",
      },
      secondary: {
        text: "text-white",
      },
    },
  };

  return (
    <a 
        className={`${defaultClass} ${classes.sizes[size]} ${classes.colors[color]}`}>
    {text}
    </a>

  );

}    // <div
    //   className={`${defaultClass} ${classes.sizes[size]}`}
    // >
    //   <span className={classes.colors[color].text}>{title}</span>
    // </div>