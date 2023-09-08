type TestCardTitleProps = {
  title: string;
};

export const TestCardTitle = ({ title }: TestCardTitleProps) => {
  return (
    <label className="font-headers text-sm font-bold tracking-wide flex items-center">
      {title}
    </label>
  );
};
