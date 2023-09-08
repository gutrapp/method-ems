type MethodTitleProps = {
  content: string;
};

export const MethodTitle = ({ content }: MethodTitleProps) => {
  return (
    <h1 className="text-white xl:text-4xl text-2xl font-semibold font-headers pt-[5px]">
      {content}
    </h1>
  );
};
