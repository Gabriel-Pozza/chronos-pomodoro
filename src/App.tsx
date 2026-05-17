import { TaskContextProvider } from './contexts/TaskContext/taskContextProvider';
import { MessagesContainer } from './components/MessagesContainer';
import './styles/theme.css';
import './styles/Global.css';
import { MainRouter } from './routers/MainRouter';

export function App() {
  return (
    <>
      <TaskContextProvider>
        <MessagesContainer>
        <MainRouter />
        </MessagesContainer>
      </TaskContextProvider>
    </>
  );
}
