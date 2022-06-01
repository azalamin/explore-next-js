import React from "react";

const index = ({ users }) => {
  console.log(users);
  return (
    <div>
      <h2>This is users main page</h2>
    </div>
  );
};

export default index;

export async function getServerSideProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { users: data }, // will be passed to the page component as props
  };
}
