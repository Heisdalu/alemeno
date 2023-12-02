const Requirement = () => {
  const see = [
    "NO prior JavaScript knowledge is required",
    "Basic web development knowledge is recommended",
    "Basic understanding of HTML and CSS helps but is NOT required",
  ];
  return (
    <ul className="list-disc space-y-[1] pl-[19px]">
      {see.map((el, i) => (
        <li key={i}>{el}</li>
      ))}
    </ul>
  );
};
export default Requirement;
