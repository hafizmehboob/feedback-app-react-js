import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './components/context/FeedbackContext';

function App(){
      
    //   const router = createBrowserRouter([
    //     {
    //       path: '/',
    //       element: (
    //         <>
    //         <Header text='Feedback UI' bgColor='#000' color='red' />
    //         <div className='container'>
    //             <FeedbackForm addFeedback={addFeedback} />
    //             <FeedbackStats feedback={feedback} />
    //             <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    //             </div>
    //         </>
    //       ),
    //     },
    //     {
    //       path: '/about',
    //       element: (
    //         <>
    //         <Header text='Feedback UI' bgColor='#000' color='red' />
    //         <div className='container'>
    //           <AboutPage />
    //         </div>
    //         </>
    //       )
    //     }
    //   ]);
    // return <RouterProvider router={router} />
    return(
      <FeedbackProvider>
      <Router>
         <Header text='Feedback UI' bgColor='#000' color='red' />
         <div className='container'>
           <Routes>
               <Route exact path='/' element={<>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList /> </>}
                />
                <Route path='/about' element={<AboutPage />} />
            </Routes>
          </div>
          <AboutIconLink />
      </Router>
      </FeedbackProvider>
    );
}

export default App;