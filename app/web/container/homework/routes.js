import Homework from './components/homework';
import Status from './components/status';
import Students from './components/students';
import Task from './components/task';
import Notice from './components/notice'
const NotFound = () => {
  return (
    <Route render={({ staticContext }) => {
      if (staticContext) {
        staticContext.status = 404;
      }
      return (
        <div>
          <h1>404 : Not Found</h1>
        </div>
      );
    }}/>
  );
};
const routes = [
  {
    path: '/class',
    component: Homework
  },
  // {
  //   path: '/class/status',
  //   component: Status
  // },
  {
    path: '/class/task',
    component: Task
  },
  {
    path: '/class/notice',
    component: Notice
  },
  {
    path: '/class/stu',
    component: Students
  },
  {
    path: '*',
    component: NotFound
  }
];

export default routes;
