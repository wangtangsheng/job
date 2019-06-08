import dva from 'dva';
import './index.css';
import router from './pages/index/index.js'


// 1. Initialize
const app = dva({
    // onError(e, dispatch) {
    //     console.log(e);
    // },
    // onAction: createLogger()
});

app.router(router);

// 5. Start
app.start('#root');
