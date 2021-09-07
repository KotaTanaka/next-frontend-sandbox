interface Props {
  title: string;
}

/** ページ見出し */
const PageHeading: React.FC<Props> = (props) => {
  const { title } = props;

  return (
    <div className="my-16 text-center">
      <div className="text-2xl">{title}</div>
    </div>
  );
};

export default PageHeading;
