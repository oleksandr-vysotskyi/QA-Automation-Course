import fetch from "node-fetch";

export async function getPosts(url) {
  const response = await fetch(url);
  return await response.json();
}

export async function postPosts(url, requestBody) {
  const response = await fetch(url, {
    method: "post",
    body: JSON.stringify(requestBody),
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
}
