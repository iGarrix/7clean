// Imports
import axios, { CreateAxiosDefaults } from 'axios';
const https = require('https');

//AxiosAgent
const agent = new https.Agent({
  rejectUnauthorized: false,
});

//AxiosBaseurl
export const baseURL =
  process.env.NODE_ENV === 'development'
    ? process.env.NEXT_PUBLIC_TEST_API_URL
    : process.env.NEXT_PUBLIC_RELEASE_API_URL;

//Axiosoptions
const options: CreateAxiosDefaults = {
  httpsAgent: agent,
  baseURL: baseURL,
  headers: {
    'Content-type': 'application/json',
  },
  //withCredentials: true,
};

//AxiosInstances
const axiosUnAuth = axios.create(options);

//AxiosExportInstances
export { axiosUnAuth };
