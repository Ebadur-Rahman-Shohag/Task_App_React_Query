import axios from "axios";
import SingleItem from "./SingleItem";
import { useMutation, useQuery } from "@tanstack/react-query";
import customFetch from "./utils";
const Items = ({ items }) => {
  // const result = useQuery({
  //   queryKey: ["tasks"],
  //   queryFn: () => customFetch.get("/"),
  // });
  // console.log(result);

  //***Get All The Tasks
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => customFetch.get("/"),
  });

  //Error Handling
  if (isLoading) {
    return <p style={{ marginTop: "1rem" }}>Loading....</p>;
  }

  // if (error) {
  //   return <p style={{ marginTop: '1rem ' }}>{error.message}</p>;
  // }

  if (isError) {
    return <p style={{ marginTop: "1rem" }}>There was an error....</p>;
  }


  return (
    <div className="items">
      {data.data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
