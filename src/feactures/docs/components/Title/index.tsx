export const Title = ({ children, id }: { children: string; id?: string }) => {
  return (
    <h2 style={{ color: ' rgb(188,44,231) ' }} id={id} className='text-[36px] font-bold'>
      {children}
    </h2>
  );
};
