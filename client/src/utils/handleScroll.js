const handleScrollSection = (id) => {
  const navbarHeight = 30;
  const topic = document.getElementById(id);

  if (topic) {
    const topOffset =
      topic.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
    window.scrollTo({
      top: topOffset,
      behavior: "smooth",
    });
  }
};

export default handleScrollSection;
