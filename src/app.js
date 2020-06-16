import React from 'react';
import ReactDOM from 'react-dom';
// import 'react-dates/initialize';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses'
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import LoadingPage from './components/LoadingPage';
import { firebase } from './firebase/firebase';
// const Layout = (props) => {
//     return (
//         <div>
//             <p>Header</p>
//             {props.children}
//             <p>Footer</p>
//         </div>
//     );
// }
const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas Bill', createdAt: 2000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));
// store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000)

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);


const jsx = (
    <Provider store={ store }>
        <AppRouter />
    </Provider>
);
let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});




// class OldSyntax {
//     constructor() {
//         this.name = "Mauaa";
//     }
// }

// const oldSyntax = new OldSyntax();
// console.log(oldSyntax);

// // ----------
// class NewSyntax {
//     name = "Mauaa";
// }

// const newSyntax = new NewSyntax();
// console.log(newSyntax);