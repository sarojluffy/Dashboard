type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  return (
    <header className="w-full bg-saroj border border-gray-700 shadow-lg">
      <div className="font-bold text-2xl  py-5 w-5/6 mx-auto ">{title}</div>
    </header>
  );
};

export default Header;
