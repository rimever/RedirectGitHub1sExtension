chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
  let url = tabs[0].url;
  let gitHubUrl = "https://github.com/"
  if (url.indexOf(gitHubUrl) == 0) {
    url = url.replace(gitHubUrl,"https://github1s.com/")
  }else {
    url = gitHubUrl;
  }
  window.open(url,"_blank");
});