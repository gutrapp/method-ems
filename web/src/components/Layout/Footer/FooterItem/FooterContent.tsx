type FooterItemContentProps = {
  content: string;
};

export const FooterItemContent = ({ content }: FooterItemContentProps) => {
  return <h1>{content}</h1>;
};
