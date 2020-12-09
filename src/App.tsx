import React, { useEffect, useState } from 'react';
import { Link, Redirect, Route, RouteProps, Switch, withRouter } from 'react-router-dom';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Projects from './containers/Projects/Projects';
import SingleProject from './containers/SingleProject/SingleProject';
import { db, getProjectById, login } from './data';
import { ICustomObject, IUser } from './models';
import useScreenSize from './hooks/screen-size';
import AddButton from './components/AddButton/AddButton';

function App({ location }: RouteProps) {
  const [myself, setMyself] = useState<IUser>();
  const [projects, setProjects] = useState<ICustomObject[]>([]);
  const { isMobile } = useScreenSize();

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
    setProjects([...displayProjects]);
  }

  useEffect(() => {
    const foundUser = login();
    setMyself(foundUser);
  }, []);

  useEffect(() => {
    if (myself) getProjects();
  }, [location, myself]);

  if (!myself) return <p>Loading...</p>;
  return (
    <div className="App">
      <Sidebar avatar={myself.avatar} name={myself.name} />
      <AddButton />
      <div className="content">
        {isMobile && (
          <Link to='/projects'>
            <h1 className='mobile-title'>Ellipsis</h1>
          </Link>
        )}
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
