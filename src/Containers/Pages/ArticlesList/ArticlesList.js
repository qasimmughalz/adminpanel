import React from 'react';
import TopNav from '../../../Components/TopNav/TopNav';
import ArticlesData from './ArticlesData';

const ArticlesList = () => {
  return (
    <div className='w-full'>
      <TopNav title={'List Of Articles'} />
      <ArticlesData />
    </div>
  );
};

export default ArticlesList;
