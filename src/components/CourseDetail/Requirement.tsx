const Requirement = ({ list }: { list: string[] }) => {
  return (
    <ul className="list-disc space-y-[1] pl-[19px]">
      {list?.map((el, i) => (
        <li key={i}>{el}</li>
      ))}
    </ul>
  );
};
export default Requirement;
