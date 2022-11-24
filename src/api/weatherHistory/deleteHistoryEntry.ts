import axios from 'axios';

const baseUrl = `${process.env.REACT_APP_BE_URL}`;

const deleteHistoryEntry = async (id: string) => {
  return axios.delete<string>(`${baseUrl}/history/${id}`, {
    params: {},
  });
};

export default deleteHistoryEntry;
