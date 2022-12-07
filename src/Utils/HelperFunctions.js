import { toast } from 'react-toastify';
import Axios from '../Axios/Axios';
import { config } from './config';

export const getFaqs = async () => {
  try {
    const response = await Axios.get('/cms?filters=type:FAQ');
    return response.data;
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};

// Get Help Request Data
export const getHelpRequest = async () => {
  try {
    const response = await Axios.get('/support');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
// AddComment
export const AddComment = async (id, token) => {
  try {
    const response = await Axios({
      method: 'PUT',
      url: `support/${id}/add-comment`,
      headers: {
        authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};

// Add Blog Article
export const addBlog = async (data, token) => {
  try {
    const response = await Axios({
      method: 'POST',
      url: `/blogs`,
      data: {
        title: data.title,
        description: data.description,
      },
      headers: {
        authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};

// add faqs
export const addFaqs = async (data, token) => {
  try {
    const response = await Axios({
      method: 'POST',
      url: `/cms`,
      data: {
        title: data.title,
        body: data.body,
        type: 'FAQ',
        images: [{ file: data.file }],
      },
      headers: {
        authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};

// Get CallBacks Data

export const getCallBacksData = async (token) => {
  try {
    const response = await Axios({
      method: 'GET',
      url: `/callbackRequest`,

      headers: {
        authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};

// Get Reported Bugs Data
export const getReportedBugsData = async (token) => {
  try {
    const response = await Axios({
      method: 'GET',
      url: `/reportBugs`,

      headers: {
        authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};
