const generateShareLinks = (articleUrl: string, title: string) => {
    const encodedUrl = encodeURIComponent(articleUrl);
    const encodedTitle = encodeURIComponent(title);

    const facebookShareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    const instagramShareLink = `https://www.instagram.com/?url=${encodedUrl}`;
    const twitterShareLink = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;

  return [
    { shareUrl: twitterShareLink, title: "Twitter" },
    { shareUrl: facebookShareLink, title: "Facebook" },
    { shareUrl: instagramShareLink, title: "Instagram" },
  ]
}

export default generateShareLinks;