import React from 'react';
import { Link } from 'react-router-dom';

// const links = [{ path: '/Home', title: 'Home' }, { path: '/About', title: 'About' }]

class NavBar extends React.Component {

  // state = {
  //   links: [
  //     { path: '/', title: 'Home' },
  //     { path: '/posts/new', title: 'Add post' },
  //     { path: '/posts', title: 'Posts' },
  //     { path: '/contact', title: 'Contact' },
  //   ],
  // }
    
  // render() {
  //   const { links } = this.state;

  //   return (
  //     <nav>
  //       <Logo />
  //       <MainMenu links={links} />
  //     </nav>
  //   );
  // }

  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <Link to='/posts'>Posts</Link>
        <Link to='/posts/new'>Add Post</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    );
  }

}

export default NavBar;