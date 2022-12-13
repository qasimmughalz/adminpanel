import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import ArticleImg from '../../../Assets/img/article.png';
import { addBlog, handleBlogImage } from '../../../Utils/HelperFunctions';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Article = () => {
  const [article, setArticle] = useState({
    title: '',
    description: '',
  });
  const [file, setFile] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const token = useSelector((state) => state?.Auth.user.data.token);

  const handleChange = (e) => {
    setArticle((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async () => {
    if (
      article.title.trim === '' ||
      article.description.trim() === '' ||
      uploadedImage == null
    ) {
      toast.error('Please Fill Required Fields');
    } else {
      let formData = {
        title: article.title,
        description: article.description,
        image: uploadedImage,
      };
      let data = await addBlog(formData, token);
      console.log(data);
      setArticle({
        title: '',
        description: '',
      });
      setUploadedImage(null);
      toast.success(data.message);
    }
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };
  const handleUpload = async () => {
    if (file !== null) {
      let formData = new FormData();
      formData.append('file', file);
      let data = await handleBlogImage(formData, token);
      console.log(data);
      if (data) {
        setUploadedImage(data.url.slice(0, -1));
        setFile(null);
      }
    }
  };
  return (
    <div className='w-full lg:w-[483px] h-[359px] bg-white m-auto  rounded-[15px] p-4 responsive-inner-container'>
      <p className='text-base text-[#121212] font-g-bold p-4 line-height-[28px] md:text-[24px]'>
        Article
      </p>
      <div className='w-[162px] h-[98px] bg-[#F2F2F2] rounded-lg py-2 flex flex-col items-center justify-center'>
        <label
          htmlFor='file'
          className=' text-gray-500 cursor-pointer mb-2 flex items-center justify-center'
        >
          <img
            src={uploadedImage !== null ? uploadedImage : ArticleImg}
            className='w-[44.69px] h-[37.81px] flex items-center justify-center'
          />
        </label>
        <input
          type='file'
          name='file'
          id='file'
          onChange={handleFile}
          className='file-input w-full h-[35px] lg:w-[988px]  rounded-[5px]  font-g-medium text-base line-height-[19px] text-[#A2A2A2] mt-2 focus:outline-blue-500 responsive-container'
        />

        <button
          className={`w-[77px] h-[31px] bg-primary text-white rounded-[5px] mt-2 text-[15px] block mx-auto font-g-regular line-height-[18px] ${
            file !== null ? 'block' : 'hidden'
          }`}
          onClick={() => handleUpload()}
        >
          Upload
        </button>
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
