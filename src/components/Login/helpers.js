import firebase from 'firebase/app';
import { postData } from '../../services/api';

const choose = {
  Register: postData('https://girl-poly.herokuapp.com/users/sign-up', {
    answer: 42,
  }).then((data) => {
    console.log(data);
  }),
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
