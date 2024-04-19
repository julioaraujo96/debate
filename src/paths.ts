const paths = {
  home() {
    return '/';
  },
  topicShow(topicSlug: string) {
    return `/topics/${topicSlug}`;
  },
  postCreate(topicSlug: string) {
    return `/topics/${topicSlug}/posts/new`;
  },
  postShow(topicSlug: string, postId: string) {
    return `/topics/${topicSlug}/posts/${postId}`;
  },
  userPostShow(username: string) {
    return `/user/${username}`;
  },
  searchPage(term: number) {
    return `/search?term=${term}`;
  },
};

export default paths;
