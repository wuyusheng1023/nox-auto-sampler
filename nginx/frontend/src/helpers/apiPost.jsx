export default function post(data, url) {
  const d = new Date();
  console.log(d.toISOString(), 'Post data:', data);
  fetch(url, {
    method: "POST",
    headers: {
      'Accept': 'application/json, text/plain',
      'Content-Type': 'application/json; charset=UTF-8',
      // 'X-CSRFToken': csrftoken
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then((res) => console.log(d.toISOString(), 'Post response data:', res))
    .catch(console.error);
};
