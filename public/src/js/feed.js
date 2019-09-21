var shareImageButton = document.querySelector("#share-image-button");
var createPostArea = document.querySelector("#create-post");
var closeCreatePostModalButton = document.querySelector(
  "#close-create-post-modal-btn"
);

function openCreatePostModal() {
  createPostArea.style.display = "block";
  // Ask for prompt if browser support install banner
  if (deferredPrompt) {
    // Ask for prompt
    deferredPrompt.prompt();

    // check user's selection
    deferredPrompt.userChoice.then(function(choiceResult) {
      console.log(choiceResult.outcome);

      // closed or deny prompt
      if (choiceResult.outcome === "dismissed") {
        console.log("user cancelled installation");
      } else {
        console.log("user added to home screen");
      }
    });

    deferredPrompt = null;
  }
}

function closeCreatePostModal() {
  createPostArea.style.display = "none";
}

shareImageButton.addEventListener("click", openCreatePostModal);

closeCreatePostModalButton.addEventListener("click", closeCreatePostModal);
