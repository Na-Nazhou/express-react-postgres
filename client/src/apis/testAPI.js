import axios from "axios";

const fetchData = async () => {
  const result = await axios("/api/testAPI");
  return result;
};

export default fetchData;
