package DevServer.example.NewsBlog.Service;

import DevServer.example.NewsBlog.entity.Comment;
import org.springframework.stereotype.Service;

import java.util.List;


public interface CommentService {
    public Comment createComment(Long postId, String postedBy, String content);
    public List<Comment> getAllComments(Long postId);
}
