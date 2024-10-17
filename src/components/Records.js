import Record from "./OneRecord";

export const Records = (props) => {
  const { records, loading } = props;

  if (loading) {
    return <p>...loading</p>;
  }

  return (
    <div>
      {records?.map((record) => (
        <Record
          key={record?.id}
          time={record?.createdat}
          categoryId={record?.categoryid}
          money={record?.amount}
          description={record?.description}
          type={record?.type}
        />
      ))}
    </div>
  );
};
