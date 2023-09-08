interface NavItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  content: string;
}

export const NavItem = ({ href, content, ...props }: NavItemProps) => {
  return (
    <a href={href}>
      <button
        className="mr-[42px] duration-300 hover:cursor-pointer hover:text-[#bfa15e]"
        {...props}
      >
        {content}
      </button>
    </a>
  );
};
