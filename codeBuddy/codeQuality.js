// Code Quality Level-2
const getUsers = async () => {
  let doc = await Promise.all(getUser(), getProfile(), getPosts());
  const userProfile = {
    user: doc[0],
    profile: doc[1],
    points: doc[2],
  };
  return userProfile;
};
