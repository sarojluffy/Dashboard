type Props = {
  title: string;
};

const TitleComponent = ({ title }: Props) => {
  return (
    <div className="w-full bg-saroj">
      <div className="font-bold text-2xl  py-5 w-5/6 mx-auto ">{title}</div>
    </div>
  );
};

export default TitleComponent;
