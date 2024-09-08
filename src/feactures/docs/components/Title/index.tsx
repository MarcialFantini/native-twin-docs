export const Title = ({ children, id }: { children: string; id?: string }) => {
  return (
    <h2 id={id} className="text-[36px] font-bold">
      {children}
    </h2>
  );
};
