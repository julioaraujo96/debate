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
  userProfileShow(username: string) {
    return `/user/${username}`;
  },
  userPostShow(username: string, postId: string) {
    return `/user/${username}/posts/${postId}`;
  },
  searchPage(term: number) {
    return `/search?term=${term}`;
  },
};

export default paths;
