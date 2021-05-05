import client from "./client";

export const getChoreList = async () => {
  const response = await client.get("/api/v1/");
  return response;
};
