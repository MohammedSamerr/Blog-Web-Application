package DevServer.example.NewsBlog.Service;

import DevServer.example.NewsBlog.entity.Post;

import java.util.List;

public interface PostService {

     Post savePost(Post post);

     public List<Post> listAllPosts();
     public Post getPostById(Long postId);
     public void likePost(Long postId) ;
     List<Post> searchByName(String postTitle);
}
