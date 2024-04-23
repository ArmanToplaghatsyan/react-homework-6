import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IPost } from './types/types';
import { MyContext } from './context/MyContext';
import { ShowPosts } from './pages/ShowPosts';
import { AddPost } from './pages/AddPost';
import { Menu } from './component/Menu';



function App() {
  const categories = ['React', 'Native', "Node JS", "Python"]

  const [posts, setPosts] = useState<IPost[]>([
    { id: 1, title: 'title_1', body: 'Some body about this post', categories: ['Jango', "JS", "React"] },
    { id: 2, title: 'title_2', body: 'Some body about this post', categories: ['JAVA', "JS", "React"] },
    { id: 3, title: 'title_3', body: 'Some body about this post', categories: ['Native', "JS", "React"] },
    { id: 4, title: 'title_4', body: 'Some body about this post', categories: ['Jango', "JS", "React"] },
    { id: 5, title: 'title_5', body: 'Some body about this post', categories: ['JAVA', "Native", "React"] },
    { id: 6, title: 'title_6', body: 'Some body about this post', categories: ['Jango', "JS", "React"] },
    { id: 7, title: 'title_7', body: 'Some body about this post', categories: ['JAVA', "Jango", "Native"] },
    { id: 8, title: 'title_8', body: 'Some body about this post', categories: ['JAVA', "JS", "React"] },
    { id: 9, title: 'title_9', body: 'Some body about this post', categories: ['JAVA', "Native", "React"] },
    { id: 10, title: 'title_10', body: 'Some body about this post', categories: ['JAVA', "JS", "React"] },
    { id: 11, title: 'title_11', body: 'Some body about this post', categories: ['JAVA', "JS", "React"] },
    { id: 12, title: 'title_12', body: 'Some body about this post', categories: ['JAVA', "Native", "React"] },
    { id: 13, title: 'title_13', body: 'Some body about this post', categories: ['JAVA', "JS", "React"] },
    { id: 14, title: 'title_14', body: 'Some body about this post', categories: ['JAVA', "JS", "React"] },
    { id: 15, title: 'title_15', body: 'Some body about this post', categories: ['JAVA', "Native", "React"] },
    { id: 16, title: 'title_16', body: 'Some body about this post', categories: ['Python', "JS", "React"] },
    { id: 17, title: 'title_17', body: 'Some body about this post', categories: ['JAVA', "JS", "React"] },
    { id: 18, title: 'title_18', body: 'Some body about this post', categories: ['C', "Python", "C#"] },
    { id: 19, title: 'title_19', body: 'Some body about this post', categories: ['C++', "Php", "JAVA"] },
    { id: 20, title: 'title_20', body: 'Some body about this post', categories: ['Node JS', "Python", "React"] },
  ])

  const createNewPost = (data: IPost): void => {
    setPosts([...posts, data])
  }

  const deletePostById = (id: number): void => {
    setPosts([...posts.filter((elm) => elm.id != id)])
  }



  return (
    <div className="container">
      <MyContext.Provider value={{ posts, categories, deletePostById, createNewPost }}>
          <Menu />
          <Routes>
            <Route path='/' element={<ShowPosts />} />
            <Route path='/addpost' element={<AddPost />} />
          </Routes>

      </MyContext.Provider>
    </div>
  );
}

export default App;
