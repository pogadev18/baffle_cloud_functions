Moralis.Cloud.define("getAllUsers", async (request) => {
  const query = new Moralis.Query("User");
  return await query.find({useMasterKey: true});
});