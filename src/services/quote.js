import axios from "axios";
const baseUrl = "https://api.quotable.io";

const getRandom = async (tag) => {
  const response = tag === "Choose a tag" ? await axios.get(`${baseUrl}/random`) : await axios.get(`${baseUrl}/random?tags=${tag}`);
  return response.data;
};

const getTags = async () => {
    const response = await axios.get(`${baseUrl}/tags`);
    return response.data;
}

export default { getRandom, getTags };
