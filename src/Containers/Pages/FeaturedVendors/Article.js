import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import ArticleImg from '../../../Assets/img/article.png';
import { addBlog } from '../../../Utils/HelperFunctions';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Article = () => {
  const [article, setArticle] = useState({
    title: '',
    description: '',
  });
  const [focus, setFocus] = useState(false);
  const token = useSelector((state) => state?.Auth.user.data.token);

  const handleChange = (e) => {
    setArticle((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async () => {
    if (article.title.trim === '' || article.description.trim() === '') {
      toast.error('Please Fill Required Fields');
    } else {
      let data = await addBlog(article, token);
      console.log(data);
      setArticle({
        title: '',
        description: '',
      });
      toast.success(data.message);
    }
  };
  return (
    <div className='w-full lg:w-[483px] h-[359px] bg-white m-auto  rounded-[15px] p-4 responsive-inner-container'>
      <p className='text-base text-[#121212] font-g-bold p-4 line-height-[28px] md:text-[24px]'>
        Article
      </p>
      <div className='w-[162px] h-[98px] bg-[#F2F2F2] rounded-lg flex items-center justify-center'>
        <img src={ArticleImg} className='w-[44.69px] h-[37.81px] ' />
      </div>
      <input
        type={'text'}
        name='title'
        id='title'
        value={article.title}
        onChange={handleChange}
        placeholder='Text'
        className='w-full h-[32px] lg:w-[432px] border border-[#A2A2A2] rounded-[5px] px-4 font-g-medium text-base line-height-[19px] text-[#A2A2A2] mt-2 focus:outline-blue-500 responsive-container'
      />
      <input
        type={'text'}
        name='description'
        id='description'
        value={article.description}
        onChange={handleChange}
        placeholder='Description'
        className='w-full h-[89px] lg:w-[432px] border border-[#A2A2A2] rounded-[5px] px-4 font-g-medium text-base line-height-[19px] text-[#A2A2A2] mt-2 focus:outline-blue-500 responsive-container'
      />

      <button
        className='w-[77px] h-[31px] bg-primary text-white rounded-[5px] mt-2 text-[15px] font-g-regular line-height-[18px]'
        onClick={() => handleSubmit()}
      >
        Submit
      </button>
    </div>
  );
};

export default Article;
