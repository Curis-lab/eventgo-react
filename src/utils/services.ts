export const baseUrl = "http://localhost:3000/api";

export const postRequest = async (url: string, body: Record<string, unknown>) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  if(!response.ok){
    let msg;
    if(data?.message){
        msg = data.message;
    }else{
        msg = data;
    }
    return {error: true, message: msg}
  }
  return data;
};
