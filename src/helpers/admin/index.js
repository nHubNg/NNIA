import axios from 'axios';
import Cookies from "js-cookie";

// const cookie = Cookies.get('status')
// console.log(cookie)
const url = `https://nnia.onrender.com`;

export async function signIn (email, password) {
    const header = {
        "Content-Type": "application/json",
      };
      const payload = {
          email: email,
          password: password,
      };
      const result = await axios.post(
        `${url}/admin/login`,
        JSON.stringify(payload),
        { headers: header }
      );
      console.log(result)
      if (result.status === 200 || result.status === 201){
        return result
      } else {
        return result
      }
}

export async function getAllIntern(item, value) {
      const header = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("status")}`,
      };
      const payload = {
        filters: { [item] : value.toString() },
      };
  const result = await axios.post(
    `${url}/admin/internship/get-applications`,
    JSON.stringify(payload),
    {
      headers: header,
    }
  );
   if (result.error !== null) {
     return result;
   } else {
     console.log(result);
   }
}


