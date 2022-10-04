const axios = require("axios");
export async function onRequest(context) {

  const res = await axios.get(
    "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bd014528-0154-4322-be1d-f81ddc5d45c0/d6cf05a1-229e-45b2-9acb-bb946d2df2df.jpg",
    {
      responseType: "arraybuffer",
    }
  );
  return new Response(res.data);
}