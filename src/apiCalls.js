import axios from "axios";

function handleLogin() {
  axios
    .post("http://127.0.0.1:8000/api/login", {
      username: "Arda123456",
      password: "benimadimarda",
    })
    .then((res) => {
      console.log("Logged in:", res.data);
      localStorage.setItem("accessToken", res.data.access);
      localStorage.setItem("refreshToken", res.data.refresh);
    })
    .catch((err) => {
      console.error("Login failed:", err.response?.data || err.message);
    });
}

function handleCreatePost() {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    console.error("No access token—user is not logged in");
    return;
  }

  axios
    .get("http://127.0.0.1:8000/api/comments", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        post_name: "My first post",
        tag: "All",
      },
    })
    .then((response) => {
      console.log("Comments:", response.data);
    })
    .catch((err) => {
      console.error(err);
    });
}

async function createComment(commentText, postId) {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    console.error("No access token—user not logged in");
    return;
  }

  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/create-comment",
      {
        comment: commentText,
        post: postId,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log("Comment created:", response.data);
  } catch (err) {
    if (err.response) {
      console.error(
        `Failed (HTTP ${err.response.status}):`,
        err.response.data
      );
    } else {
      console.error("Network or other error:", err.message);
    }
  }
}

function viewMyPost() {
  const accessToken = localStorage.getItem("accessToken");

  axios
    .get("http://127.0.0.1:8000/api/my-posts", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log("My posts:", response.data);
    })
    .catch((error) => {
      console.error("Error fetching posts:", error);
    });
}

async function logout() {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  console.log("Logging out with refresh token:", refreshToken);
  if (!refreshToken) {
    console.warn("No refresh token; skipping server call.");
    localStorage.removeItem("accessToken");
    return;
  }

  try {
    await axios.post(
      "http://127.0.0.1:8000/api/logout/",
      { refresh: refreshToken, access: accessToken },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  } catch (err) {
    console.error("Logout failed:", err.response?.data || err.message);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }
}

