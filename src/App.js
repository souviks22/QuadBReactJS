import { Routes, Route } from 'react-router-dom'
import Shows from './pages/Shows/Shows'
import Show from './pages/Show/Show'
import styles from './App.module.css'

const App = () => {
    return (<div className={styles.app}>
        <Routes>
            <Route path='/' element={<Shows />} />
            <Route path='/:id' element={<Show />} />
        </Routes>
    </div>)
}

export default App;
