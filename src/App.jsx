import { Header } from './components/Header';
import { Post } from "./Post";
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';

import './global.css'

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Beatriz Brito"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

          />
          <Post 
            author="Gabriel Buzzi"
            content="Um novo post muito legal"
          />
        </main>
      </div>

    </div>
    )
}

export default App