import React, { useEffect, useState } from 'react';
import { Redirect, Route, RouteProps, Switch, withRouter } from 'react-router-dom';
import './App.scss';
import Item from './components/Item/Item';
import Sidebar from './components/Sidebar/Sidebar';
import Projects from './containers/Projects/Projects';
import SingleProject from './containers/SingleProject/SingleProject';
import { db, getProjectById, login } from './data';
import { ICustomObject, IUser } from './models';

function App({ location }: RouteProps) {
  const [myself, setMyself] = useState<IUser>();
  const [projects, setProjects] = useState<ICustomObject[]>([]);

  const getProjects = () => {
    const { pathname } = location!;
    let displayProjects: ICustomObject[] = db;
    if (pathname.indexOf('favorites') >= 0) {
      // Find the favorite files of the user
      displayProjects = myself!.favorites.map((p: number): ICustomObject => getProjectById(p));
    } else if (pathname.indexOf('shared-with-me') >= 0) {
      // Find the files other users have shared with me
      displayProjects = myself!.sharedWithMe.map((p: number): ICustomObject => getProjectById(p));
    // } else if (pathname.indexOf('my-projects') >= 0) {
    } else {
      // Find my own projects
      displayProjects = db.filter((f) => f.owner === myself!.id);
    }
    console.log({ displayProjects });
    setProjects([...displayProjects]);
  }

  useEffect(() => {
    const foundUser = login();
    setMyself(foundUser);
  }, []);

  useEffect(() => {
    if (myself) getProjects();
  }, [location,myself]);

  if (!myself) return <p>Loading...</p>;
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <Switch>
          <Route path='/project/:project_id' render={() => <SingleProject />} />
          <Route path='/projects' render={() => <Projects projects={projects} />} />
          <Redirect to='projects/my-projects' />
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);
