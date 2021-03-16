import firebase from 'firebase/app';

const choose = {
  Register: function register(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  },
  Login: function login(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },
};

const sendData = (args) => {
  const { windowChoose, setError, email, password, history } = args;

  return (e) => {
    e.preventDefault();
    choose[windowChoose](email, password)
      .then(() => {
        history.push('/Menu');
      })
      .catch((e) => {
        setError(e.message);
        setTimeout(() => {
          setError('');
        }, 4000);
      });
  };
};

export { sendData };
