import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

function UpdateProfile() {
  const { user, updateUser } = useContext(AuthContext);

  const handleUpdateUser = (name, photoURL) => {
    updateUser(name, photoURL)
      .then((result) => console.log(name))
      .catch((error) => console.log(error));
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value || user.displayName;
    const photoURL = e.target.photo.value || user.photoURL;
    console.log(displayName, photoURL);
    handleUpdateUser(displayName, photoURL);
  };
  return (
    <div className="mt-12 lg:w-1/2 mx-auto">
      <p className="text-center mb-8 text-4xl font-semibold font-mon">
        My Profille
      </p>
      <form onSubmit={(e) => handleUpdateProfile(e)}>
        <div className="bg-cozy-green p-4 rounded-3xl">
          <div className="form-control">
            <label className="text-white">Email</label>
            <input
              type="email"
              className="w-full bg-white rounded-lg p-2 mt-2"
              placeholder={user.email}
              disabled
            />
          </div>
          <div className="form-control mt-4">
            <label className="text-white">Name</label>
            <input
              type="text"
              name="name"
              className="w-full bg-white rounded-lg p-2 mt-2"
              placeholder={user.displayName}
            />
          </div>
          <div className="form-control mt-4">
            <label className="text-white">PhotoURL</label>
            <input
              type="text"
              name="photo"
              className="w-full bg-white rounded-lg p-2 mt-2"
              placeholder={user.photoURL}
            />
          </div>
          <div className="text-center mt-4">
            <button className="bg-white font-semibold px-4 py-2 rounded-lg">
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UpdateProfile;
