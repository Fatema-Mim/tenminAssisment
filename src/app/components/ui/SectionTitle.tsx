type Props = {
  children: any;
};

export default function SectionTitle({ children }: Props) {
  return (
    <h2 className="text-xl font-semibold leading-[30px] text-black pb-3">
      {children}
    </h2>
  );
}
