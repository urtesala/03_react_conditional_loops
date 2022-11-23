const user1 = {
  name: 'James Blues',
  age: 40,
  gender: 'male',
  town: 'London',
};

function Condition() {
  const userIsAdmin = true;
  const isUserLoggedIn = false;

  const gendr = user1.gender === 'male' ? 'man' : 'woman';
  const condAge = user1.age >= 18 ? 'adult' : 'teenager';
  const continent = user1.town === 'London' ? 'Europe' : 'USA';
  return (
    <div>
      {/* {true ? <h2>Main title</h2> : <h2>Secondary title</h2>}
      {true && <h3>Subtitle</h3>} */}
      {userIsAdmin ? (
        <h2>Main title admin</h2>
      ) : (
        <h2>Secondary title not admin</h2>
      )}
      {userIsAdmin && <h3>Subtitle -- hello admin</h3>}

      {isUserLoggedIn ? <button>Login</button> : <button>Logout</button>}

      {/* <h3>{`${gendr} ${user1.name} is ${condAge} is from ${continent}`}</h3> */}
      <h3>
        {gendr} {user1.name} is {condAge} is from {continent}
      </h3>
    </div>
  );
}

export default Condition;
