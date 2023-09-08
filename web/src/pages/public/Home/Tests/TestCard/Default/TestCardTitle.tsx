type TestCardTitleProps = {
  title: string;
};

export const TestCardTitle = ({ title }: TestCardTitleProps) => {
  return (
    <label className="font-headers text-4xl font-bold tracking-wide flex items-center">
      {title}
    </label>
  );
};
