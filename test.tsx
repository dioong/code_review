export default function MemberCount() {
  const a_group = [1, 2, 3, 4, 5];
  const b_group = [6, 7, 8, 9, 10];
  const [countOfMember, setCountOfMember] = useState(0);

  useEffect(() => {
    const sum = a_group.length + b_group.length;
    setCountOfMember(sum);
  }, []);

  return <>{countOfMember}</>;
}
