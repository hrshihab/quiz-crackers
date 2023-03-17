
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './Home/Home';
import Error from './Error/Error';
import Topics from './Topics/Topics';
import Quiz from './Quiz/Quiz';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/topics',
          element:<Topics></Topics>,
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          }
        },
        {
          path:'topics/quiz/:quizId',
          element:<Quiz></Quiz>,
          loader: async({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
        }

        
      ]
      
    }
  ]);
  return (
    <div className="App">
      
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
